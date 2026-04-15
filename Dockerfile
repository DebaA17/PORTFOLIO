# -------- Build Stage --------
FROM node:24-alpine AS builder

WORKDIR /app

# Enable pnpm
RUN corepack enable pnpm

# Copy dependency files first (better caching)
COPY package.json pnpm-lock.yaml* pnpm-workspace.yaml* ./

# Install all deps (including dev for build)
RUN pnpm install --frozen-lockfile

# Disable Next telemetry
ENV NEXT_TELEMETRY_DISABLED=1
ENV DOCKER_BUILD=true

# Copy rest of the project
COPY . .

# Build Next.js app
RUN pnpm build

# Standalone output already bundles the needed runtime deps,
# but pruning keeps the builder layer smaller and prevents accidental copies.
RUN pnpm prune --prod


# -------- Production Stage --------
FROM node:24-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

# OCI labels
LABEL org.opencontainers.image.source="https://github.com/DebaA17/PORTFOLIO"
LABEL org.opencontainers.image.description="Personal portfolio website container image"
LABEL org.opencontainers.image.licenses="MIT"

# Copy only the standalone server output + static assets
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

# Create non-root user
RUN addgroup -S appgroup && adduser -S appuser -G appgroup \
    && chown -R appuser:appgroup /app

USER appuser

EXPOSE 3000

CMD ["node", "server.js"]

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

# Copy rest of the project
COPY . .

# Build Next.js app
RUN pnpm build

# Remove devDependencies after build
RUN pnpm prune --prod


# -------- Production Stage --------
FROM node:24-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# OCI labels
LABEL org.opencontainers.image.source="https://github.com/DebaA17/PORTFOLIO"
LABEL org.opencontainers.image.description="Personal portfolio website container image"
LABEL org.opencontainers.image.licenses="MIT"

# Copy only necessary files from builder
COPY --from=builder /app/package.json ./
COPY --from=builder /app/next.config.mjs ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules

# Create non-root user
RUN addgroup -S appgroup && adduser -S appuser -G appgroup \
    && chown -R appuser:appgroup /app

USER appuser

EXPOSE 3000

CMD ["node_modules/.bin/next", "start", "-p", "3000"]

# ---- Build Stage ----
FROM node:20-alpine AS builder

WORKDIR /app

RUN npm install -g pnpm

COPY package.json pnpm-lock.yaml* pnpm-workspace.yaml* ./
RUN pnpm install --frozen-lockfile \
    && pnpm exec next telemetry disable

COPY . .
RUN pnpm build

# ---- Production Stage ----
FROM node:20-alpine AS runner

# OCI labels (belong in final image)
LABEL org.opencontainers.image.source="https://github.com/DebaA17/PORTFOLIO"
LABEL org.opencontainers.image.description="Personal portfolio website container image"
LABEL org.opencontainers.image.licenses="MIT"

WORKDIR /app
ENV NODE_ENV=production

# Copy only required runtime files
COPY --from=builder /app/package.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.mjs ./
COPY --from=builder /app/node_modules ./node_modules

# Non-root user
RUN adduser -D appuser && chown -R appuser /app
USER appuser

EXPOSE 3000

CMD ["node_modules/.bin/next", "start", "-p", "3000"]

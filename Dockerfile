# Node.js with pnpm and Next.js
FROM node:20-alpine

# OCI standard labels for image metadata
LABEL org.opencontainers.image.source="https://github.com/DebaA17/PORTFOLIO"
LABEL org.opencontainers.image.description="Personal portfolio website container image"
LABEL org.opencontainers.image.licenses="MIT"

# Set working directory
WORKDIR /app

# Install pnpm
RUN npm install -g pnpm

# Copy only package files first for better caching
COPY package.json pnpm-lock.yaml* pnpm-workspace.yaml* ./


# Install dependencies
RUN pnpm install --frozen-lockfile \
	&& pnpm exec next telemetry disable

# Copy the rest of the app
COPY . .

# Build the Next.js app
RUN pnpm build


# Create a non-root user and switch to it
RUN adduser -D appuser \
	&& chown -R appuser /app
USER appuser

# Expose port (default Next.js port)
EXPOSE 3000

# Start the app
CMD ["pnpm", "start"]

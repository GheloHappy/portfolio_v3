# Build stage
FROM node:23.0-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy all files
COPY . .

# Build the Next.js application
RUN npm run build

# Production stage
FROM node:23.0-alpine AS runner

WORKDIR /app

# Set to production environment
ENV NODE_ENV production

# Create non-root user
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy standalone output and static files
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

# Set ownership to non-root user
USER nextjs

# Expose the port
EXPOSE 5001

# Start the application
CMD ["node", "server.js"]
#CMD ["npm", "run", "start"]

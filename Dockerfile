# Build
FROM node:22-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Copy
FROM node:22-alpine

WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package*.json ./
RUN npm ci --omit=dev
# only for sqlite
COPY --from=builder /app/drizzle.config.json
RUN npm i drizzle-kit && npm run db:migrate
# Run
ENV NODE_ENV=production
EXPOSE 3000

CMD ["node", "dist/src/main.js"]
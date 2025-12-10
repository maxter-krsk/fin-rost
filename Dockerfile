# syntax=docker/dockerfile:1

FROM node:20-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json* yarn.lock* pnpm-lock.yaml* ./

# установим зависимости с учётом lock-файла
RUN if [ -f package-lock.json ]; then npm ci; \
    elif [ -f yarn.lock ]; then yarn install --frozen-lockfile; \
    elif [ -f pnpm-lock.yaml ]; then npm i -g pnpm && pnpm i --frozen-lockfile; \
    else npm i; fi

FROM node:20-alpine AS builder
WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1

COPY --from=deps /app/node_modules ./node_modules
COPY . .

# исходники у тебя в src/, Next это учтёт автоматически
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# говорим Next'у, какой порт и интерфейс использовать
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

# standalone-вывод + статика + public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

EXPOSE 3000

# server.js генерируется Next в режиме standalone
CMD ["node", "server.js"]

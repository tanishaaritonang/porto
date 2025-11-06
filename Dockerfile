# Gunakan Node.js versi LTS
FROM node:20-alpine AS builder

# Tentukan direktori kerja di dalam container
WORKDIR /app

# Salin file package dan install dependensi
COPY package*.json ./
RUN npm install

# Salin semua file ke container
COPY . .

# Build Next.js
RUN npm run build

# Tahap runtime: image lebih ringan
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production

# Salin hasil build dan dependensi produksi
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./

# Port default Next.js
EXPOSE 3000

# CMD ["npm", "start"] # Commented out as requested - don't run the app

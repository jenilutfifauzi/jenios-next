# ---------- Tahap 1: Build ----------
    FROM node:18-alpine AS builder

    # Buat direktori kerja
    WORKDIR /app
    
    # Salin file dependency dan install terlebih dahulu
    COPY package*.json ./
    RUN npm install
    
    # Salin semua file ke dalam container
    COPY . .
    
    # Build aplikasi Next.js
    RUN npm run build
    
    # ---------- Tahap 2: Production ----------
    FROM node:18-alpine
    
    # Buat direktori kerja di image akhir
    WORKDIR /app
    
    # Install hanya dependency production
    COPY package*.json ./
    RUN npm install --omit=dev
    
    # Salin hasil build dari image builder
    COPY --from=builder /app/.next .next
    COPY --from=builder /app/public public
    COPY --from=builder /app/node_modules node_modules
    COPY --from=builder /app/next.config.js ./
    COPY --from=builder /app/package.json ./
    
    # Jalankan aplikasi Next.js
    EXPOSE 3000
    CMD ["npm", "start"]
    
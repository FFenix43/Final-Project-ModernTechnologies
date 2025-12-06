# Multi-stage Dockerfile for fullstack app (frontend + backend)

# 1) Build frontend
FROM node:18-slim AS frontend-builder
WORKDIR /app/frontend
COPY frontend/package*.json ./
RUN npm ci --silent
COPY frontend/ .
RUN npm run build --silent

# 2) Build backend (install deps)
FROM node:18-slim AS backend-builder
WORKDIR /app/backend
COPY backend/package*.json ./
RUN npm ci --silent
COPY backend/ .

# 3) Final image: copy backend and built frontend
FROM node:18-slim
ENV NODE_ENV=production
WORKDIR /app

# Install python3 for running the predictor
RUN apt-get update && apt-get install -y --no-install-recommends \
	python3 \
	&& rm -rf /var/lib/apt/lists/*

# copy backend
COPY --from=backend-builder /app/backend ./backend
# copy node_modules from backend-builder
COPY --from=backend-builder /app/backend/node_modules ./backend/node_modules
# copy frontend build into backend to be served
COPY --from=frontend-builder /app/frontend/build ./frontend/build

# copy ai_model so predictor can run inside the container
COPY ai_model ./ai_model
# copy CSV dataset (used by predictor)
COPY customer_churn_400.csv ./customer_churn_400.csv

# Make entrypoint executable in backend
WORKDIR /app/backend
RUN chmod +x ./entrypoint.sh || true

# Expose port expected by GCP
EXPOSE 8080

# Start the entrypoint which runs the predictor then the server
ENTRYPOINT ["/app/backend/entrypoint.sh"]

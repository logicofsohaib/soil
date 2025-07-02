# Step 1: Build React app
FROM node:18 AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

ENV NODE_OPTIONS=--openssl-legacy-provider
RUN npm run build

# Step 2: Serve with nginx
FROM nginx:alpine

COPY --from=build /app/build /usr/share/nginx/html

# ✅ No need for default.conf anymore (we're using EC2 nginx)
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]


# Stage 1 - Build the React app
FROM node:18-alpine as build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire project
COPY . .

# Build the app with increased memory limit
RUN node --max-old-space-size=2048 node_modules/.bin/tsc && npm run build

# Stage 2 - Serve the built app with a lightweight HTTP Server
FROM nginx:alpine

# Copy the Nginx configuration file
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy the built app from the previous stage (assuming the build output directory is named 'dist')
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 3000
EXPOSE 3000

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]

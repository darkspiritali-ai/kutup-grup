# Use official Node.js 20 image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package.json and server.js
COPY package.json ./
COPY server.js ./

# We install dependencies using legacy-peer-deps to avoid React 19 conflicts
RUN npm install --omit=dev --legacy-peer-deps

# Copy the pre-built dist folder from the repository
COPY dist ./dist

# Expose ports 3000 and 80
EXPOSE 3000
EXPOSE 80

# Start the server
CMD ["node", "server.js"]

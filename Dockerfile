# Use official Node.js 20 image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package.json and server.js
COPY package.json ./
COPY server.js ./

# We only need express for the production server, so we install it directly
RUN npm install express

# Copy the pre-built dist folder from the repository
COPY dist ./dist

# Expose port 3000
EXPOSE 3000

# Start the server
CMD ["node", "server.js"]

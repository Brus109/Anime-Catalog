# Use node.js base image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package files and install dependencies 
COPY package*.json ./
RUN npm install 

# Copy the rest of the backend code
COPY . .

# Build TypeScript
RUN npm run build

# Expose port and run the server
EXPOSE 5000
CMD ["node", "dist/index.js"] 

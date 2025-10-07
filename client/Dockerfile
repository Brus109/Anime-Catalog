# Use Node.js base image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package files and install dependencies 
COPY package*.json ./
RUN npm install

# Copy the rest of the frontend code
COPY . . 

# Build React app
RUN npm run build 

# Use a ligthweight web server to server the static files
RUN npm install -g serve
EXPOSE 3000
CMD ["serve", "-s", "build"]
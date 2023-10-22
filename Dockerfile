# Dockerfile
FROM ubuntu:latest

# Use the official Node.js 16 image as a base image
FROM node:16

# Install Prettier globally
RUN npm install -g prettier

# Install Pandoc
RUN apt-get update && \
    apt-get install -y pandoc && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# Create a script to run prettier on all .html files
RUN echo 'for file in $(find . -name "*.html"); do prettier --write "$file"; done' > /usr/local/bin/format-html

# Make the script executable
RUN chmod +x /usr/local/bin/format-html

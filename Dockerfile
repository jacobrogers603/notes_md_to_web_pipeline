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

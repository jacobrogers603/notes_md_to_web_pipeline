# Dockerfile
FROM ubuntu:latest

# Install Pandoc
RUN apt-get update && \
    apt-get install -y pandoc && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

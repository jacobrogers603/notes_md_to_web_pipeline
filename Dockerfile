# Dockerfile
FROM ubuntu:latest

# Install Node.js and npm
RUN apt-get update && \
    apt-get install -y curl && \
    curl -sL https://deb.nodesource.com/setup_16.x | bash - && \
    apt-get install -y nodejs

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

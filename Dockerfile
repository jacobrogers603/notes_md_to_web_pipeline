# Use the official Node.js 16 image as a base image
FROM node:16

# Install Pandoc
RUN apt-get update && \
    apt-get install -y pandoc && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# Install TypeScript globally
RUN npm install -g typescript

# Install Prettier globally
RUN npm install -g prettier

# Create a script to run prettier on all .html files
RUN echo 'for file in $(find . -name "*.html"); do prettier --write "$file"; done' > /usr/local/bin/format-html

# Make the script executable
RUN chmod +x /usr/local/bin/format-html

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy the current directory contents into the container at /usr/src/app
COPY . .

# Install any dependencies specified in package.json
RUN npm install

# Compile TypeScript to JavaScript
RUN npx tsc

# Run the command to convert MD to HTML and format HTML files
CMD sh -c "\
    node toc.js && \
    find . -name '*.md' | while IFS= read -r file; do \
      echo \"Processing \$file\"; \
      pandoc \"\$file\" --template template.html --toc -o \"\${file%.md}.html\"; \
    done && \
    format-html"

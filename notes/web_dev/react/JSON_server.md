---
title: "JSON server"
---

# JSON Server

Allows us to create a mock [rest api](../REST_API.html) with our own data.

## Steps to setup

    npm install json-server

create a `db.json` file with some data

then start server
    
    json-server --watch db.json --port 5000

Then if you go to `http://localhost:5000/posts/1`  

Then run your react dev server

Don't run it on the same port as the dev server 
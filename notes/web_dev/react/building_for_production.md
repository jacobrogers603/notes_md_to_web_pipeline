---
title: "building for production in react"
---

# building for production in react

When we are ready to build the page for production run the following command. This will make a build directory in your project which is everything you would be hosting. The rest of the stuff in your project is only for development.

    npm run build

To test it on your local machine, run serve, first install that.

    npm install serve
    serve -s build -p 8000 // or some port number, build is build directory.

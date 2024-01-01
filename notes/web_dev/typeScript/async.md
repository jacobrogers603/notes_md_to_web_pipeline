---
title: "async in ts / js"
---

# Async

`async` is a keyword used to declare a function as asynchronous, allowing you to use `await` within it to pause the execution until a `Promise` is resolved.

**used for operations like API calls, timeouts, and any other tasks that depend on execution time or external data.**

Async Function: When you put `async` before a function definition, it becomes an async function. This function returns a Promise.

    async function fetchData() {
        // Function body
    }

Await Keyword: Inside async functions, you can use `await` before a function that returns a Promise. It makes JavaScript wait until that promise settles and returns its result.

    async function fetchData() {
        let data = await someAsyncCall();
        console.log(data); // Waits for someAsyncCall to resolve and prints the result.
    }

Error Handling: Typically combined with try/catch for handling rejected promises.

    async function fetchData() {
        try {
            let data = await someAsyncCall();
            console.log(data);
        } catch (error) {
            console.error("An error occurred:", error);
        }
    }

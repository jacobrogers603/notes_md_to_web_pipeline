---
title: "REST API"
---

# REST API

REST API = representational state transfer application programming interface.

Is a set of rules and conventions for building and interacting with web services. It allows different software applications to communicate over the internet using HTTP methods (GET, POST, PUT, DELETE, etc).

REST APIs are widely used for their simplicity, scalability, and compatibility across various types of applications and platforms.

## A RESTful system

A RESTful system has:

1. resources: each piece of information is considered a resource, identified by a URL.
2. stateless: each request from the client to the server must contain all the information the server needs to fulfill the request (server does not share store the user session information).
3. standard methods: uses standard HTTP methods to preform operations on resources ( CRUD: create, read, update, delete).
4. representation: resources can be represented in various formats: JSON, XML, HTML, etc with JSON being the most popular.

## Example of fetch for delete

    const deleteTask = async (id) => {
        // call a fetch to the backend with method of delete for a specific id.
        await fetch(`http://localhost:5000/tasks/${id}`, {
        method: 'DELETE'
        });

        // Update the UI.three_cols
        setTasks(tasks.filter((task) => task.id !== id));
    };

## Example of fetch for post

    const addTask = async (task) => {
        const res = await fetch(`http://localhost:5000/tasks`,
        {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(task)
        });

        const data = await res.json();

        setTasks([...tasks, data]);
    };
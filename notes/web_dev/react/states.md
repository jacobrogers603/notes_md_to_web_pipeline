---
title: "States"
---

# states

You want states to be at the top level (app.jsx) when you need them to be accessible by multiple components.

# The useState hook in React

If you want a variable to not be separate from a component / part of its state, use the hook useState. **Declare this inside of the component's function.**

## Example of Usage

Need to import 

    import { useState } from 'react'

Declare a `const` with brackets with: `[name of the state, function to update the state]`, set equal to `useState(<default state value>)` with the default state value as the argument. *In this case the default state is an array of objects.*

    const[tasks, setTasks] = useState({
        id: 1,
        text: "Doctor appt",
        day: "Feb 5th at 2:30pm",
        reminder: true,
    }, 
    ...
    )

This would be **done inside of the component's function.**
    const Tasks = () => {
    //hook code...

    return (
        <>
        {tasks.map((task) => (
            <h3 key={task.id}>{task.text}</h3>
        ))}
        </>
      );
    };

### updating state

To update a state call the second parameter you named and pass in the new state.

    setTasks({new obj})

If you want to append something new to what is already in that state:

    setTasks([...<nameOfState>, <new data>])

In our example:

    setTasks([...tasks, {new object}])


# useEffect hook

Lets you perform side effects in function components. It is used for operations like data fetching, subscriptions, or manually changing the DOM that don't fit into the render flow. **useEffect runs after every render by default**, but you can customize it to run only when certain values have changed.

Often used if you want something to happen right away when the page loads.

The first argument is a function that contains the side effect logic.
The second argument is an optional array of dependencies. useEffect runs after the initial render and after every update where the specified dependencies have changed.

    useEffect(() => {
    // Side effect operations
    }, [dependencies]);

Common scenarios for useEffect include:

1. Fetching Data: Run once when the component mounts or when certain data changes.
2. Subscriptions/Listeners: Set up on mount and clean up before unmounting or on update.
3. Reacting to Prop or State Changes: Execute code in response to changing props or state.

## example usage of useEffect

    import {useEffect} from 'react';

This code is using the useEffect hook to preform a side effect. The empty dependency array at the end means it runs once after the initial render.

**fetch** is used to make a **GET** request to the URL provided, which is a server with JSON data on it. It awaits until the fetch is complete and the promise settles, that data is stored in the res variable.

**res.json()** converts the response from the server into JSON format. 

    useEffect(() => {
        const fetchTasks = async () => {
            const res = await fetch('http://localhost:5000/tasks);

            const data = await res.json();
            console.log(data);
        }

        fetchTasks();
    }, []);
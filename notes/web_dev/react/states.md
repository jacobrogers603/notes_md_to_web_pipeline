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

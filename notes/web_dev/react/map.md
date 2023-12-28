---
title: "mapping in react"
---

# Map

We can use map() in react to make a list.

Map takes in a function and works on an array.

```
let numbers = [1, 2, 3];
let doubled = numbers.map((num) => num * 2); // [2, 4, 6]
```

## example

Assuming `tasks` is a list of objects as follows:

    {
        id: 1,
        text: "Doctor appt",
        day: "Feb 5th at 2:30pm",
        reminder: true,
    }, 
    ...

You can use `map` to create a list of all the `text` fields in the `tasks` list and put them in `h3` tags.
*This is assumed to be in a component file called Tasks.*

    const Tasks = () => {
        return (
            <>
            {tasks.map((task) => (
                <h3 key={task.id}>{task.text}</h3>
            ))}
            </>
        );
    };

Back in `App.jsx` you can call the component and it will add the printed list to the screen.

    <Tasks />
---
title: "ternary in react"
---

# Ternary in React / general in line conditionals

Say for example we have in app.jsx at the top level that is displaying a Task component on the screen: 

    <Tasks tasks={tasks} onDelete={deleteTask}/>

But what if we want to check if the tasks list is empty and if it is empty display a message instead of a task component? **We can embed the entire life in curly braces and make it a ternary statement**:

    {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask}/>) : ('No Tasks to Display')}

## Shorthand ternary empty else

If you want the shorthand to write a ternary that does nothing in the else case, use **&&**.

For example, using the && syntax: 

    // If isLoggedIn is true, render Welcome component; otherwise, do nothing
    return (
    isLoggedIn && <Welcome />
    );

And the counterpart example using the traditional syntax:

    // If isLoggedIn is true, render Welcome component; otherwise, do nothing
    return (
    isLoggedIn ? <Welcome /> : null
    );

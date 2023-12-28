---
title: "react events"
---

# Events in React

## onClick

Can use onClick for a button for example.

Here a button calls, when it is clicked, a const variable that is assigned to an anon function that prints to the log. _By using **e** you can print all information about that object to the log if you want._

```
  const onClick = (e) => {
    console.log(e);
  };

  return (
    <button
      onClick={onClick}
      style={{backgroundColor: props.color}}
      className="btn">
      {props.text}
    </button>
  );
```

# Passing args up the prop pipeline to a function example

Here is the function, `deleteTask`, at the top level `app.jsx` that is wanting to be called. Note that it takes one argument, `id`.

```
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id));
}
```

In `app.jsx` we have a `Tasks` component-element that passes a piece of state called `tasks` down to the `Tasks` component. Further a prop called `onDelete` is passed down with a reference to the function `deleteTask` at the top level.

```
const[tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctor appt",
      day: "Feb 5th at 2:30pm",
      reminder: true,
    },
    ...// Rest of the state.
    ...// Other code in app.jsx

    <Tasks tasks={tasks} onDelete={deleteTask}/>
```

In the `Tasks.jsx` component, the `tasks` state from `app.jsx` is passed in as a prop and has a map run over it, accessing each element of it in a temporary variable called `task.` It creates a `Task` component-element for each `task` in `prop.tasks`. You can see that the `id`, `task` itself, and the `onDelete` prop are passed down again. This `props.onDelete` is a reference to the function at the top level, getting passed down to a third level.

```
const Tasks = (props) => {
  return (
    <>
      {props.tasks.map((task) => (
        <Task key={task.id} task={task} onDelete={props.onDelete} />
      ))}
    </>
  );
};
```

At the bottom level in `Task.jsx` you can see the fields from the `task` state at the top level being used with props. Also you can see in the `FaTimes` element, which is a red-x icon, there is an `onClick event` that wants to call the `deleteTask` function at the top level, but it also wants to pass an argument to it, `id`. **To do this it needs to use an anon function that gives onDelete the ability to have parens and thus arguments and pass props.task.id**.

```
const Task = (props) => {
  return (
    <div className="task">
      <h3>
        {props.task.text}{" "}
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => props.onDelete(props.task.id)}
        />
      </h3>
      <p>{props.task.day}</p>
    </div>
  );
};
```

If you wanted to pass no arguments to the function, you could just literally put the props variable `onDelete` there, as that is a reference to the function anyway up the stream. _Note that by calling this function with no arguments, even though it is expecting an id, it will use the `e` which is the object info._

```
<FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => props.onDelete(props.task.id)} />
```

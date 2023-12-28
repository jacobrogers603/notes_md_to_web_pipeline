---
title: "react events"
---

# Events in React

## onClick

Can use onClick for a button for example.

Here a button calls, when it is clicked, a const variable that is assigned to an anon function that prints to the log. *By using **e** you can print all information about that object to the log if you want.*
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
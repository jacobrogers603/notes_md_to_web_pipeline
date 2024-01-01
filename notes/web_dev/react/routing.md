---
title: "routing in react"
---

# Routing in react (multiple pages)

    npm install react-router-dom
    
    import { BrowserRouter as Router, Route } from "react-router-dom";


You can route to difference pages by wrapping sections of your jsx code in app.jsx in the BrowserRouter tag, and Router tag.

## Example



```
return (
    <Router>
      <div className="container">
        <Header
          onAdd={() => setShowAddTask(!showAddTask)}
          showAdd={showAddTask}
          title="Ваши задачи"
        />

        <Route
          path="/"
          exact
          render={(props) => (
            <>
              {showAddTask ? <AddTask onAdd={addTask} /> : null}
              {tasks.length > 0 ? (
                <Tasks
                  tasks={tasks}
                  onDelete={deleteTask}
                  onToggle={toggleReminder}
                />
              ) : (
                "No Tasks to Display"
              )}
            </>
          )}
        />
        <Route path="/about" component={About} />
        <Footer />
      </div>
    </Router>
);
```

If you don't want page to reload upon routing, use 

    import {Link} from 'react-router-dom';

and the Link tag with to instead of href.

## How to know location

TO know the location / route we are currently on:

    import {useLocation} from "react-router-dom";

    const location = useLocation();

    location.pathname == ...


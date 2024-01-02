---
title: "routing in react"
---

# Routing in react (multiple pages)

Install the package: `npm install react-router-dom`    

Import the libraries needed:
  
  import { BrowserRouter, Route, Routes } from "react-router-dom";


You can route to difference pages by wrapping sections of your jsx code in `<BrowserRouter>` and then in `<Routes>`. Then you can define specific routes by saying `<Route path="/myPathForURL" element={jsx code to render when at this route}`. 

## Example


`app.jsx:`
```
return (
    <BrowserRouter>
      <div className="container">
        <Header
          onAdd={() => setShowAddTask(!showAddTask)}
          showAdd={showAddTask}
          title="Ваши задачи"
        />
        <Routes>
          <Route
            path="/"
            element={
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
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
```

`about.jsx`:
```
import {Link} from 'react-router-dom';

const About = () => {
  return (
    <div>
        <h4>Version 1.0.0</h4>
        <Link to="/">Home</Link>
    </div>
  )
}
export default About
```

If you don't want page to reload upon routing, use 

    import {Link} from 'react-router-dom';

**and the Link tag with to instead of a with href.**

## How to know location

TO know the location / route we are currently on:

    import {useLocation} from "react-router-dom";

    const location = useLocation();

    location.pathname == ...

## list of elements

- BrowserRouter: wraps the application's routing
- Route: define different routes
- Link: navigates to routes
- Switch: renders the first matching route

## params

You can pass params with routes like http://website/page/id

use useNavigate
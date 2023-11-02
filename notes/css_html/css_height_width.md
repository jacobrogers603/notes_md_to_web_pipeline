---
title: "CSS Grid"
---

# height
## height of body, html node...
A guy on reddit said... 
```
html {
    height: 100%;
    height: calc(100% - 4rem); // If we have a 4rem nav bar.
}

body {
    min-height: 100%;
}
```
Somehow this makes sure the body covers the whole viewport when we have a navbar and make the screen narrow and scroll down. Seems to make everything work well.

# width
## width of body
should normally be 100%
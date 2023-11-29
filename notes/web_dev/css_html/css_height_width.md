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

## narrow width, unable to scroll left fix by Trent
```
@media (max-width: 300px) {
    body {
        align-items: flex-start;
    }   
}
```

## when a grid uses auto-fit and goes from for example, 2 cols to 1 col, it will look stretched
you need to use a media query to reset the max-width
```

```
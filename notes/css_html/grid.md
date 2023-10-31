---
title: "CSS Grid"
---

# Responsive techniques

## Media queries

```
@media (min-width: 550px) {
    .gridContainer {
        grid-template-columns: repeat(2, 1fr);
    }
}
```

something like this to manually change the number of columns when the screen becomes wide enough.

## columns auto-fit min-max technique

```
grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
```

When each grid cell does not have at least 250px of space on one row, it will automatically create new rows to fit them all.

*you can combine that with media queries to make more complex lay outs.*

**auto-fit** Will make the grid fill up the maximum size of the browser.
**auto-fill** Will not extend the size of the grid cells past their max size.
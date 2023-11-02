---
title: "CSS Grid"
---
# axes
Grid has the **inline axis (row / x)** and the **block axis (column / y)**.

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

## place-items
For aligning items within their grid cells. A shorthand property that controls both *align-items* and *justify-items* at the same time.

### align-items
Will set the *align-self* property on all child items, thus controlling the alignment of the children along the cross axis.

### justify-items
Will set the *justify-self* property on all child items, thus controlling the justification of the items within their grid cells.

## place-content
For aligning the entire set of grid cells within a container. A shorthand for *justify-content* and *align-content* at the same time.

### justify-content
Will set the justification of all grid cells themselves, along the inline axis.

### align-content
Sets the distribution of space between and around content items (grid cells) along the block axis.


---
title: "CSS selectors"
---

Decides what element in your html to apply the styling to.

## Descendant selectors
You can access the child of an element as follows:
```
.myElement .myElementsChild {
    <!-- styling... -->
}
``` 

You can access any level deep of grandchildren using the **>** operator.
```
.myElement > .myElementsChild > p {
    <!-- will target all the p tags that are the grandchildren of myElement -->
}
```
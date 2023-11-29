---
title: "text area"
---

# To get rid of scroll bars cross browsers

```
    resize: none; /* Disable textarea resizing */
    overflow: auto; /* Set overflow to auto to hide scrollbars */
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* Internet Explorer/Edge */
    scrollbar-color: transparent transparent; /* Firefox */
```
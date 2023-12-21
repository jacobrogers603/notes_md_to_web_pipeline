---
title: "arrays and loops"
---

# Arrays and loops in TS

## forEach

You can loop through each item in a list and have reference to it as a variable with:
```
COLORS.forEach(color => {
      retval += color;
})
```
We are using a combination of an in-line arrow function and the forEach method. 

## indexOf

To find the index where a certain value in an array occurs you can use:
```
let fruits = ["apple", "banana", "orange"];
let index = fruits.indexOf("banana");

console.log(index); // Outputs: 1 (if "banana" is found) or -1 (if not found)
```
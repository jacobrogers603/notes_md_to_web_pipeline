---
title: "TS conversions"
---

# Conversions in TS

## String to Number

### parseInt & parseFloat

Parses up to the first non-numeric character with parseInt returning an integer and parseFloat returning a floating-point number.

### +

The unary **+** operator converts the entire string to a number. 

Does not handle non-numeric characters well. Will return NaN if it isn't purely numeric. 

### examples

`+"123.45" -> 123.45`

`parseInt("123.45") -> 123`

`parseFloat("123.45") -> 123.45`

## number to string

You can use **num.toString()** or **template literals**.
```
let num = 123;
let str1 = num.toString();
let str2 = `${num}`;
```

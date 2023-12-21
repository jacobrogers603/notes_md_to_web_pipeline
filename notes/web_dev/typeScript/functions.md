---
title: "functions"
---

# example

    function name(): string {

    }

## export

if you said `export function name()...` you could import that function and use it in another location

# Arrow Functions / anon functions

**=>** is syntax for an anonymous function. *It does not bind its own: this, arguments, super, or new.target. Useful if you want to preserve the lexical scope of this*

## Basic Syntax

```
(parameters) => {
    // Function body
}
```

## examples

### No parameters

`let sayHello = () => console.log("Hello");`

### Single parameter 

`let square = (x) => x * x;`

### Multiple parameters

`let add = (a, b) => a + b;`

### With a function body (requires {})

```
let greet = (name) => {
  let message = `Hello, ${name}`;
  return message;
};
```

### lexical this

arrow functions capture the 'this' value of the enclosing context, making them ideal for use in callbacks and methods defined with objects.

```
class MyClass {
  value = 20;
  showValue = () => {
    console.log(this.value); // `this` refers to MyClass instance
  }
}
```

### Shorthand for one parameter

Here we do not need the ()s around `item`, which is the single parameter being passed into the arrow function. If there is one parameter, the ()s can be omitted.
```
let array = [1, 2, 3, 4, 5];

array.forEach(item => {
  console.log(item);
});
```
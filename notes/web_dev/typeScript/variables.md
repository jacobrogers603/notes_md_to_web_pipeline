---
title: "vars"
---

# Vars in TS

Note: TS will infer type if not explicitly defined. 

## declaration

1. **let**: block-scoped, reassignable.
2. **const**: block-scoped, not reassignable.
3. **var**: function-scoped, reassignable.

## types

### basic types

- number: `let myVar: number = 21;`
- string
- boolean
- any: Opt out of the type system

### Twlightzone types

- **null**: represents absence of a value.

- **undefined**: A variable that is declared but not assigned.

- **void**: For functions that do not return a value.

- **never**: Indicated values that never occur. Used in functions that never return e.g. throw error: 
```
function error(message: string): never {
    throw new Error(message);
}
```
- **unknown**: Type-safe counterpart of any. Represents any value, but type must be checked before preforming operations.
```
let value: unknown = 30;
if (typeof value === "number") {
    let sum = value + 10;
}
```
### Complex types

- **Arrays**: `let list: number[] = [1, 2, 3];`
- **Tuples**: Tuples are accessed like arrays. *Note, you can have any number of values in a tuple, just define their types as follows:* 
```
let myTuple: [string, number, boolean] = ["hello", 42, true];
```
- **Enums**:
```
enum Color {Red, Green, Blue}
let c: Color = Color.Green;
```
- **Objects**: Represents non-primitive types (anything not number, string, boolean, symbol, null, or undefined): `let user: object = { name: "Alice", age: 25 };`
- **Functions**: `let myFunction: (a: number, b: number) => number;`
- **symbol**: Used to create unique keys ensuring no property name conflicts. 
```
let sym1 = Symbol("key1");
let sym2 = Symbol("key2");

let obj = {
  [sym1]: "value1",
  [sym2]: "value2"
};
// obj[sym1] != obj[sym2]

```
*Note: Symbols are not just unique strings; they are a distinct type and serve the purpose of generating a unique identifier that won't clash with any other value or symbol.*

### Type Assertion

Tell the compiler to treat a variable as a certain type.

    let someValue: unknown = "this is a string";
    let strLength: number = (someValue as string).length;



---
title: Functions
description: Functions in Cranberry
---

A function is a block of code that can be called any time multiple times. These functions can also take parameters to change their outcome and can return values when called too.

Define a function using the `fn` keyword followed by its name, parenthesese, and a block. (Optional parameters can go inside the parenthesese).

```cranberry
fn MyFunction() {
	print("foo")
	print("bar")
}
```

Call a function to run it by writing its name, followed by parenthese and any arguments it takes.

```cranberry
MyFunction()
```

### Example

Here's a simple `Add()` function that takes 2 numbers and prints their added output:

```cranberry
fn Add(a, b) {
	print(a + b)
}

Add(1, 3)
Add(6, 7)
Add(12, 51)
```

## Returning Values

Use the `return` keyword (or `out`) to stop a function and optionally return a value.

```cranberry
fn TimesFive(num) {
	return num * 5
}

print(TimesFive(6))  # prints 30
```

## Lambda Functions

Functions are actually first class objects that can be manipulated and passed around. This allows you to write functions without names and just as an object.

Use `fn` followed by parenthese + arguments (no function name) and a block.

```cranberry
let x = fn() {
	print("yes")
}
```

You can call `x()` to run the function or pass it to a separate function. This can be useful for creating callbacks and assigning functions to certain things at runtime.

### Example

If there was a button object like the one below, we can make a function that prints `clicked!` as a callback. (And also make it a one liner arrow function)

```cranberry
button.OnClick(fn() => print("clicked!"))
```

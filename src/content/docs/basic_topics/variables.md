---
title: Variables
description: Creating variables in Cranberry.
---

Store values in a variable using the `let` keyword followed by the name of the variable. Variable definitions are always in the *local scope*.

```cranberry
let x = 10
```
You can also define multiple variables using commas.

```cranberry
let width, height = 20, 50
```

Use these variables in your code by entering their name:

```cranberry
let width, height = 20, 50

println("The area is:", width * height)
# The area is: 100
```

To define a variable without giving a value to it use the `nil` value.

```cranberry
let something = nil
```

## Updating Variables

Update a variable by reassigning it using an equals sign. You can only update a variable if it was declared previously in a scope or a parent scope.

```cranberry
let x = 10

x = 5
println(x) # prints 5
```

## Variable Shadowing

You can shadow a variable definition by writing the `let` statement again.
This is useful if you wanted to redefine the variable for only the current scope.

For example:

```cranberry
let x = 10

# Create a scope using `@ { ... }`
@ {
	let x = 50   # Redefine `x` inside the scope
	println(x)   # Prints 50
}

println(x)       # Prints 10
```

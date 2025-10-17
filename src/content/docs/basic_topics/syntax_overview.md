---
title: Syntax Overview
description: Some basic information on Cranberry syntax and conventions.
---

Cranberry is very similar and inspired by a bunch of languages including Rust, C#, Kotlin, Swift, Python, JS, etc. It also offers a lot of shorthands to make your code written faster.

Feel free to come back here since you don't need to memory everything.

---

### Semicolons

Cranberry discourages the use of semicolons. However you can add them for multiple inline statements or just for clarity and familiarity.

### Comments

Single line comments can be created using the hashtag (`#`).

```cranberry
# This is a comment
println("Hello World")  # These get ignored
```

### Shorthand Assignments

Cranberry allows you to use shorthand assignment operators. These include

- `+=`, `-=` : Add/Subtract and assign operator
- `*=`, `/=` : Multiply/Divide and assign operator
- `%=`, `^=` : Modulo/Power and assign operator
- `++` : Increment operator
- `--` : Decrement operator

Each assignment and shorthand assignment also returns the new value.

### Coalescing Operator

The `??` operator allows you to return a second value if the first one is falsey (false, nil, 0, etc.)

```cranberry
let x = 15
let y = x ?? 30

print(y) # prints 15
```

```cranberry
let x = nil
let y = x ?? 30

print(y) # prints 30
```

### Type Casting

Converting a value from one type to another can be done using the builtin type casting functions.

```cranberry
let my_string = "12.5"
let my_number = number(my_string)
```

This works with `string`, `number`, `bool`, `list`, and `dict` so far.

### Formatted Strings

Formatted strings (f-strings) allow you to execute code inside a string and use that as a way of formatting your values directly.

Use the dollar sign (`$`) operator before a string to make it formatted.
Then use braces inside the string for an expression.

```cranberry
let x = 10

println($"value of x is {x}")
# prints `value of x is 10`
```

Optionally you can use the `format()` function which takes a string and replaces the `{}` braces with the argument in order.

```cranberry
let name = "John"
let greeting = format("Hello, {}", name)

print(greeting) # prints `Hello, John`
```

---

## Conventions

Cranberry has a few syntax conventions that you can adhere to. These are not mandatory but can function as a style guide.

1. Cranberry uses `PascalCase` for classes and namespaces.
2. Functions, variable names, etc. use `snake_case`.
3. Using directives for namespaces must always go at the top of the file.
4. Classes using object creation should use `self` as the name for the first parameter of object methods.
5. Try leaving extra lines and using indents to improve code clarity.
6. Use tabs instead of spaces unless they improve code clarity. (Most IDEs let you change tab sizes anyways.)
6. Don't use semicolons, you probably will never use them anyway.

### Syntax Example

```cranberry
using Std::IO;
namespace Hello;

class FooBar {
	constructor(self) => self.num = 5

	fn my_function(self) {
		# This is a comment
		self.num = 10
	}
}

let my_variable = 10
println($"var is {my_variable}")
```

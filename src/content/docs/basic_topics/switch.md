---
title: Switch Statements
description: Switch statements in Cranberry.
---

A switch statement is sort of like an if statement that matches values instead of conditions. Each branch is ran only if the value matches up. They are also useful for switching between different values based on a given value.

Switch statements can also have a default condition by using an underscore (`_`).

Write `switch` followed by a value, and braces. Inside it, write the value for that branch followed by a fat arrow (`=>`) and the code.

```cranberry
let user = "guest"

switch user {
	"admin" => println("Welcome administrator.")
	"guest" => println("Welcome guest.")

	_ => println("INTRUDER ALERT!")
}
```

Or run multiple lines of code (here's a simple calculator):

```cranberry
let num1, num2 = 5, 10
let operator = '+'

let calculation = switch operator {
	'+' => {
		let result = num1 + num2
		println($"{num1} + {num2} = {result}")
	}

	'-' => {
		let result = num1 - num2
		println($"{num1} - {num2} = {result}")
	}

	'*' => {
		let result = num1 * num2
		println($"{num1} * {num2} = {result}")
	}

	'/' => {
		let result = num1 / num2
		println($"{num1} / {num2} = {result}")
	}

	_ => return println("Unknown operator")
}
```

---
title: If Statements
description: If statements in Cranberry.
---

The most important thing to have in a programming language is an if statement.
These dictate how your code will behave based on different conditions.

Create an if statement using the `if` keyword followed by the condition and braces:

```cranberry
if x > 10 {
	println("yes")
}
```

### Else-if Branches

You can use `else if` followed by another condition in case the first one isn't satisfied.

```cranberry
if user == "admin" {
	println("Administrator access.")
} else if user == "guest" {
	println("Guest access.")
}
```

If the first condition is satisfied then any else-ifs will not run.

### Else Branch

Finally comes the `else` branch. This does not take any condition and will run if none of the above conditions were satisfied (As a failsafe).

```cranberry
if user == "admin" {
	println("Admininstrator access.")
} else if user == "guest" {
	println("Guest access.")
} else {
	println("Unknown user. Intruder detected!")
}
```

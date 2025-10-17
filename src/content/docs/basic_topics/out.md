---
title: Out Statements
description: Out Statements in Cranberry
---

An out statement, similar to `break` or `return` allows you to stop a scope/block at any time and return a value. However this is more general-purpose and will stop the scope instead of an entire function or loop.

```cranberry
let food = "burger"

let nutrition = if food == "apple" {
	out "Healthy"
} else {
	out "Unhealthy"
}
```

You see in the ahove example, it essentially replaced the `if` statement with "Unhealthy". This can be useful in many cases and also works as a return statement.

### Wait what about Single Statement Blocks?

If you've read the docs so far you must have seen the fat arrow operator (`=>`) being used as a single statement block.

That single statement is also enclosed in an `out` automatically.

```cranberry
let name = if user == "john" => 100
		   else => 5
```

That is the same as writing

```cranberry
let name = if user == "john" {
	out 100
} else {
	out 5
}
```

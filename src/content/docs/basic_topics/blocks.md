---
title: Blocks
description: Blocks and scopes in Cranberry.
---

A block is a collection of statements ran sequentially. Blocks come in 3 types:

- Multi statement block
- Single statement block
- Explicit scope

### Multi Statement Block

Multiple statements can go inside of this block. You'll find most of these in things like if blocks, functions, loops, namespaces, etc. Multi statement blocks are made with braces `{...}`. Each block is scoped so all variables defined can only be accessed inside it.
Inside the braces write all the code you want executed.

```cranberry
if x > 10 {
	println("Hello")
	println("World")
}
```

### Single Statement Block

Single statements can go inside of this block. Write a fat arrow `=>` followed by the code or a value. Single statement blocks also run an `out` and are useful for shorthand inline code.

```cranberry
if x > 10 => println("Yes")
```
```cranberry
let user = "admin"
let permissions = if user == "admin" => "admin"
				  else => "guest"
```

### Explicit Scope

In a few cases you may need a separate scope for some things. (Like shadowing a variable). These function just like Multi Statement Blocks. Manually create an explicit scope using `@ { ... }`

```cranberry
let x = 10

@ {
	let x = 123
	println(x)  # prints 123
}

println(x)      # prints 10
```

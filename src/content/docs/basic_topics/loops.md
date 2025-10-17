---
title: Loops
description: Loops in Cranberry.
---

A loop runs some code multiple times. Cranberry supports 3 types of loops:

- indefinite loop (forever loop)
- while loop
- for loop

## Indefinite Loop

This is the simplest type of loop in Cranberry. Code inside it will repeat forever until the program stops or the loop is broken out of.

```cranberry
loop {
	println("Hello")

	break # call break to stop the loop at any time
}
```

## While Loop

A while loop will repeat the code inside it until the condition is false (or a falsey value).

While loops are created using the `while` keyword followed by the condition and a block.

```cranberry
let x = 0

while x < 10 {
	x++
	println(x)
}
```

In the above code, `x` keeps getting incremented by 1 each time and we print x. Once `x` becomes 11, the condition `x < 10` is false and the loop stops.

## For Loop

For loops will loop over an object assuming it is iterable. That is to say we loop over everything inside that object in order.

Write `for` followed by the name of the variable and the iterable object. The variable is only declared in the scope and does not carry over to the next iteration.

One of the most common for loops is the ranged for loop.
I suggest learning about [Ranges](../ranges) and coming back.

```cranberry
for num in 0..10 {
	print(num)
}

# prints 0123456789 since we didn't use `println`
```

You can also loop over lists and strings:

```cranberry
let fruits = ["apple", "banana", "orange"]

for i in fruits => println(i)
```

```cranberry
let name = "John"

for i in name => println(i)
```

## Break Statement

The `break` keyword allows you to stop any loop at any time.
Optionally you can also return a value using a break by passing the value.

```cranberry
let x = 0

let my_variable = while x < 10 {
	break 32
}

println(my_variable) # prints 32
```

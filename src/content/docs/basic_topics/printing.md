---
title: Printing
description: Printing to standard output in Cranberry.
---

Printing is a way to write to the terminal. There are 3 ways to print in Cranberry, but the most used ones are the following:

##### `println()`

> Print some values followed by a newline (`\n`).

##### `print()`

> Print some values without making a newline.

---

The `print` and `println` functions are builtin functions that you can call with parentheses and any values inside it will be outputed to the terminal.

## Examples

The below code will print "Hello" and "World" in **separate lines**:

```cranberry
println("Hello")
println("World")
```
```output
Hello
World
```

---

The below code will print "Hello" and "World" in the **same line**:

```cranberry
print("Hello")
print("World")
```
```output
HelloWorld
```

## Printing Multiple Values

Simply add more arguments with commas in between. The print functions can take infinitely many arguments. Each value will have a space in between it.

```cranberry
println("hello", "world", "foo", "bar")
```
```output
hello world foo bar
```

Or use formatted strings:

```cranberry
println($"Hello {1 + 1}")
```
```output
Hello 2
```

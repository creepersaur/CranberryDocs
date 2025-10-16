---
title: Ranges
description: Range type in Cranberry.
---

Create a Range object using 2-3 numbers with a double dot (`..`) between them:

##### `start..end`

> Range starting at `start` (inclusive) and ending at `end` (exclusive)

##### `start..end..step`

> Range starting at `start` (inclusive) and ending at `end` (exclusive) with an optional step-by value

##### `start..=end`

> Range starting at `start` and ending at `end` (both inclusive)

##### `start..=end..step`

> Range starting at `start` (inclusive) and ending at `end` (both inclusive) with an optional step-by value

## Examples

```cranberry
let my_range = 0..10
let inclusive = 0..=10
let even_inclusive = 0..=10.2
let only_even = 0..10..2
let only_odd = 1..10..2
```

Ranges can also be used to index strings:

```cranberry
let my_string = "Hello World"
let slice = my_string[0..5]

println(slice) # prints Hello
```

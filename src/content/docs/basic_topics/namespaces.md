---
title: Namespaces
description: Namespaces in Cranberry.
---

A namespace is a container that provides a scope for identifiers like variables, functions, and classes to prevent naming conflicts, especially in large projects or when using multiple libraries.

There are 2 types of namespaces:

- Block-Scoped namespace
- File-Scoped namespace

### Block-Scoped Namespace

These are defined by saying writing `namespace` followed by its name and a block.

```cranberry
namespace Utilities {
	class Vector {

	}

	fn something() {

	}
}

# namespaces can use single-line blocks as well
namespace Constants => const X = 10
```

You can then use something inside the namespace by writing its name and dot notation

```cranberry
let vec = Utilities.Vector()
Utilities.something()
```

### File-Scoped Namespace

These namespaces can apply to entire files or allow you to divide files into different namespaces and store stuff in an organised fashion.
Write `namespace` followed by its name and don't provide a block.

Let's imagine a file named `utilities.cb` (the name doesn't matter.)

```cranberry
namespace Utilities

let x = 10
fn greet() => println("Hello")
```

You can then write `using` followed by the namespace name in `main.cb`:

```cranberry
using Utilities

Utilities.greet()
print(Utilities.x)
```

The `using` directive also works for Block-Scoped namespaces.

## Namespace Hierarchy

When creating a library or a module, its usually a good idea to keep your namespaces organised.

They tend to follow a certain pattern:

### `Library::Subspace`

Where Library might be your main namespace, and Subspace is a sub-category inside that namespace that someone can access. **For example:**

> If you have 2 files called `vectors.cb` and `matrices.cb` and you wanted to keep them both in Utilities but separate them, you can do the following:
> ```cranberry
> # vectors.cb
> namespace Utilities::Vectors
>
> class Vector2 {}
> class Vector3 {}
> ```
>
> ```cranberry
> # matrices.cb
> namespace Utilities::Matrices
>
> class Matrix {}
> ```
>
> Then simply import those namespaces in `main.cb`:
>
> ```cranberry
> # main.cb
> using Utilities::Vectors
> using Utilities::Matrices
>
> # or import them both at once
> using Utilities::{Vectors, Matrices}
>
> let my_vector = Vectors.Vector2(1, 2)
> ```

## Namespace Aliasing

Sometimes namespace names can get annoying to write or you may have multiple namespaces with the same name. To avoid these issues, use the `as` keyword to rename a namespace during import:

```cranberry
using Utilities::Matrices as Mat

let m = Mat.Matrix(1, 1, 1)
```

## Wildcard Imports

If you want to import all values in a namespace without needing to index into it by name, use the an asterisk (`*`) to import everything as a wildcard.

```cranberry
using Utilities::Vectors::*

# Can use Vector2 and Vector3 without needing to write `Vectors.` before them.
let x = Vector3(0, 0, 0)
```

## The Standard Namespace

Most languages (including Cranberry) have a standard library which contains a lot of built in functions. These include IO, Multithreading, file system, environment, etc.

Access the Cranberry standard library by writing
```cranberry
using Std
```

The Standard library has a lot of inner namespaces, such as

- IO (terminal and colors)
- Task (For multithreading and benchmarking)
- Env (For executable arguments)
- Math (Math related functions and constants)
- FS (File system and directories)
- Http (Sending requests and listening server)
- Random (Pseudorandom number stuff)
- JSON (Parsing and stringify-ing data to JSON)
- Numerics (Internal Vector and Matrices creation functions for compatibility)

### For Example:

```cranberry
using Std::IO

let counter = 0

loop {
	IO.clear()
	println("Use the left and right arrow keys to change the counter")
	println($"Counter: {counter}")

	let key = IO.ReadKey(true)    # `true` means don't send key to output
	if key == "left" => counter--
	if key == "right" => counter++
}
```

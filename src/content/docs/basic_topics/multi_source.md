---
title: Multiple Source Files
description: Multiple source files in Cranberry.
---

When you create a project, you can see the `main.cb` file.
You can also create more files ending in `.cb` and they'll get run automatically in alphabetical order.

:::note
`main.cb` is always ran last irrespective of the order.
:::

This means that if I have this file structure:

```bash
MyProject/
├─ src/
│  ├─ main.cb
│  ├─ hello.cb
└─ cranberry.toml
```

##### hello.cb

```cranberry
println("Hello")
```

##### main.cb

```cranberry
println("Main")
```

Main will always be printed after Hello since `main.cb` is ran last.

But that also means anything you define in other files can be accessed through `main.cb`. (Such as defining a class in a separate script and using it in the main file.)

How can I separate files effectively? Well thats where Namespaces come in...

---
title: Classes
description: Classes in Cranbery.
---

A class is an instantiable collection of functions. These are useful for Object Oriented Programming (OOP) systems.

In Cranberry, classes can be created using the class keyword, followed by the name of the class and braces.

```cranberry
class MyClass {

}
```

As stated earlier, classes can have many functions inside of them:

```cranberry
class MyClass {
	fn greet(name) {
		println($"Hello there, {name}!")
	}
}

# Call the greet function by indexing inside of the class
MyClass.greet("John Doe")
```

## Class Objects

Classes can be instantiated into objects. These objects can store values and methods can also be called on them. Every object is standalone from each other and its values are also standalone.

Classes can also take `constructor` functions which execute when you create an object (and can take arguments).

```cranberry
class Vehicle {
	constructor(self, name) {
		# Set values on the object
		self.name = name
	}

	# Make sure to add the `self` parameter as the first one
	fn honk(self) {
		println(self.name, "just honked!")
	}
}
```

You can then make objects using the class:

```cranberry
# we pass the `name` argument into the constructor
let thing1 = Vehicle("Car")
let thing2 = Vehicle("Bus")

thing1.honk() # prints `Car just honked!`
thing2.honk() # prints `Bus just honked!`
```

## Class Let-statements

Putting a `let` statement in a class will add that value to self, like if you did it in a constructor.
It will always evaluate on object creation.

```cranberry
class Car {
	let cost = 5000
}

let my_object = Car()
println(my_object.cost) # prints 5000
```

# What are some differences between interface and type in TypeScript?

There are several key differences between interface and type in TypeScript. For example:

✅ Interface:
Interfaces are mainly used to define the structure of objects.

An interface can extend multiple other interfaces.

You can declare the same interface name multiple times, and TypeScript will automatically merge them without any error.

✅ Type:
type can define more than just objects — it can represent unions, primitives, tuples, etc.

Type extension is limited, and combining types is done using the & (intersection) operator.

A type alias can only be defined once. If you try to declare the same type name again, it will throw an error.
  

# Provide an example of using union and intersection types in TypeScript

✅ Intersection Type

An intersection type is a powerful feature in TypeScript that allows you to combine multiple types into one. It merges the properties of two or more types using the & (ampersand) symbol.

Example:

type A = {
  name: string;
};

type B = {
  age: number;
};

type C = A & B; // Intersection type

✅ Union Type
A union type allows a variable to hold values of multiple possible types. It’s written using the | (pipe) symbol and is useful when a value can be one of several types.

Example:

let value: string | number | boolean;

value = "Hello"; 
value = 42;     
value = true;   
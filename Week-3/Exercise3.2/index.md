
# Create 3 simple functions where call, bind and apply are used. The intention of this exercise isto understand how they work and their differences.

## Call
---

```

function greet(greeting) {
  console.log(`${greeting}, ${this.name}!`);
}

const person = { name: 'John' };

greet.call(person, 'Hello');

```

- Used to invoke a function with specified 'this' value and individual arguments passed as arguments one by one.

- The greet function is called with call and the person object as its 'this' value. The greeting argument is passed as the second argument to call. The result is that the greet function is called with this set to person and greeting set to 'Hello', and it logs the greeting to the console.

## Apply
---

```

function greet(greeting, punctuation) {
  console.log(`${greeting}, ${this.name}${punctuation}`);
}

const person = { name: 'John' };

greet.apply(person, ['Hello', '!']);

```

- Used to invoke a function with a specified 'this' value and an array of arguments passed as a single argument.

- The greet function is called with apply and the person object as its 'this' value. An array of arguments [ 'Hello', '!' ] is passed as the second argument to apply. The greet function is called with this set to person and greeting set to 'Hello' and punctuation set to '!', and it logs the greeting to the console.

## Bind
---

```
function greet(greeting, punctuation) {
  console.log(`${greeting}, ${this.name}${punctuation}`);
}

const person = { name: 'John' };
const sayHello = greet.bind(person, 'Hello', '!');

sayHello();

```
- Used to create a new function with a specified 'this' value and any number of pre-filled arguments.

- Bind() creates a new function that will have 'this' set to the first parameter passed to the bind() and it returns the new function without calling it.

- The greet function is bound to the person object and two arguments 'Hello' and '!'. The resulting function is stored in the sayHello variable. When the sayHello function is called, it logs the greeting to the console with this set to person, greeting set to 'Hello', and punctuation set to '!'.





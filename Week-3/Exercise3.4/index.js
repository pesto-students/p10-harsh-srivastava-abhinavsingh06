function createStack() {
  return {
    items: [],
    push(item) {
      this.items.push(item);
    },
    pop() {
      return this.items.pop();
    },
  };
}

const stack = createStack();

stack.push(10);
stack.push(5);
stack.pop(); // => 5
stack.items; // => [10]
stack.items = [10, 100, 1000]; // Encapsulation broken!

// In the above example stack.items is resulting 10 because we are accessing items array directly and thus we can read its value

//new implementation
// function createStack() {
//   const items = [];

//   return {
//     push(item) {
//       items.push(item);
//     },
//     pop() {
//       return items.pop()
//     }
//   }
// }

function createStack() {
  return {
    items: [],
    push: function (item) {
      this.items.push(item);
    },
    pop: function () {
      return this.items.pop();
    },
  };
}

const stack = createStack();

stack.push(10);
stack.push(5);
stack.pop(); // => 5
stack.items; // => undefined

// In this code stack.items is returning undefined because items is not directly accessible from outside the function as items array is within createStack closure  and providing only push and pop to change value through indirect access.

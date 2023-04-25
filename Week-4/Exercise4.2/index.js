// Create an object called Teacher derived from the Person class, and implement a method called teach which receives a string called subject, and prints out:
// [teacher's name]is now teaching[subject];

const Person = function () {};

Person.prototype.initialize = function (name, age) {
  this.name = name;
  this.age = age;
};

const Teacher = function () {};
Teacher.prototype.teach = function (subject) {
  this.subject = subject;
  console.log(`${this.name} is now teaching ${this.subject}`);
};

Object.setPrototypeOf(Teacher.prototype, Person.prototype);

const him = new Teacher();
him.initialize("Adam", 45);
him.teach("Inheritance");

// class Person {
//   constructor() {}
//   initialize(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }

// class Teacher {
//   constructor() {}
//   teach(subject) {
//     this.subject = subject;
//     console.log(`${this.name} is now teaching ${this.subject}`);
//   }
// }

// Object.setPrototypeOf(Teacher.prototype, Person.prototype);

// const him = new Teacher();
// him.initialize("Adam", 45);
// him.teach("Inheritance");

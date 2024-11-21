// console.log("Boil water");
// setTimeout(() => console.log("Water is boiling"), 10000); // Simulates boiling time
// console.log("Chop vegetables"); // Happens while waiting for the water.


// console.log("Start preparing tea");

// // Simulate someone else making tea asynchronously
// function makeTea(callback) {
//     console.log("Making tea...");
//     callback("Tea is ready!"); // Notify when the tea is done
// }

// // Keep doing other things while waiting for tea
// makeTea((message) => {
//     console.log(message); // This runs only after the tea is ready
// });

// console.log("Doing other tasks while tea is being prepared");

// function preparePizza(callback) {
//     console.log("preparing pizza");
//     callback(); // Call the function passed as an argument
// }

// function pizzaReady() {
//     setTimeout(() => console.log("Pizza is ready! Enjoy!"), 3000);
// }

// // Pass the pizzaReady function as a callback to preparePizza
// preparePizza(pizzaReady);




// anonymous function

// function greet() {
//     console.log("Hi there!");
// }
// setTimeout(greet, 1000);

// setTimeout(function() {
//     console.log("Hi there!");
// }, 1000);




// arrow function
// const add = (a, b) => a + b;
// console.log(add(2, 3)); // Output: 5



// // Basic object destructuring
// const person = { name: 'Alice', age: 25, city: 'Wonderland' };
// const { name, age } = person;
// console.log(name); // Alice
// console.log(age);  // 25

// // Using different variable names
// const { name: fullName, age: yearsOld } = person;
// console.log(fullName); // Alice
// console.log(yearsOld); // 25

// // Default values
// const { country = 'Unknown' } = person;
// console.log(country); // Unknown

// // Nested object destructuring
// const student = { 
//   id: 1, 
//   details: { firstName: 'Bob', lastName: 'Smith' }
// };
// const { details: { firstName, lastName } } = student;
// console.log(firstName); // Bob
// console.log(lastName);  // Smith




// //mixed destructuring
// const user = {
//     id: 101,
//     preferences: ['dark', 'compact'],
//   };
//   const { id, preferences: [theme, layout] } = user;
//   console.log(id);    // 101
//   console.log(theme); // dark
//   console.log(layout); // compact

  // function destructuring
//   function sum([a, b]) {
//     return a + b;
//   }
//   console.log(sum([3, 4])); // 7
  




// oops cocept

// class Person {
//     constructor(name, age) {
//       this.name = name; // Properties
//       this.age = age;
//     }
  
//     greet() { // Method
//       console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
//     }
//   }
  
//   // Create instances
//   const person1 = new Person('Bob', 30);
//   person1.greet(); // Hi, I'm Bob and I'm 30 years old.
  



// inheritance
// class Animal {
//     constructor(name) {
//       this.name = name;
//     }
  
//     speak() {
//       console.log(`${this.name} makes a noise.`);
//     }
//   }
  
//   class Dog extends Animal {
//     speak() {
//       console.log(`${this.name} barks.`);
//     }
//   }
  
//   const dog = new Dog('Rex');
//   dog.speak(); // Rex barks.
  


//encapsulaton

// class BankAccount {
//     #balance = 0; // Private field
  
//     deposit(amount) {
//       this.#balance += amount;
//       console.log(`Deposited: ${amount}`);
//     }
  
//     getBalance() {
//       return this.#balance;
//     }
//   }
  
//   const account = new BankAccount();
//   account.deposit(100);
//   console.log(account.getBalance()); // 100
//   // console.log(account.#balance); // Error: Private field


// polymrphism

// Polymorphism

// Polymorphism allows objects of different classes to be treated as instances of the same class through method overriding.

// class Shape {
//   area() {
//     console.log('Calculating area...');
//   }
// }

// class Rectangle extends Shape {
//   constructor(width, height) {
//     super();
//     this.width = width;
//     this.height = height;
//   }

//   area() {
//     return this.width * this.height; // Method overriding
//   }
// }

// const rect = new Rectangle(10, 5);
// console.log(rect.area()); // 50


// Abstraction

// Abstraction hides unnecessary details and shows only essential features. While JavaScript doesn't have built-in support for abstract classes, you can simulate abstraction using base classes.

// class Shape {
//   constructor() {
//     if (new.target === Shape) {
//       throw new Error('Cannot instantiate abstract class');
//     }
//   }

//   area() {
//     throw new Error('Method "area()" must be implemented');
//   }
// }

// class Circle extends Shape {
//   constructor(radius) {
//     super();
//     this.radius = radius;
//   }

//   area() {
//     return Math.PI * this.radius ** 2;
//   }
// }

// const circle = new Circle(5);
// console.log(circle.area()); // 78.53981633974483



// 7. Prototypes

// JavaScript is a prototype-based language. Objects inherit directly from other objects using prototypes.
// Example:

// function Person(name) {
//   this.name = name;
// }

// Person.prototype.greet = function() {
//   console.log(`Hello, I'm ${this.name}`);
// };

// const person1 = new Person('Alice');
// person1.greet(); // Hello, I'm Alice
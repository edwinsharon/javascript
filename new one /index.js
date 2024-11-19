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

function preparePizza(callback) {
    console.log("preparing pizza");
    callback(); // Call the function passed as an argument
}

function pizzaReady() {
    setTimeout(() => console.log("Pizza is ready! Enjoy!"), 3000);
}

// Pass the pizzaReady function as a callback to preparePizza
preparePizza(pizzaReady);




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

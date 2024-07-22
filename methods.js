// a.length
// a.push
// a.pop
// a.shift
// a.unshift
// a.forEach
// a.map
// a.filter
// a.includes
// a.indexOf
// a.lastIndexOf
// a.splice
// a.slice
// a.sort
// a.reverse
// a.reduce
// a.reduceRight
// a.join
// a.concat
// a.every
// a.some
// a.fill
// a.flat
// a.find
// a.findIndex

// let a= [6,8,22,4,5,2,9,1];
// console.log(a.forEach());
// console.log(a);


// let b = [4,10,20,30,4,5,6,7,8,7];
// a.forEach((a,b,c) => console.log(c));
// console.log(a.map((a,b,c) => a*b));
// console.log(a.filter((a,b,c) => b>4));
// console.log(a.includes(70));
// console.log(a.lastIndexOf(7));
// console.log(a.splice(1));
// let q  = a.sort((x,y) => (x>y));
// console.log(q)
// console.log(a.reverse());
// console.log(a.reduce((a,b) => a - b));
// console.log(a.join(","));
// console.log(a.concat([32,45,76]));
// console.log(a.some((a,b,c) => a == 22));
// a.fill(2);
// console.log(a)
// console.log(a.flat());
// console.log(a.findIndex((a,b,c) => (a>6) && (a<8)));





// let x = {
//  name: "Raju",
//  age: 23,
//  address: {

//  },
//  hobbies: [

//  ],
//  action: () => console.log("actions")
// };

// let { name, age, ...z } = x;
// x["age"] = "123456789";
// let y = {...x, dob: ""};
// x.name = "Radha";
// console.log(y);


// String functions and props
// length()
// replace()
// replaceAll()
// split()
// indexOf()
// lastIndexOf()
// charAt()
// concat()
// includes()
// repeat()
// slice()
// substring()
// toUpperCase()
// toLowerCase()
// trim()
// trimEnd()
// trimStart()



// Map functions

// x.size
// x.set()
// x.get()
// x.delete()
// x.forEach()
// x.clear()
// x.has()

// Set functions

// x.size
// x.add()
// x.delete()
// x.forEach()
// x.clear()
// x.has()

// let x = new Set(["x1","x2","x3","x4"]);
// let y = new Set(["x3","x4","x5","x6"]);

// x.add("x4");
// x.delete("x4");
// x.forEach((a,b,c) => console.log(a,b,c));
// x.clear();
// console.log(x.has("x3"));
// let z = new Set([...x,...y]);
// let z = new Set([...y].filter((e) => !x.has(e)));

// console.log(z);

// let x = new Map([
//  ["x1","y1"],
//  ["x2","y2"],
//  ["x3","y3"],
//  ["x4","y4"],
// ]);

// x.set("x5","y5");
// console.log(x.get("x3"));
// x.delete("x4");
// x.forEach((a,b,c) => console.log(a,b,c));
// x.clear();
// console.log(x.has("x3"));;

// console.log(x);










// function abcd(a,b,cb) {
//  // ...
//  cb();
// }

// function getData(a) {
//  return new Promise((res, rej) => {
//   // ....
//   res("Response data");
//   // rej("Error occured");
//  });
// }


// let resP = getData("teachers");

// resP.then((a) => {
//  return getData("class");
// })
// .then((a) => {
//  console.log(a);
// })
// .catch((e) => {
//  console.log(e);
// })

// https://jsonplaceholder.typicode.com/todos

// let res = fetch("https://jsonplaceholder.typicode.com/todos");

// res.then(e => {
//  return e.json();
// })
// .then(b => {
//  console.log(b);
// })


// let res = fetch("https://jsonplaceholder.typicode.com/todos");

// let allP = Promise.race([
//  fetch("https://jsonplaceholder.typicode.com/todos"),
//  fetch("https://jsonplaceholder.typicode.com/todos"),
//  fetch("https://jsonplaceholder.typicode.com/todos"),
// ]);

// allP.then(e => console.log(e))
// .catch(e => console.log(e));

// let a = setTimeout(() => console.log("timeout"),2000);
// let b = setInterval(() => console.log("Interval"), 1000);

// setTimeout(() => {
//  clearInterval(b)
//  console.log("Interval cleard");
// },3000);

// function p() {
//  return new Promise((res, rej) => {
//   setTimeout(() => {
//    res("mdvhsj");
//   },2000);
//  });
// }
// async function p() {
//  return "sdhjs";
// }
// p().then(() => console.log("Resolved"))

// async function abcd() {
//     let b = await fetch("https://jsonplaceholder.typicode.com/todos");
//     console.log(b);
//    } 
   
//    abcd();


// let x = document.getElementById("hd");
// let y = document.getElementsByTagName("div")[0];
// let z = document.getElementsByClassName("headding")[0];


// // x.style.backgroundColor = "red";
// x.style.height = "100px";

// document.getElementsByTagName("a")[0].href = "https://google.com";

// function clickHandler() {
//  x.style.backgroundColor = "red";
//  x.innerHTML =  "<b>Hello world</b>";
// }

// function clickHandler2() {
//  x.style.backgroundColor = "white";
// }

// let button = document.getElementsByTagName("button")[0];
// button.addEventListener("click", clickHandler);
// button.addEventListener("mouseover", clickHandler);
// button.addEventListener("mouseleave", clickHandler2);



// let ip = document.getElementById("num");

// document.getElementsByTagName("button")[0]
// .addEventListener("click", () => ip.value = ip.value*2);


fetch("https://dummyjson.com/products")
.then(e => {
 return e.json()
})
.then(e => {
 let content = "";
 e.products.forEach(x => {
  content += <li> ${x.id}</li>;
 });
 document.getElementById("list").innerHTML = content;
});

// let x  = document.querySelector(".headding");
// let y  = document.querySelectorAll(".headding");

// let z = document.getElementsByClassName("headding");

// let div = document.createElement("div");
// div.textContent = "Hello";
// x.appendChild(div);
// x.innerHTML = `
// <form>
// <fieldset>
// <legend>
// Details
// </legend>
// </fieldset>
// </fomr>
// `;

// console.log(y);



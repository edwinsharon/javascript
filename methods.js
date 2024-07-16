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

let res = fetch("https://jsonplaceholder.typicode.com/todos");

res.then(e => {
 return e.json();
})
.then(b => {
 console.log(b);
})
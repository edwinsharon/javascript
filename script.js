// function fib(a){
//     if (a<=1){
//         return a;
//     }
//     else{
//         return fib(a-1)+fib(a-2);    
//     }

// }
// console.log(fib(3))


// let a="";
// b=a.split('');
// b=b.reverse();
// b=b.join("");
// if (a==b){
//     console.log("it is paliendrome")
// }
// else{
//     console.log("it is not paliendrome")
// }


// let a="my name is is ronin";
// b=a.split(" ");
// let y= new Set(b);
// y=y.join(" ")
// console.log(y);


// let vowels=['a','e','i','o','u'];
// let k="hello guys are you okay man";
// let j=k.split(" ");
// for (let i=0; i<j.length;i++){
//     let nofvowel=0;
//     for(let a=0;a<vowels.length;a++){
//         if(j[i].includes(vowels[a])){
//             nofvowel+=1;
//         }
//     }
//     if(nofvowel>1){
        
//         j.splice(i, 1);
//         i--; 
//     }
// }
// console.log(j);


// let res = fetch("https://jsonplaceholder.typicode.com/todos");

// res.then(e => {
//  return e.json();
// })
// .then(b => {
//  console.log(b);
// })

// let ip = document.getElementById("num");
// let ipp = document.getElementById("num1");
// let res = document.getElementById("res")

// document.getElementById("add")[0].addEventListener("click", () => res.textContent = parseFloat(ip.value) + parseFloat(ipp.value));
// document.getElementById("sub")[0].addEventListener("click", () => res.textContent = parseFloat(ip.value) - parseFloat(ipp.value));
// document.getElementByid("mul")[0].addEventListener("click", () => res.textContent = parseFloat(ip.value) * parseFloat(ipp.value));   
// document.getElementByid("div")[0].addEventListener("click", () => res.textContent = parseFloat(ip.value) / parseFloat(ipp.value));
// document.write(res)



// fetch("https://dummyjson.com/products")
// .then(e => {
//  return e.json()
// })
// console.log(e)
// .then(e => {
//  let content = "";
//  e.products.forEach(x => {
//   content += <li> ${x.id}</li>;
//  });
//  document.getElementById("list").innerHTML = content;
// });


fetch('https://dummyjson.com/products')
 .then(res => res.json())
 .then(function (data) {
  console.log(data);
 });
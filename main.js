// fetch("https://dummyjson.com/products")
// .then(e => {
//  return e.json()
// })
// .then(e => {
//  let content = "";
//  e.products.forEach(x => {
//   content += <li> ${x.id}</li>;
//  });
//  document.getElementById("list").innerHTML = content;
// });
// fetch("https://dummyjson.com/products")
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     return response.json();
//   })
//   console.log(product)
//   .then(data => {
//     let content = "";
//     let images = "";
//     data.products.forEach(product => {
//       content += `<li>${product.name}</li>`;
//       images += `<img src="${product.thumbnail}" alt="${product.name}">`;
//     });
//     document.getElementById("list").innerHTML = content;
//     document.getElementById("image").innerHTML = images;
//   })
//   .catch(error => {
//     console.error('Error fetching data:', error);
//   });

let productsDiv = document.getElementById("products");
let product;
fetch('https://dummyjson.com/products')
 .then(res => res.json())
 .then(function (data) {
  console.log(data);
    
  data.products.forEach(e => {
   product += `
  <a href="http://127.0.0.1:5501/product.html?id=${e.id}">
  <div class="product">
  <img src="${e.thumbnail}" loading="lazy"/>
  <h2>${e.title}</h2>
  
  </div>
  </a>
  `;
  });
  productsDiv.innerHTML = product;
 })
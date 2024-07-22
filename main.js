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
fetch("https://dummyjson.com/products")
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    let content = "";
    let images = "";
    data.products.forEach(product => {
      content += `<li>${product.name}</li>`;
      images += `<img src="${product.thumbnail}" alt="${product.name}">`;
    });
    document.getElementById("list").innerHTML = content;
    document.getElementById("image").innerHTML = images;
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
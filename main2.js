let id = location.href.split("=")[1];
let productDiv = document.getElementById("product");
fetch(`https://dummyjson.com/products/${id}`)
    .then(res => {
        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
    })
    .then(data => {
        productDiv.innerHTML = `
        
        <div class="main">
        <img src="${data.thumbnail}" alt="${data.title}" />
        </div>
        <div class="main2">
        <h2>${data.title}</h2>
        <h4>Rs${data.price}</h2>
        <p class="desd">${data.description}</p>
        <button>BUY NOW</button>
        </div>
            
        `;
    })
    .catch(error => {
        console.error('Error fetching product details:', error);
        productDiv.innerHTML = `<p>Sorry, we couldn't fetch the product details. Please try again later.</p>`;
    });


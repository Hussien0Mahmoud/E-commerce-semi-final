let productsContainer = document.querySelector(".cards");
let products = [];

(function getAllProducts() {
  fetch("https://dummyjson.com/products")
  // fetch('https://products-api-delta.vercel.app/api/products')
  .then((res) => res.json())
  .then((data) => {
    renderProducts(data.products);
    products = data.products;
  });
})();

function renderProducts(products) {
  // <div class="card" style="width: 18rem;">
  products.forEach((product, index) => {
    productsContainer.innerHTML += `
    
    <div class="card">
    <img src="${product.thumbnail}" alt="card-image">
    <div class="card-body">
    <h4 class="cad-title">${product.title}</h4>
    <h6 class="cad-price">${product.price} $</h6>
    <p>${product.description}</p>
    <a href="#"><button onclick="addToCart(${index})">Add To Card</button></a>
            </div>
        </div>
        `;
      });
}

let Cart = JSON.parse(localStorage.getItem("cart")) || [];
let CartCount = document.querySelector(".fa-cart-shopping").setAttribute("Cart-Length" , Cart.length)

function addToCart(index) {
  const CurrentProduct = products[index];
  
  const cartProduct = Cart.find(item => item.id === CurrentProduct.id);
  
  if (!cartProduct) {
    Cart.push({ ...CurrentProduct, quantity: 1 });
  } else {  
    cartProduct.quantity++;
    }
    localStorage.setItem("cart", JSON.stringify(Cart));
    let CartCount = document.querySelector(".fa-cart-shopping").setAttribute("Cart-Length" , Cart.length)
  }
  

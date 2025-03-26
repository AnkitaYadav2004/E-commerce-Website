let ProductsData = JSON.parse(localStorage.getItem("ProductsData"));
console.log(ProductsData);

let productUniqueId = JSON.parse(localStorage.getItem("id"));
console.log(productUniqueId);

let productFilterContainer = document.getElementById("productview");

let uniqueProductId = ProductsData.find((productSearch) => {
  return productSearch.id == productUniqueId;
});
console.log(uniqueProductId);
let imageUrl = uniqueProductId.images[0];
let title = uniqueProductId.title;
let productdesc = uniqueProductId.description;
let price = uniqueProductId.price;
let stock = uniqueProductId.stock;
let category = uniqueProductId.category;
let discountPercentage = uniqueProductId.discountPercentage;
let SKU = uniqueProductId.sku;
let rating = uniqueProductId.rating;
console.log(imageUrl);
// Tailwind components
productFilterContainer.innerHTML = `
<div class="bg-white">
  <div class="container mx-auto px-4 py-8">
    <div class="flex flex-wrap -mx-4">
      <!-- Product Images -->
      <div class="w-full md:w-1/2 px-4 mb-8">
         <div class="relative h-[460px] rounded-lg shadow-lg bg-gradient-to-br from-purple-400 to-indigo-600 opacity-100 mb-4">
          <img
            class="absolute top-0 left-0 w-full h-full object-contain p-4"
            src="${imageUrl}"
            alt="Product Image"         
          />
        </div>
      </div>

      <!-- Product Details -->
      <div class="w-full md:w-1/2 px-4">
        <h2 class="text-3xl font-bold mb-2">${title}</h2>
        <p class="text-gray-600 mb-4">SKU: ${SKU}</p>
        <div class="mb-4">
          <span class="text-2xl font-bold mr-2">₹-${(price * 87.25).toFixed(
            0
          )}</span>
          <span class="text-gray-500 line-through">₹-399.99</span>
        </div>
        <div class="flex items-center mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
            class="size-6 text-yellow-500">
            <path fill-rule="evenodd"
              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
              clip-rule="evenodd" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
            class="size-6 text-yellow-500">
            <path fill-rule="evenodd"
              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
              clip-rule="evenodd" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
            class="size-6 text-yellow-500">
            <path fill-rule="evenodd"
              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
              clip-rule="evenodd" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
            class="size-6 text-yellow-500">
            <path fill-rule="evenodd"
              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
              clip-rule="evenodd" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
            class="size-6 text-yellow-500">
            <path fill-rule="evenodd"
              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
              clip-rule="evenodd" />
          </svg>
          <span class="ml-2 text-gray-600">${rating} (120 reviews)</span>
        </div>
        <p class="text-gray-700 mb-6">${productdesc}</p>

        <div class="mb-6">
          <h3 class="text-lg font-semibold mb-2">Color:</h3>
          <div class="flex space-x-2">
            <button class="w-8 h-8 bg-black rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"></button>
            <button class="w-8 h-8 bg-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300"></button>
            <button class="w-8 h-8 bg-blue-500 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"></button>
          </div>
        </div>

        <div class="mb-6">
          <label for="quantity" class="block text-sm font-medium text-gray-700 mb-1">Quantity:</label>
          <input type="number" id="quantity" name="quantity" min="1" value="1"
                        class="w-12 text-center rounded-md border-gray-300  shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
        </div>

        <div class="flex space-x-4 mb-6">
          <button id="addTocart" class="bg-indigo-600 flex gap-2 items-center text-white px-6 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
            </svg>
             Add to Cart
             </button>
          <button class="bg-gray-200 flex gap-2 items-center  text-gray-800 px-6 py-2 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
             <path stroke-linecap="round" stroke-linejoin="round"  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                </svg>
                Wishlist
            </button>
        </div>
     </div>
    </div>
  </div>
  <script>
    function changeImage(src) {
            document.getElementById('mainImage').src = src;
        }
  </script>
</div>

`;

//Logic to Add Product into cart
/*
let addTocart = document.getElementById("addTocart");
console.log(addTocart);
addTocart.addEventListener("click", () => {
  let cartProduct = JSON.parse(localStorage.getItem("cart")) || [];
  let cartisPresent = cartProduct.find((productId) => {
    return productId.id === productUniqueId.id;
  });
  console.log(cartisPresent);
  if (cartisPresent) {
    alert("product already in cart");
  } else {
    cartProduct.push(uniqueProductId);
    localStorage.setItem("cart", JSON.stringify(cartProduct));
    alert("product added to cart");
  }
  // window.location.href = "../HTML/cart.html ";
  window.open("../HTML/cart.html", "_blank");
});
*/
/*
addTocart.addEventListener("click", () => {
  let cartProduct = JSON.parse(localStorage.getItem("cart")) || [];
  let cartisPresent = cartProduct.find((product) => {
    return product.id === uniqueProductId.id; // Compare product.id with uniqueProductId.id
  });
  console.log(cartisPresent);
  if (cartisPresent) {
    alert("Product already in cart");
  } else {
    cartProduct.push(uniqueProductId);
    localStorage.setItem("cart", JSON.stringify(cartProduct));
    alert("Product added to cart");
  }
  window.open("../HTML/cart.html", "_blank"); // Open cart page in a new tab
});
*/

addTocart.addEventListener("click", () => {
  let cartProduct = JSON.parse(localStorage.getItem("cart")) || [];

  // Check if the product is already in the cart
  let cartisPresent = cartProduct.some((product) => {
    return product.id === uniqueProductId.id; // Compare product.id with uniqueProductId.id
  });

  console.log(cartisPresent);

  if (cartisPresent) {
    alert("Product already in cart");
  } else {
    cartProduct.push(uniqueProductId); // Add the product to the cart
    localStorage.setItem("cart", JSON.stringify(cartProduct)); // Update localStorage
    alert("Product added to cart");
  }

  // Open the cart page in a new tab
  window.open("cart.html", "_blank");
});

//API Fetching
/*
let cartPage = document.getElementById("cartPage");
let displayCartProduct = JSON.parse(localStorage.getItem("cart"));
let itemPrice = document.getElementById("totalPrice");
console.log(displayCartProduct);
if (displayCartProduct.length > 0) {
  let input = " ";
  let productListHTML = "";
  let price = 0;
  displayCartProduct.map((productData) => {
    let images = productData.images[0];
    let title = productData.title;
    let category = productData.category;
    let rating = productData.rating;
    let price = productData.price;
    let brand = productData.brand;
    let desc = productData.description;
    let stock = productData.stock;

    productListHTML += `
      <tr>
        <td class="py-4">
          <div class="flex items-center">
            <img class="h-16 w-16 mr-4" src="${images}" alt="${title}">
            <span class="font-semibold">${title}</span>
          </div>
        </td>
        <td class="py-4">$${price.toFixed(2)}</td>
        <td class="py-4">
          <div class="flex items-center">
            <button class="border rounded-md py-2 px-4 mr-2 decrement" data-id="${
              productData.id
            }">-</button>
            <span class="text-center w-8 quantity" data-id="${
              productData.id
            }">${quantity}</span>
            <button class="border rounded-md py-2 px-4 ml-2 increment" data-id="${
              productData.id
            }">+</button>
          </div>
        </td>
        <td class="py-4 total-price" data-id="${productData.id}">$${(
      price * quantity
    ).toFixed(2)}</td>
      </tr>
    `;
  });

  input += `
<div class="bg-white rounded-lg shadow-md p-6 mb-4">
      <table class="w-full">
        <thead>
          <tr>
            <th class="text-left font-semibold">Product</th>
            <th class="text-left font-semibold">Price</th>
            <th class="text-left font-semibold">Quantity</th>
            <th class="text-left font-semibold">Total</th>
          </tr>
        </thead>
        <tbody>
          ${productListHTML} 
        </tbody>
      </table>
    </div>

    <!-- Fixed Summary Section -->
    <div class="md:w-1/4">
      <div class="bg-white rounded-lg shadow-md p-6">
        <h2 class="text-lg font-semibold mb-4">Summary</h2>
        <div class="flex justify-between mb-2">
          <span>Subtotal</span>
          <span id="subtotal">$${totalPrice.toFixed(2)}</span>
        </div>
        <div class="flex justify-between mb-2">
          <span>Taxes</span>
          <span>$${(totalPrice * 0.1).toFixed(2)}</span>
        </div>
        <div class="flex justify-between mb-2">
          <span>Shipping</span>
          <span>$5.00</span>
        </div>
        <hr class="my-2">
        <div class="flex justify-between mb-2">
          <span class="font-semibold">Total</span>
          <span id="totalPrice" class="font-semibold">$${(
            totalPrice + 5
          ).toFixed(2)}</span>
        </div>
        <button class="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 w-full">Checkout</button>
      </div>
    </div>
  `;
  cartPage.innerHTML = input;
  cartData.innerHTML = `${price.toFixed(2)}`;
} else {
  cartPage.innerHTML = `<h1>cart is empty</h1>`;
}
*/

let cartPage = document.getElementById("cartPage");
let displayCartProduct = JSON.parse(localStorage.getItem("cart")) || [];
let totalPrice = 0;

if (displayCartProduct.length > 0) {
  let productListHTML = "";

  displayCartProduct.map((productData) => {
    let images = productData.images[0] || "placeholder.jpg";
    let title = productData.title;
    let price = productData.price;
    let quantity = 1;

    totalPrice += price * quantity;

    productListHTML += `
      <div class="flex items-center justify-between p-4 mb-4 border border-gray-300 rounded-lg">
        <!-- Product Image and Name -->
        <div class="flex items-center w-2/5">
          <img class="h-16 w-40 h-40 object-cover  mr-4 rounded-lg" src="${images}" alt="${title}">
          <span class="font-semibold">${title}</span>
        </div>
        <!-- Price -->
        <div class="text-center w-1/5"><span class="text-2l  mr-2">₹-${(
          price * 87.25
        ).toFixed(0)}</span></div>
        <!-- Quantity Controls -->
        <div class="flex items-center w-1/5 justify-center">
          <button class="border border- border-gray-400 rounded-lg py-2 px-4 mr-2 decrement" data-id="${
            productData.id
          }">-</button>
          <span class="text-center w-8 quantity" data-id="${
            productData.id
          }">${quantity}</span>
          <button class="border border-gray-400 rounded-md py-2 px-4 ml-2 increment" data-id="${
            productData.id
          }">+</button>
        </div>
        <!-- Total -->
        <div class="font-semibold text-gray-700 w-1/5 text-right"><span class="text-2l  mr-2">₹-${(
          price *
          87.25 *
          quantity
        ).toFixed(0)}</span></div>
      </div>
    `;
  });

  let cartHTML = `
    <div class="flex flex-col md:flex-row gap-6 p-4">
      <!-- Product Section (Left) -->
      <div class="md:w-3/4 w-full">
        <h2 class="text-lg font-semibold mb-6">Shopping Cart</h2>
        <!-- Headings for Product, Price, Quantity, Total -->
        <div class="flex items-center justify-between p-4 border-b border-gray-300 mb-4"> <!-- Added mb-4 for spacing -->
          <div class="w-2/5 font-semibold">Product</div>
          <div class="w-1/5 font-semibold text-center">Price</div>
          <div class="w-1/5 font-semibold text-center">Quantity</div>
          <div class="w-1/5 font-semibold text-right">Total</div>
        </div>
        ${productListHTML}
      </div>

      <!-- Summary Section (Right) -->
      <div class="md:w-1/4 w-full h-min p-6 border border-gray-300 rounded-lg md:mt-30" >
        <h2 class="text-lg font-semibold mb-4">Summary</h2>
        <div class="flex justify-between mb-2">
          <span>Subtotal</span>
          <span id="subtotal" class="font-semibold">₹-${totalPrice.toFixed(
            2
          )}</span>
        </div>
        <div class="flex justify-between mb-2">
          <span>Taxes</span>
          <span class="font-semibold">₹-${(totalPrice * 0.1).toFixed(2)}</span>
        </div>
        <div class="flex justify-between mb-2">
          <span>Shipping</span>
          <span class="font-semibold">₹-0.00</span>
        </div>
        <hr class="my-2">
        <div class="flex justify-between mb-2">
          <span class="font-semibold text-lg">Total</span>
          <span id="totalPrice" class="font-semibold text-lg">$${(
            totalPrice +
            totalPrice * 0.1
          ).toFixed(2)}</span>
        </div>
        <button class="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 w-full hover:bg-blue-600">
          Checkout
        </button>
      </div>
    </div>
  `;

  cartPage.innerHTML = cartHTML;
} else {
  cartPage.innerHTML = `<h1 class="text-center text-lg font-semibold">Cart is empty</h1>`;
}

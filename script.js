//API Fetching
//  ** ProductsData
let displayData = document.getElementById("displayData");
let all_products = [];
fetch("https://dummyjson.com/products")
  .then((response) => {
    return response.json();
  })
  .then((response) => {
    let { products } = response;
    localStorage.setItem("ProductsData", JSON.stringify(products));
    all_products = products;
    DisplayAllProducts(products);
  })
  .catch((error) => {
    console.log(error);
  });

function DisplayAllProducts(products) {
  //console.log(products);
  console.log(products);
  let input = "";

  products.map((productData) => {
    let images = productData.images[0];
    let title = productData.title;
    let productId = productData.id;
    // let category = productData.category;
    let rating = productData.rating;
    let price = productData.price;
    //let brand = productData.brand;
    let desc = productData.description;
    //let stock = productData.stock;
    let discount = productData.discountPercentage;

    input += `
    <div class="max-w-md w-full" >
    <div
      class="bg-white rounded-2xl shadow-2xl overflow-hidden hover:shadow-3xl" id="cards">
      <div class="relative">
        <div class="absolute inset-0 bg-gradient-to-br from-pink-400 to-yellow-600 opacity-75"></div>
        <img style="position:relative;top: 50%;left:20%;" src=${images} alt="Product Image" class="h-64 object-cover object-center relative z-10">
        <div
        style="gap:5px"
          class="absolute top-4 right-4 text-center bg-gray-100 text-l font-bold px-5 py-2 rounded-full z-40 transform">
        <i class="fa-solid fa-percent fa-flip-vertical fa-xl" style="color: #f50a16;"></i>  ${discount}  </div>
      </div>
      <div class="p-6" style="height:340px;display:flex;flex-direction:column;justify-content:center;align-items:center;line-height:22px;gap:5px">
        <h2 class="text-3xl font-extrabold text-gray-800 mb-2" style="disply:flex;justify-content:center;align-item:center">${title}</h2>
        <p class="text-gray-600 mb-4">${desc}</p>
          
        <div class="flex items-center justify-between mb-4" style="width:80%;display:flex;justify-content:space-evenly;">
          <span class="text-2xl font-bold text-indigo-600">₹-${(
            price * 87.25
          ).toFixed(0)}</span>
          <div class="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-black-400" viewBox="0 0 20 20"
              fill="currentColor">
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span class="ml-1 text-gray-600">${rating}(1220)</span>
          </div>
        </div>
        <a href="./productView.html" target="_blank">
        <button class="bg-pink-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-pink-700 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg" style="height:50px;width:210px;margin-top:12px" onclick="getId(${productId})">
              View More
        </button>
        </a>
      </div>
    </div>
  </div>`;
    //  console.log(uniqueId);
  });
  displayData.innerHTML = input;
}

//Function to check the unique through console by clicking on buttton view I apply the function which print unique id
function getId(id) {
  localStorage.setItem("id", id);
  console.log(id);
}

// Search container

let search_cnt = document.getElementById("search_cnt");
search_cnt.addEventListener("input", (product_search) => {
  let search_product = product_search.target.value.toLowerCase();
  let filterdData = all_products.filter((Filtersearch_products) => {
    return (
      Filtersearch_products.title.toLowerCase().includes(search_product) ||
      Filtersearch_products.category.toLowerCase().includes(search_product)
    );
  });
  console.log(filterdData);
  DisplayAllProducts(filterdData);
});

/*
let all_product = JSON.parse(localStorage.getItem("ProductsData"));
let uniqueId = JSON.parse(localStorage.getItem("id"));

let uniqueProduct = all_product.find((productUniqueId) => {
  return productUniqueId.id == uniqueId;
});
*/

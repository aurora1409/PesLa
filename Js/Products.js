callApi(renderHTML);

function callApi(callback) {
  fetch("http://petsla-api.herokuapp.com/products/")
    .then((response) => response.json())
    .then(callback);
}

function convertToVND(value) {
  var test1 = value.toString();
  var x = test1.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return x;
}

function renderHTML(products) {
  var product = document.querySelector(".container--products");
  var listProducts = products.map((value) => {
    var price = convertToVND(value.price);
    return `
            <div class="col l-3 m-4 c-6"> 
                <div class="container--item">
                    <a href="./ItemHTML/Product${value.id}.html" class="container--item--wrapImg">
                        <div class="container--item--img"
                            style="background-image: url(http://petsla-api.herokuapp.com${value.images});">
                        </div>
                    </a>
                    <div class="container--item--content">
                        <div class="content--main">
                            <a href="./ItemHTML/Product${value.id}.html" class="content--main--name">
                                <h4 class="title">${value.product_name}</h4>
                            </a>
                            <div class="content--main--price">${price}</div>
                        </div>
                        <div class="buy">
                            <div class="buy--now">
                                <a href="" class="buy--icon">
                                    <i class="fa-solid fa-bag-shopping"></i>
                                </a>
                                Buy now
                            </div>
                            <div class="add--cart">
                                <a href="" class="add--icon">
                                    <i class="fa-solid fa-cart-shopping"></i>
                                </a>
                                <span class="text--buy">Add to Cart</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
  });
  product.innerHTML = listProducts.join("");
}
export{convertToVND}
export const idItem = { id: 8 };

import { convertToVND } from "../Js/Products.js";
callApi();

function callApi() {
  fetch("http://petsla-api.herokuapp.com/products/")
    .then((response) => response.json())
    .then((data) => renderHTML(data));
}
function renderHTML(products) {
  let smt = document.querySelector(".container--products");
  console.log(smt);
  let value = products.filter((ele) => {
    return ele.id === idItem.id;
  });
  console.log(value);
  let priceVND = convertToVND(value[0].price);
  let product = `
        <div class="col l-6 m-6 c-12">
            <div class="product--img">
                <img class="img" src="http://petsla-api.herokuapp.com${value[0].images}" alt="">
            </div>
        </div>
        <div class="col l-6 m-6 c-12 product--main">
            <h2 class="product--title">${value[0].product_name}</h2>
            <div class="product--price">${priceVND}đ</div>
            <div class="product--buy">
                <div class="product--buy--now">
                    Buy now
                </div>
                <div class="product--add--cart">
                    Add to Cart
                </div>
            </div>
            <div class="divide"></div>
            <h3 class="product--info--title">Thông tin sản phẩm</h3>
                <p class="detail">${value[0].description}</p>
            </div>
        `;
  let pro = document.querySelector(".container--products-detail");
  console.log(pro);
  pro.innerHTML = product;
}

export {callApi, renderHTML, convertToVND };

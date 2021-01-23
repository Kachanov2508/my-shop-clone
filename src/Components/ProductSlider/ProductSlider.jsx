import React from "react";
import { Wrapper } from "./ProductSlider.styled";

const ProductSlider = () => {
  return (
    <div className="container">
      <Wrapper>
        <figure>
          <img
            src="https://static.my-shop.ru/product/0/390/3896545_128.jpg"
            alt=""
          />
        </figure>
        <div>
          <h4>Name Product</h4>
          <h5>Category Product</h5>
        </div>
        <div>
          <p>Price</p>
          <p>Old Price</p>
        </div>
        <div>
          <button>В корзину</button>
          <button>Like</button>
        </div>
      </Wrapper>
    </div>
  );
};

export default ProductSlider;

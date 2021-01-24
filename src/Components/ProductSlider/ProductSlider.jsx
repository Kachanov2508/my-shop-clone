import React from "react";
import Product from "./Product/Product";
import { Bcg, Wrapper } from "./ProductSlider.styled";

const ProductSlider = () => {
  return (
    <div className="container">
      <Bcg className="bgWhite">
        <h2>Игрушки и детское творчество</h2>
        <Wrapper>
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </Wrapper>
      </Bcg>
    </div>
  );
};

export default ProductSlider;

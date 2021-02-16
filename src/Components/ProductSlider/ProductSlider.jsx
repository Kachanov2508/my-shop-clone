import React from "react";
import { useState } from "react";
import Product from "./Product/Product";
import { Bcg, Wrapper, Next, Prev } from "./ProductSlider.styled";

const ProductSlider = () => {

  const items = 16;
  const [translate, setTranslite] = useState(0);

  const showItems = () => {
    let arr = [];
    for(let i = 0; i < items; i++) {
      arr.push(<Product translateX={translate} />)
    }
    return arr;
  }

  return (
    <div className="container">
      <Bcg className="bgWhite">
        <h2>Игрушки и детское творчество</h2>
        <Wrapper>
          <Prev onClick={() => setTranslite(translate - 600)}>Prev</Prev>
            {showItems().map(item => item)}
          <Next onClick={() => setTranslite(translate + 600)}>Next</Next>
        </Wrapper>
      </Bcg>
    </div>
  );
};

export default ProductSlider;

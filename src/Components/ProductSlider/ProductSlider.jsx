import React from "react";
import { useState } from "react";
import Product from "./Product/Product";
import { Bcg, Wrapper, Next, Prev } from "./ProductSlider.styled";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";


const ProductSlider = (props) => {

  const [translate, setTranslite] = useState(1 * props.offers.length);

  // const test = () => {

  //   props.offers.length

  //   props.offers.map(offer => <Product translateX={translate} offer={offer} key={offer.ISBN} />)
  // }
  console.log(translate);

  return (
    <div className="container">
      <Bcg className="bgWhite">
        <h2>Игрушки и детское творчество</h2>
        <Wrapper>
          <Prev onClick={() => setTranslite(translate - props.translateX)}><FontAwesomeIcon icon={faAngleLeft} size="2x" /></Prev>
            {props.offers.map(offer => <Product translateX={translate} offer={offer} key={offer.ISBN} />)}
          <Next onClick={() => setTranslite(props.offers.length - (props.offers.length - 3))}><FontAwesomeIcon icon={faAngleRight} size="2x" /></Next>
        </Wrapper>
      </Bcg>
    </div>
  );
};

export default ProductSlider;

import React from "react";
import { useState } from "react";
import Product from "./Product/Product";
import { Bcg, Wrapper, Next, Prev } from "./ProductSlider.styled";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";


const ProductSlider = (props) => {

  const [translate, setTranslite] = useState(0);

  return (
    <div className="container">
      <Bcg className="bgWhite">
        <h2>Игрушки и детское творчество</h2>
        <Wrapper>
          <Prev onClick={() => setTranslite(translate - 3)} disabled={translate <= 0 ? true : false} active={translate > 0 ? "#783cbd" : "none"} color={translate > 0 ? "#ffffff" : "grey"}>
            <FontAwesomeIcon icon={faAngleLeft} size="2x" />
          </Prev>
          {props.offers.map(offer => <Product translateX={translate * 200} offer={offer} key={offer.ISBN} />)}
          <Next onClick={() => setTranslite(translate + 3)} disabled={translate >= 12 ? true : false} active={translate < 12 ? "#783cbd" : "none"} color={translate < 12 ? "#ffffff" : "grey"}>
            <FontAwesomeIcon icon={faAngleRight} size="2x" />
          </Next>
        </Wrapper>
      </Bcg>
    </div>
  );
};

export default ProductSlider;

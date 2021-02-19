import React from "react";
import { Button, Price, Title, Wrapper } from "./Product.styled";

const Product = (props) => {
  return (
    <Wrapper translateX={props.translateX}>
      <figure>
        <img
          src={Array.isArray(props.offer.picture) ? props.offer.picture[0] : props.offer.picture}
          alt=""
        />
      </figure>
      <Title>
        <div>
          <h4>{props.offer.name}</h4>
        </div>
        <h5>{props.offer.market_category}</h5>
      </Title>
      <Price>
        <p>{props.offer.price} ₽</p>
        <p>{props.offer.oldprice} ₽</p>
      </Price>
      <Button>
        <button>В корзину</button>
        <button>
          <i className="fa fa-heart"></i>
        </button>
      </Button>
    </Wrapper>
  );
};

export default Product;

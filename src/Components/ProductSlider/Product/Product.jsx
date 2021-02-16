import React from "react";
import { Button, Price, Title, Wrapper } from "./Product.styled";

const Product = (props) => {
  return (
    <Wrapper translateX={props.translateX}>
      <figure>
        <img
          src="https://static.my-shop.ru/product/0/390/3896545_128.jpg"
          alt=""
        />
      </figure>
      <Title>
        <h4>Вот такая карусель</h4>
        <h5>Айрис-Пресс</h5>
      </Title>
      <Price>
        <p>234 ₽</p>
        <p>293 ₽</p>
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

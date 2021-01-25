import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";

import Wrapper from "./Right.styled";

const Right = () => {
  return (
    <Wrapper>
      <div>
        <figure>
          <FontAwesomeIcon icon={faUser} size="lg" color="#783cbd" />
        </figure>
        <span>Мой кабинет</span>
      </div>
      <div>
        <figure>
          <FontAwesomeIcon icon={faShoppingBasket} size="lg" color="#783cbd" />
        </figure>
        <span>Корзина</span>
      </div>
    </Wrapper>
  );
};

export default Right;

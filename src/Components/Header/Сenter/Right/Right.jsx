import React from "react";
import classes from "./Right.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";

const Right = () => {
  return (
    <div className={classes.right}>
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
    </div>
  );
};

export default Right;

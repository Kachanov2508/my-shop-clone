import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faShoppingBasket } from "@fortawesome/free-solid-svg-icons";

import classes from "./Menu.module.scss";

const Menu = () => {
  return (
    <div className={classes.menu}>
      <div>
        <FontAwesomeIcon icon={faUser}/>
        <span>Мой кабинет</span>
      </div>
      <div>
        <FontAwesomeIcon icon={faShoppingBasket}/>
        <span>Корзина</span>
      </div>
    </div>
  );
};

export default Menu;

import React, { useContext } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faShoppingBasket } from "@fortawesome/free-solid-svg-icons";

import classes from "./Menu.module.scss";
import { Link } from "react-router-dom";

import {CartContext} from '../../../../context'

const Menu = () => {
    const [product, setProduct] = useContext(CartContext);

    return (
        <div className={classes.menu}>
            <div className={classes.cabinet}>
                <FontAwesomeIcon icon={faUser} />
                <span>Мой кабинет</span>
            </div>
            <Link to="/basket">
                <div className={classes.cart}>
                    <div className={classes.quantity}>{product.length}</div>
                    <FontAwesomeIcon icon={faShoppingBasket} />
                    <span>Корзина</span>
                </div>
            </Link>
        </div>
    );
};

export default Menu;

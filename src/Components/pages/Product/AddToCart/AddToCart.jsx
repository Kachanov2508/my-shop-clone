import React from "react";
import classes from "./AddToCart.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus, faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

const AddToCart = () => {
    return (
        <div className={classes.buttons}>
            <div className={classes.quantity}>
                <button className={classes.left}>
                    <FontAwesomeIcon icon={faMinus} />
                </button>
                <input type="text" placeholder="1" />
                <button>
                    <FontAwesomeIcon icon={faPlus} />
                </button>
            </div>
            <div className={classes.basket}>
                <button>
                    <span>В корзину</span>
                    <FontAwesomeIcon icon={faShoppingBasket} />
                </button>
            </div>
            <div className={classes.like}>
                <button>
                    <FontAwesomeIcon icon={faHeart} />
                </button>
            </div>
        </div>
    );
};

export default AddToCart;

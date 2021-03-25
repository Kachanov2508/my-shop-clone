import React, { useContext } from "react";
import classes from "./AddToCart.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import Quantity from "./Quantity/Quantity";
import {CartContext} from '../../../../context';

const AddToCart = (props) => {

    const [product, setProduct] = useContext(CartContext);

    function addProduct() {
        setProduct(prevProduct => [...prevProduct, props.product[0]]);
    }
    console.log(product)
    
    return (
        <div className={classes.buttons}>
            <Quantity />
            <div className={classes.basket}>
                <button onClick={addProduct}>
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

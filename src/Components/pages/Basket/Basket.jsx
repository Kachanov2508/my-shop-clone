import React from "react";
import classes from "./Basket.module.scss";

import Check from "./Check/Check";
import Products from "./Products/Products";
import Sort from "./Sort/Sort";

const Basket = () => {
    return (
        <div className="container-1200">
            <div className={classes.basket}>
                <div className={classes.heading}>
                    <h1>Корзина</h1>
                    <p>1 товар (1 наименование) на сумму 2 990 ₽ (вес 0.5 кг)</p>
                </div>
                <div className={classes.grid}>
                    <Sort />
                    <Check />
                    <Products />
                </div>
            </div>
        </div>
    );
};

export default Basket;

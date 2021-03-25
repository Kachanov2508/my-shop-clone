import React from "react";
import Quantity from "../../Product/AddToCart/Quantity/Quantity";
import classes from "./Products.module.scss";

const Products = () => {
    return (
        <div className={classes.products}>
            <div className={classes.product}>
                <div className={classes.image}>
                    <img src="https://static.my-shop.ru/product/0/423/4226033_128.jpg" alt="img" />
                </div>
                <div className={classes.title}>Машинка радиоуправляемая "Snake", 1:24, голубой</div>
                <div className={classes.count}>
                    <Quantity />
                </div>
                <div className={classes.price}>2 990 ₽</div>
                <div className={classes.button}>
                    <span>Отложить</span>
                    <span>Удалить</span>
                </div>
                <div className={classes.delivery}>
                    планируемая дата доставки: <span>24 марта (Ср)</span>
                </div>
            </div>
        </div>
    );
};

export default Products;

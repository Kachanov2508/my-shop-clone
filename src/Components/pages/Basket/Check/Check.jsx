import React from "react";
import classes from "./Check.module.scss";

import cartDecor from '../../../../img/cart_decor.svg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardCheck } from '@fortawesome/free-solid-svg-icons';

const Check = () => {
    return (
        <div className={classes.check}>
            <div className={classes.cartDecor}>
                <img src={cartDecor} alt="cartDecor" />
            </div>
            <div className={classes.items}>
                <div className={classes.item}>
                    <div className={classes.name}>
                        Товаров в корзине<span></span>
                    </div>
                    <div className={classes.value}>1</div>
                </div>
                <div className={classes.item}>
                    <div className={classes.name}>
                        Вес товаров<span></span>
                    </div>
                    <div className={classes.value}>0.5кг</div>
                </div>
                <div className={classes.item}>
                    <div className={classes.name}>
                        Стоимость товаров<span></span>
                    </div>
                    <div className={classes.value}>2 990 ₽</div>
                </div>
                <div className={classes.item}>
                    <div className={classes.name}>Планируемая дата доставки</div>
                    <div className={classes.value}>
                        <span className={classes.dateDelivery}>24 марта (Ср)</span>
                    </div>
                </div>
            </div>
            <div className={classes.itogo}>
                <span>Итого:</span>
                <span>2 990 ₽</span>
            </div>
            <button>
                <span>Оформить заказ</span>
                <FontAwesomeIcon icon={faClipboardCheck} />
            </button>
            <div className={classes.cartDecorBottom}>
                <img src={cartDecor} alt="cartDecor" />
            </div>
        </div>
    );
};

export default Check;

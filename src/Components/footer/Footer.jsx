import React from 'react';
import classes from "./Footer.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import { faFacebookSquare, faGooglePlusSquare, faInstagramSquare, faCcPaypal, faCcVisa, faCcAmazonPay, faTwitterSquare } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <div className={classes.bcg}>
            <div className="container">
                <div className={classes.top}>
                    <div className={classes.column}>
                        <p>О компании</p>
                        <ul>
                            <li>Информация о продавце</li>
                            <li>Политика конфиденциальности</li>
                            <li>Как с нами связаться</li>
                            <li>Вакансии</li>
                            <li>Прочие вопросы</li>
                        </ul>
                    </div>
                    <div className={classes.column}>
                        <p>Покупателям</p>
                        <ul>
                            <li>Публичная оферта для физ. лиц</li>
                            <li>Публичная оферта для юр. лиц</li>
                            <li>Оформление заказа</li>
                            <li>Способы оплаты</li>
                            <li>Возврат товаров</li>
                            <li>Скидки</li>
                        </ul>
                    </div>
                    <div className={classes.column}>
                        <p>Доставка</p>
                        <ul>
                            <li>Пункты выдачи заказов</li>
                            <li>Курьерские службы</li>
                            <li>Ограничения по доставке</li>
                        </ul>
                    </div>
                    <div className={classes.column}>
                        <p>Сотрудничество</p>
                        <ul>
                            <li>Предложение сотрудничества</li>
                            <li>Партнерская программа</li>
                            <li>Партнёры</li>
                        </ul>
                    </div>
                </div>

                <div className={classes.center}>
                    <div className={classes.logo}>
                        <h2>MySh<span>o</span>p</h2>
                    </div>
                    <div className={classes.phone}>
                        <FontAwesomeIcon icon={faPhoneVolume}/>
                        <p>8(985)987-99-69</p>
                    </div>
                    <div className={classes.social}>
                        <FontAwesomeIcon icon={faGooglePlusSquare}/>
                        <FontAwesomeIcon icon={faFacebookSquare}/>
                        <FontAwesomeIcon icon={faInstagramSquare}/>
                        <FontAwesomeIcon icon={faTwitterSquare}/>
                    </div>
                </div>

                <div className={classes.bottom}>
                    <div className={classes.text}>
                        <p>Все права защищены © 2002-2021 ®</p>
                    </div>
                    <div className={classes.pay}>
                        <FontAwesomeIcon icon={faCcPaypal} size="lg" />
                        <FontAwesomeIcon icon={faCcVisa} size="lg" />
                        <FontAwesomeIcon icon={faCcAmazonPay} size="lg" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;

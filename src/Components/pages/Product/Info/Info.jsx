import React, { useState } from "react";
import classes from "./Info.module.scss";


const Tabs = (props) => {
    const [tab, setTab] = useState(1);

    const activeTab = () => {
        if (tab === 1) {
            return (
                <div className={`${classes.tabsContent} ${classes.about}`}>
                    <div className={classes.vendor}>
                        <p>Производитель</p>
                        <p>{props.product.length > 0 && props.product[0].vendor ? props.product[0].vendor[0] : "Нет данных"}</p>
                    </div>
                    <div className={classes.series}>
                        <p>Серия</p>
                        <p>{props.product.length > 0 && props.product[0].series ? props.product[0].series[0] : "Нет данных"}</p>
                    </div>
                </div>
            );
        }
        if (tab === 2) {
            return (
                <div className={classes.tabsContent}>
                    <p>{props.product.length > 0 ? `${props.product[0].description[0].slice(0, 190)}...` : null}</p>
                </div>
            );
        }
        if (tab === 3) {
            return (
                <div className={`${classes.tabsContent} ${classes.characteristics}`}>
                    <div>
                        {props.product.length > 0 ? props.product[0].param.map((item, index) => <p key={index}>{item.data.name} <span></span></p>) : null}
                    </div>
                    <div>{props.product.length > 0 ? props.product[0].param.map((item, index) => <p key={index}>{`${item._} ${item.data.unit ? item.data.unit : ""}`}</p>) : null}</div>
                </div>
            );
        }
    };

    return (
        <div className={classes.tabs}>
            <div className={classes.tabsBtn}>
                <div onClick={() => setTab(1)} className={tab === 1 ? classes.active : null}>
                    О товаре
                </div>
                <div onClick={() => setTab(2)} className={tab === 2 ? classes.active : null}>
                    Описание
                </div>
                <div onClick={() => setTab(3)} className={tab === 3 ? classes.active : null}>
                    Характеристики
                </div>
            </div>
            {activeTab()}
        </div>
    );
};

export default Tabs;

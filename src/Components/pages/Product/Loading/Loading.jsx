import React from "react";
import classes from './Loading.module.scss'

const Loading = () => {
    return (
        <div className={classes.body}>
            <div className={classes.loaded}>
                <h1>Загрузка...</h1>
            </div>
            <div className={`${classes.loaded} ${classes.grid}`} style={{ alignItems: "stretch" }}>
                <div className={`${classes.loaded} ${classes.image}`}>Загрузка...</div>
                <div className={`${classes.loaded} ${classes.price}`}>Загрузка...</div>
                <div className={`${classes.loaded} ${classes.button}`}>Загрузка...</div>
                <div className={`${classes.loaded} ${classes.delivery}`}>Загрузка...</div>
                <div className={`${classes.loaded} ${classes.info}`}>Загрузка...</div>
                <div className={`${classes.loaded} ${classes.socials}`}>Загрузка...</div>
            </div>
        </div>
    );
};

export default Loading;

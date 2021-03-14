import React, { useState } from "react";
import classes from "./Description.module.scss";

const Description = ({product}) => {
    const [current, setCurrent] = useState(1);

    const showItem = () => {
        if (current === 1) {
            return (
                <div>
                    <h2>Описание</h2>
                    <p>{product.description[0] ? product.description[0] : "Описание отсутствует"}</p>
                </div>
            );
        }
        if (current === 2) {
            return (
                <div>
                    <h2>Характеристики</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, asperiores esse laboriosam dolor, possimus mollitia perspiciatis eveniet voluptatibus quos atque nulla quidem quaerat est deserunt necessitatibus temporibus consequatur dolore totam, commodi iste ducimus eos. Ut eius et earum saepe, dolores nobis sunt tenetur debitis laboriosam error, nam dolorum adipisci quibusdam?</p>
                </div>
            );
        }
        if (current === 3) {
            return (
                <div>
                    <h2>Отзывы</h2>
                    <p>По данному товару нет ни одного отзыва.</p>
                </div>
            );
        }
    };

    return (
        <div className={classes.description}>
            <div className={classes.head}>
                <div onClick={() => setCurrent(1)} className={current === 1 ? classes.active : ""}>
                    Описание
                </div>
                <div onClick={() => setCurrent(2)} className={current === 2 ? classes.active : ""}>
                    Характеристики
                </div>
                <div onClick={() => setCurrent(3)} className={current === 3 ? classes.active : ""}>
                    Отзывы (0)
                </div>
            </div>
            <div className={classes.border}></div>
            <div className={classes.body}>{showItem()}</div>
        </div>
    );
};

export default Description;

import React from "react";
import classes from "./DeliveryDate.module.scss";

const DeliveryDate = (props) => {
    if (props.product.length > 0) {
        let date = new Date();
        date.setDate(date.getDate() + Number(props.product[0].delivery_options[0].option[0].data.days.split("-").pop()));
        const day = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];
        const month = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];

        return (
            <div className={classes.delivery}>
                <p>
                    Доставка: <span>г. Москва</span>
                </p>
                <p>
                    Планируемая дата доставки: <span>{`${date.getDate()} ${month[date.getMonth()]} (${day[date.getDay() - 1]})`}</span>
                </p>
            </div>
        );
    }
};

export default DeliveryDate;

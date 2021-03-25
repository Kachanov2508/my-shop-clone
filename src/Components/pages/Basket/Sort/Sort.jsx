import React from "react";
import classes from "./Sort.module.scss";

const Sort = () => {
    return (
        <div className={classes.sort}>
            <select size="1">
                <option value="по названию (А-я)">по названию (А-я)</option>
                <option value="по названию (я-А)">по названию (я-А)</option>
                <option value="по цене (дешёвые сверху)">по цене (дешёвые сверху)</option>
                <option value="по цене (дорогие сверху)">по цене (дорогие сверху)</option>
                <option value="по количеству (по возрастанию)">по количеству (по возрастанию)</option>
                <option value="по количеству (по убыванию)">по количеству (по убыванию)</option>
                <option value="по сумме (по возрастанию)">по сумме (по возрастанию)</option>
                <option value="по сумме (по убыванию)">по сумме (по убыванию)</option>
                <option value="по дате доставки (по возрастанию)">по дате доставки (по возрастанию)</option>
                <option value="по дате доставки (по убыванию)">по дате доставки (по убыванию)</option>
            </select>
            <div>
                <span>Отложить все товары</span>
                <span>Удалить все товары</span>
            </div>
        </div>
    );
};

export default Sort;

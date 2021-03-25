import React from "react";
import classes from "./Quantity.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

const Quantity = () => {
    return (
        <div className={classes.quantity}>
            <button className={classes.left}>
                <FontAwesomeIcon icon={faMinus} />
            </button>
            <input type="text" placeholder="1" />
            <button>
                <FontAwesomeIcon icon={faPlus} />
            </button>
        </div>
    );
};

export default Quantity;

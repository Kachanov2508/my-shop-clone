import React from "react";
import classes from "./Middle.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons";

const Middle = () => {
  return (
    <div className={classes.search}>
      <input type="text" placeholder="Какой товар или бренд будем искать?" />
      <button className={classes.button}>
        <figure>
          <FontAwesomeIcon icon={faPhoneVolume} size="lg" color="#f7f7f7" />
        </figure>
        <p>Искать</p>
      </button>
    </div>
  );
};

export default Middle;

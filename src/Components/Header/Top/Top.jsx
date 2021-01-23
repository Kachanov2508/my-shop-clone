import React from "react";
import classes from "./Top.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons";

const Top = () => {
  return (
    <div className={classes.wrapper}>
      <div className={`${classes.top} container`}>
        <div className={classes.sity}>
          <figure>
            <FontAwesomeIcon icon={faMapMarkerAlt} size="lg" color="#783cbd" />
          </figure>
          <p>г. Москва</p>
        </div>
        <div className={classes.phone}>
          <figure>
            <FontAwesomeIcon icon={faPhoneVolume} size="lg" color="#783cbd" />
          </figure>
          <p>8(985)987-99-69</p>
        </div>
        <div className={classes.menu}>
          <ul>
            <li>Доставка</li>
            <li>Оплата</li>
            <li>Скидки</li>
            <li>Помощь</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Top;

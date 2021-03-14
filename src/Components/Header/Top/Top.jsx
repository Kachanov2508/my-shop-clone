import React from "react";

import classes from "./Top.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faPhoneVolume } from "@fortawesome/free-solid-svg-icons";

const Top = () => {
  return (
    <div className={classes.wrapper}>
      <div className="container">
        <div className={classes.box}>
          <div className={classes.sity}>
            <FontAwesomeIcon icon={faMapMarkerAlt} size="lg" color="#783cbd" />
            <p>г. Москва</p>
          </div>
          <div className={classes.phone}>
            <FontAwesomeIcon icon={faPhoneVolume} size="lg" color="#783cbd" />
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
    </div>
  );
};

export default Top;

import React from "react";
import classes from "./Left.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Left = () => {
  return (
    <div className={classes.left}>
      <figure>
        <FontAwesomeIcon icon={faBars} size="lg" color="#783cbd" />
      </figure>
      <div>
        <p>Каталог</p>
      </div>
    </div>
  );
};

export default Left;

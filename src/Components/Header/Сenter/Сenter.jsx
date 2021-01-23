import React from "react";
import classes from "./Сenter.module.scss";

import Left from "./Left/Left";
import Middle from "./Middle/Middle";
import Right from "./Right/Right";

const Center = () => {
  return (
    <div className="container">
      <div className={classes.center}>
        <Left />
        <Middle />
        <Right />
      </div>
    </div>
  );
};

export default Center;

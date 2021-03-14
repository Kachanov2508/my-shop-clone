import React from "react";

import Catalogue from "./Catalogue/Catalogue";
import Search from "./Search/Search";
import Menu from "./Menu/Menu";

import classes from "./Сenter.module.scss";

const Center = () => {
  return (
    <div className="container">
      <div className={classes.box}>
        <Catalogue />
        <Search />
        <Menu />
      </div>
    </div>
  );
};

export default Center;

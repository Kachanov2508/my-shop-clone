import React from "react";
import Bottom from "./Bottom/Bottom";
import classes from "./Header.module.scss";
import Informer from "./Informer/Informer";
import Top from "./Top/Top";
import Center from "./Сenter/Сenter";

const Header = () => {
  return (
    <div className={classes.header}>
      <Top />
      <Center />
      <Bottom />
      <Informer />
    </div>
  );
};

export default Header;

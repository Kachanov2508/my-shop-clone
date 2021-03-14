import React, { useContext } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";

import ShowCategories from '../../../../context';

import classes from "./Catalogue.module.scss";


const Catalouge = () => {
  const { setShowCategories } = useContext(ShowCategories);

  return (
    <>
      <div className={classes.catalogue}>
        <Link to="/">
          <h2>MySh<span>o</span>p</h2>
        </Link>
        <div className={classes.menu} onClick={() => setShowCategories(true)}>
          <FontAwesomeIcon icon={faBars} />
          <p>Каталог</p>
        </div>
      </div>
    </>
  );
};

export default Catalouge;

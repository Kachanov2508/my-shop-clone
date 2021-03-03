import React, { useContext, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import Wrapper from "./Left.styled";

import { Link } from "react-router-dom";

import ShowCategories from '../../../../context';


const Left = () => {
  const {setShowCategories} = useContext(ShowCategories);

  return (
    <>
      <div style={{display: "flex", alignItems: "center", justifyContent: "space-between"}}>
        <Link to="/" style={{textDecoration: "none"}}>
          <h2 style={{color: "#783cbd", textTransform: "uppercase", fontWeight: "900", fontSize: "26px"}}>MySh<span style={{color: "#ff8300"}}>o</span>p</h2>
        </Link>
        <Wrapper onClick={() => setShowCategories(true)}>
          <figure>
            <FontAwesomeIcon icon={faBars} size="lg" color="#f7f7f7" />
          </figure>
          <div>
            <p>Каталог</p>
          </div>
        </Wrapper>
      </div>
    </>
  );
};

export default Left;

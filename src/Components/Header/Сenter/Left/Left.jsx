import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import Wrapper from "./Left.styled";
import { Link } from "react-router-dom";

const Left = () => {
  return (
    <Link to="/category">
      <Wrapper>
        <figure>
          <FontAwesomeIcon icon={faBars} size="lg" color="#783cbd" />
        </figure>
        <div>
          <p>Каталог</p>
        </div>
      </Wrapper>
    </Link>
  );
};

export default Left;

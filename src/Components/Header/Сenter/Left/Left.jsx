import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import Wrapper from "./Left.styled";

const Left = () => {
  return (
    <Wrapper>
      <figure>
        <FontAwesomeIcon icon={faBars} size="lg" color="#783cbd" />
      </figure>
      <div>
        <p>Каталог</p>
      </div>
    </Wrapper>
  );
};

export default Left;

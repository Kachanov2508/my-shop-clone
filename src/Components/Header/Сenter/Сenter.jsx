import React from "react";

import Left from "./Left/Left";
import Middle from "./Middle/Middle";
import Right from "./Right/Right";

import Wrapper from "./Сenter.styled";

const Center = () => {
  return (
    <div className="container">
      <Wrapper>
        <Left />
        <Middle />
        <Right />
      </Wrapper>
    </div>
  );
};

export default Center;

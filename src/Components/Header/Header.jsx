import React from "react";
import Bottom from "./Bottom/Bottom";
import Wrapper from "./Header.styled";
import Informer from "./Informer/Informer";
import Top from "./Top/Top";
import Center from "./Сenter/Сenter";

const Header = () => {
  return (
    <Wrapper>
      <Top />
      <Center />
      <Bottom />
      <Informer />
    </Wrapper>
  );
};

export default Header;

import styled from "styled-components";

const Wrapper = styled.div`
  border-bottom: 1px solid #dfe0e1;
`;

const Heading = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  padding: 10px 0;
`;

const Sity = styled.div`
  display: flex;
  align-items: center;

  & p {
    margin-left: 10px;
  }
`;

const Phone = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  & p {
    margin-left: 10px;
  }
`;

const Menu = styled.div`
  & ul {
   list-style: none;
   display: flex;
   justify-content: flex-end;

   & li {
     margin-left: 30px;
   }
  }
`;


export { Wrapper, Heading, Phone, Menu, Sity }
import styled from "styled-components";

const Bcg = styled.div`
  border-radius: 10px;
  & h2 {
    padding: 20px 0 10px 20px;
    font-size: 20px;
    color: #2a3d48;
  }
`;

const Wrapper = styled.div`
  display: flex;
  overflow: hidden;
  position: relative;

  & h2 {
    margin: 20px;
  }
`;

const Prev = styled.button`
  position: absolute;
  top: 32%;
  left: 20px;
  z-index: 99;
  background-color: #ffffff;
  border: none;
  box-shadow: 2px 5px 10px rgb(0 0 0 / 20%);
  padding: 10px 15px;
  cursor: pointer;
  border-radius: 8px;
  outline: none;
  transition: all .3s ease-in-out;
  color: gray;
  
  &:hover {
    background-color: ${props => props.active};
    color: ${props => props.color};
  }
`;

const Next = styled.button`
  position: absolute;
  top: 32%;
  right: 20px;
  z-index: 99;
  background-color: #ffffff;
  border: none;
  box-shadow: 2px 5px 10px rgb(0 0 0 / 20%);
  padding: 10px 15px;
  cursor: pointer;
  border-radius: 8px;
  outline: none;
  transition: all .3s ease-in-out;
  color: gray;
  
  &:hover {
    background-color: ${props => props.active};
    color: ${props => props.color};
  }
`;

export { Wrapper, Bcg, Next, Prev };

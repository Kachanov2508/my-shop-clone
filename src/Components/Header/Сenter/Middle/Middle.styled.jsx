import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;

  & input {
    width: 100%;
    height: 34px;
    border: 1px solid #dfe0e1;
    border-right: none;
    border-top-left-radius: 50px;
    border-bottom-left-radius: 50px;
    padding-left: 20px;
  }

  & button {
    display: flex;
    align-items: center;
    padding: 10px 20px;
    color: #f7f7f7;
    background-color: #783cbd;
    border: 1px solid #dfe0e1;
    border-top-right-radius: 50px;
    border-bottom-right-radius: 50px;
    cursor: pointer;

    & figure {
      margin-right: 7px;
    }

    & p {
      margin: 0;
    }
  }
`;

export default Wrapper;
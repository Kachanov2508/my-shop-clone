import styled from "styled-components";

const Wrapper = styled.div`
  width: 180px;
  padding: 10px;
  margin: 10px;
  border-radius: 8px;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  transform: translateX(-${props => props.translateX}px);

  &:hover {
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.3);
  }

  & figure {
    width: 160px;

    & img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }
  }
`;

const Title = styled.div`
  margin: 10px 0;
  & h4 {
    font-size: 14px;
    color: #2a3d48;
    margin-bottom: 30px;
    padding: 5px;
    border-radius: 5px;
    transition: all 0.3s ease-in-out;

    &:hover {
      box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.2);
    }
  }
  & h5 {
    font-size: 14px;
    color: #2a3d48;
    font-weight: 300;
  }
`;

const Price = styled.div`
  display: flex;
  & p:first-child {
    margin-right: 10px;
    font-weight: 600;
    color: #2a3d48;
  }
  & p:last-child {
    font-size: 14px;
    color: #5d5f61;
    text-decoration: line-through;
    text-decoration-color: red;
  }
`;

const Button = styled.div`
  margin-top: 10px;
  & button {
    border: none;
    border-radius: 8px;
    transition: all 0.2s ease-in-out;
    cursor: pointer;

    &:focus {
      outline: none;
    }
  }

  & button:first-child {
    background-color: #ff8300;
    font-size: 14px;
    font-weight: 600;
    color: #f7f7f7;
    padding: 7px 20px;
    margin-right: 10px;

    &:hover {
      opacity: 0.9;
    }
  }
  & button:last-child {
    background: none;
    border: 1px solid #cccccc;
    padding: 6px;

    &:hover {
      border: 1px solid #783cbd;
    }
  }
`;

export { Wrapper, Title, Price, Button };

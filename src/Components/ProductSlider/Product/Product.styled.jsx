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
    height: 150px;
    overflow: hidden;

    & img {
      width: 100%;
      height: 100%;
      object-fit: scale-down;
      display: block;
    }
  }
`;

const Title = styled.div`
  margin: 10px 0;
  position: relative;
  height: 70px;

  & div {
    overflow: hidden;
    -webkit-line-clamp: 2;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    width: 100%;
    background-color: #ffffff;
    transition: all .1s ease-in-out;

    position: absolute;
    top: 0;
    z-index: 2;

    /* &::before {
      content: "";
      display: block;
      width: 100%;
      height: 15px;
      background-image: linear-gradient(180deg,hsla(0,0%,100%,0),#fff 45%);
      position: absolute;
      bottom: 0;
    } */

    &:hover {
      box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.2);
      overflow: visible;
      -webkit-line-clamp: unset;
      border-radius: 5px;

      &::before {
        background-image: none;
      }

      & h4 {
        color: #783cbd;
      }
    }
  }

  & h4 {
    font-size: 14px;
    color: #2a3d48;
    padding: 5px;
    border-radius: 5px;
    transition: all 0.1s ease-in-out;
    font-size: 13.4px;
    line-height: 1.6;
  }

  & h5 {
    font-size: 14px;
    color: #2a3d48;
    font-weight: 300;

    position: absolute;
    bottom: 0;
    z-index: 1;
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
    transition: all 0.1s ease-in-out;
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

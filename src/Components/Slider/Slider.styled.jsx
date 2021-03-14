import styled from "styled-components";

let Wrapper = styled.div`
  margin: 20px 0 40px 0;
  display: flex;
  overflow: hidden;
  position: relative;
  z-index: 99;

  & div {
    width: 100%;
    height: 200px;
    flex-shrink: 0;
    border-radius: 10px;
    overflow: hidden;
    transform: ${(props) => `translate(-${props.next}%)`};
    transition: all 0.4s ease-in-out;

    & img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }
  }

  & button {
    position: absolute;
    padding: 7px 15px;
    border-radius: 10px;
    border: none;
    transform: translate(-50%, -50%);
    cursor: pointer;
    transition: all 0.1s ease-in-out;
    z-index: 999;

    &:focus {
      outline: none;
    }
  }

  & button:first-child {
    top: 50%;
    left: 40px;
    :hover {
      box-shadow: 2px 5px 10px rgba(0, 0, 0, 0.2);
    }
  }
  & button:last-child {
    top: 50%;
    right: 0;
    :hover {
      box-shadow: -2px 5px 10px rgba(0, 0, 0, 0.2);
    }
  }
`;

export default Wrapper;

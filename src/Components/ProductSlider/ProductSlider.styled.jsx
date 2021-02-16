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
  top: 50%;
  left: 20px;
  transform: translateY(-50%);
  z-index: 999;
`;

const Next = styled.button`
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
  z-index: 999;
`;

export { Wrapper, Bcg, Next, Prev };

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

  & h2 {
    margin: 20px;
  }
`;

export { Wrapper, Bcg };

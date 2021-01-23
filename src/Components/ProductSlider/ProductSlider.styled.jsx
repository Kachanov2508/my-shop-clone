import styled from "styled-components";

const Wrapper = styled.div`
  width: 180px;

  & figure {
    width: 150px;
    height: 160px;

    & img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }
  }
`;

export { Wrapper };

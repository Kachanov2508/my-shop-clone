import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons";

import Wrapper from "./Middle.styled";

const Middle = () => {
  return (
    <Wrapper>
      <input type="text" placeholder="Какой товар или бренд будем искать?" />
      <button>
        <figure>
          <FontAwesomeIcon icon={faPhoneVolume} size="lg" color="#f7f7f7" />
        </figure>
        <p>Искать</p>
      </button>
    </Wrapper>
  );
};

export default Middle;

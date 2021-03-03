import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons";

import { Wrapper, Heading, Phone, Menu, Sity } from "./Top.styled"

const Top = () => {
  return (
    <Wrapper>
      <Heading className="container">
        <Sity>
          <figure>
            <FontAwesomeIcon icon={faMapMarkerAlt} size="lg" color="#783cbd" />
          </figure>
          <p>г. Москва</p>
        </Sity>
        <Phone>
          <figure>
            <FontAwesomeIcon icon={faPhoneVolume} size="lg" color="#783cbd" />
          </figure>
          <p>8(985)987-99-69</p>
        </Phone>
        <Menu>
          <ul>
            <li>Доставка</li>
            <li>Оплата</li>
            <li>Скидки</li>
            <li>Помощь</li>
          </ul>
        </Menu>
      </Heading>
    </Wrapper>
  );
};

export default Top;

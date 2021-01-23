import React, { useState } from "react";
import Wrapper from "./Slider.styled";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const Slider = () => {
  const [count, setCount] = useState(0);

  const banners = {
    banner: [
      "http://static.my-shop.ru/object/banner/1/3241_984x163.png",
      "https://static.my-shop.ru/object/banner/1/2766_984x163.png",
      "https://static.my-shop.ru/object/banner/1/3197_984x163.png",
      "https://static.my-shop.ru/object/banner/1/3245_984x163.png",
      "https://static.my-shop.ru/object/banner/1/3249_984x163.png",
      "https://static.my-shop.ru/object/banner/1/3250_984x163.png",
      "https://static.my-shop.ru/object/banner/1/3252_984x163.png",
      "https://static.my-shop.ru/object/banner/1/3206_984x163.png"
    ],
    alt: [
      "banner 1",
      "banner 2",
      "banner 3",
      "banner 4",
      "banner 5",
      "banner 6",
      "banner 7",
      "banner 8"
    ]
  };

  const leftClick = () => {
    if (count === 0) {
      setCount((banners.banner.length - 1) * 100);
      return;
    }
    setCount(count - 100);
  };

  const rightClick = () => {
    if (count >= (banners.banner.length - 1) * 100) {
      setCount(0);
      return;
    }
    setCount(count + 100);
  };

  return (
    <div className="container">
      <Wrapper next={count}>
        <button onClick={leftClick}>
          <FontAwesomeIcon icon={faAngleLeft} size="2x" color="#783cbd" />
        </button>
        {banners.banner.map((item, index) => (
          <div key={index}>
            <img src={item} alt="" />
          </div>
        ))}
        <button onClick={rightClick}>
          <FontAwesomeIcon icon={faAngleRight} size="2x" color="#783cbd" />
        </button>
      </Wrapper>
    </div>
  );
};

export default Slider;

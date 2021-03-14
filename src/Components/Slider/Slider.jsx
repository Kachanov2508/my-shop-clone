import React, { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import classes from "./Slider.module.scss";

const Slider = ({ slides }) => {
    const [current, setCurrent] = useState(0);

    const nextSlide = () => {
        setCurrent(current === slides.length - 1 ? 0 : current + 1);
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? slides.length - 1 : current - 1);
    };

    return (
        <div className="container">
            <div className={classes.slider}>
                <button onClick={prevSlide} className={classes.prev}>
                    <FontAwesomeIcon icon={faAngleLeft} />
                </button>
                <figure className={classes.image}>
                    <img src={slides[current]} alt={`banner ${current}`} />
                </figure>
                <button onClick={nextSlide} className={classes.next}>
                    <FontAwesomeIcon icon={faAngleRight} />
                </button>
            </div>
        </div>
    );
};

export default Slider;

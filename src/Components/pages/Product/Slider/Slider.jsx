import React, { useEffect, useState } from "react";
import classes from "./Slider.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Slider = (props) => {
    const [slide, setSlide] = useState(0);

    useEffect(() => {
        setSlide(0); //Обновить состояние слайдера при переходе между товарами
    }, [props])

    const nextSlide = () => {
        if (props.product[0].picture.length > 0) setSlide(slide + 1);
    }

    const prevSlide = () => {
        if (props.product[0].picture.length > 0) setSlide(slide - 1);
    };

    return (
        <div className={classes.slider}>
            <button className={classes.prev} onClick={() => prevSlide()} disabled={slide === 0 ? true : false} style={props.product[0].picture.length > 1 ? {display: "block"} : {display: "none"}}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <img src={props.product.length > 0 ? props.product[0].picture[slide] : null} alt={props.product.length > 0 ? props.product[0].data.id : "image"} />
            <button className={classes.next} onClick={() => nextSlide()} disabled={slide === props.product[0].picture.length - 1 ? true : false} style={props.product[0].picture.length > 1 ? {display: "block"} : {display: "none"}}>
                <FontAwesomeIcon icon={faChevronRight} />
            </button>
        </div>
    );
};

export default Slider;

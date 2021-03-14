import React from "react";
import classes from "./Socials.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare, faGooglePlusSquare, faInstagramSquare, faTwitterSquare } from "@fortawesome/free-brands-svg-icons";

const Socials = () => {
    return (
        <div className={classes.socials}>
            <p>Поделиться</p>
            <div>
                <FontAwesomeIcon icon={faGooglePlusSquare} />
                <FontAwesomeIcon icon={faFacebookSquare} />
                <FontAwesomeIcon icon={faInstagramSquare} />
                <FontAwesomeIcon icon={faTwitterSquare} />
            </div>
        </div>
    );
};

export default Socials;

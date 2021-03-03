import React from 'react';

import classes from './IsFetching.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog } from '@fortawesome/free-solid-svg-icons'

const IsFetching = (props) => {
    if (props.fetching) {
        return (
            <div className={classes.fetching}>
                <FontAwesomeIcon icon={faCog} />
            </div>
        )
    } else {
        return null;
    }
}

export default IsFetching;

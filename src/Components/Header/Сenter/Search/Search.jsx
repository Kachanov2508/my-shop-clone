import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import classes from "./Search.module.scss";

const Search = () => {
  return (
    <div className={classes.search}>
      <input type="text" placeholder="Какой товар или бренд будем искать?" />
      <button>
        <FontAwesomeIcon icon={faSearch} />
        <p>Искать</p>
      </button>
    </div>
  );
};

export default Search;

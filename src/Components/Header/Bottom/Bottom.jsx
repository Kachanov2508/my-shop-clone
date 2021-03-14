import classes from "./Bottom.module.scss";
import React from "react";



const Bottom = () => {
  return (
    <div className="container">
      <div className={classes.row}>
        <ul>
          <li>Акции</li>
          <li>Myshop.Гид</li>
          <li>Бодрый зимний майшопинг</li>
          <li>Первый книгопарад</li>
          <li>Только в Myshop</li>
          <li>Календари-2021</li>
          <li>Раскрась свой дом</li>
          <li>Доставим бесплатно в «Пятёрочку»</li>
          <li>Доставим бесплатно в PickPoint</li>
          <li>Испанские куклы</li>
        </ul>
      </div>
    </div>
  );
};

export default Bottom;

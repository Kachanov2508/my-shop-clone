import React from "react";
import styled from "styled-components";

let Container = styled.div`
  padding: 10px 0;
  ul {
    display: flex;
    justify-content: space-between;
    list-style: none;
    font-size: 14px;
    width: 100%;
    padding: 0;
  }
`;

const Bottom = () => {
  return (
    <Container className="container">
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
    </Container>
  );
};

export default Bottom;

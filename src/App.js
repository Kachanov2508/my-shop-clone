import React from "react";
import Header from "./Components/Header/Header";
import ProductSlider from "./Components/ProductSlider/ProductSlider";
import Slider from "./Components/Slider/Slider";
import "./styles.css";

export default function App() {

  const getData = () => {
    fetch("http://localhost:3000/categories")
      .then(response => response.json())
      .then(data => console.log(data));
  }

  getData();

  return (
    <div className="App">
      <Header />
      <Slider />
      <ProductSlider />
    </div>
  );
}

import React from "react";
import Header from "./Components/Header/Header";
import ProductSlider from "./Components/ProductSlider/ProductSlider";
import Slider from "./Components/Slider/Slider";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Slider />
      <ProductSlider />
    </div>
  );
}

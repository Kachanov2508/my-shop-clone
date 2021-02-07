import React from "react";
import { getProduct } from "./Components/api/api";
import Header from "./Components/Header/Header";
import ProductSlider from "./Components/ProductSlider/ProductSlider";
import Slider from "./Components/Slider/Slider";
import "./styles.css";

export default function App() {

  getProduct();

  return (
    <div className="App">
      <Header />
      <Slider />
      <ProductSlider />
    </div>
  );
}

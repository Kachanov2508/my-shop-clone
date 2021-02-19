import React, { useEffect, useState } from "react";
import Header from "./Components/Header/Header";
import ProductSlider from "./Components/ProductSlider/ProductSlider";
import Slider from "./Components/Slider/Slider";
import "./styles.css";

export default function App() {

  const [offers, setOffers] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/offers?_limit=20')
    .then(response => response.json())
    .then(data => setOffers(data))
  }, [])

console.log(offers);

  return (
    <div className="App">
      <Header />
      <Slider />
      <ProductSlider items={offers.length} translate={0} translateX={600} offers={offers}/>
    </div>
  );
}

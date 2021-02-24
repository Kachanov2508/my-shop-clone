import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import ProductSlider from '../ProductSlider/ProductSlider';
import Slider from '../Slider/Slider';

const Home = () => {

    const [offers, setOffers] = useState([])

    useEffect(() => {
      fetch('http://localhost:3000/offers?_limit=20')
        .then(response => response.json())
        .then(data => setOffers(data))
    }, [])

    return (
        <>
            <Header />
            <Slider />
            <ProductSlider items={offers.length} translate={0} translateX={600} offers={offers} />
        </>
    )
}

export default Home

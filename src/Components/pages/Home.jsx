import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import ProductSlider from '../ProductSlider/ProductSlider';
import Slider from '../Slider/Slider';

const Home = () => {

    const [offers, setOffers] = useState([])

    useEffect(() => {
      fetch('https://my-shop-a8555-default-rtdb.firebaseio.com/offers.json?orderBy="id"&limitToFirst=20')
        .then(response => response.json())
        .then(data => setOffers(data))
    }, [])

    return (
        <>
            <Slider />
            <ProductSlider items={offers.length} translate={0} translateX={600} offers={offers} />
        </>
    )
}

export default Home

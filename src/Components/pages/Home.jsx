import React, { useEffect, useState } from "react";
import ProductSlider from "../ProductSlider/ProductSlider";
import Slider from "../Slider/Slider";

const Home = () => {
    const [offers, setOffers] = useState([]);
    const [offers1, setOffers1] = useState([]);
    const [offers2, setOffers2] = useState([]);
    const [offers3, setOffers3] = useState([]);
    const [offers4, setOffers4] = useState([]);
    const [offers5, setOffers5] = useState([]);
    const [offers6, setOffers6] = useState([]);
    const [offers7, setOffers7] = useState([]);

    const slides1 = [
        "https://static.my-shop.ru/object/banner/1/3327_984x163.png",
        "http://static.my-shop.ru/object/banner/1/3241_984x163.png",
        "https://static.my-shop.ru/object/banner/1/2766_984x163.png",
        "https://static.my-shop.ru/object/banner/1/3197_984x163.png",
        "https://static.my-shop.ru/object/banner/1/3245_984x163.png",
    ];
    const slides2 = [
        "https://static.my-shop.ru/object/banner/1/3249_984x163.png",
        "https://static.my-shop.ru/object/banner/1/3250_984x163.png", 
        "https://static.my-shop.ru/object/banner/1/3252_984x163.png",
        "https://static.my-shop.ru/object/banner/1/3206_984x163.png", 
    ];

    const random = Math.floor(Math.random() * Math.floor(1000));

    useEffect(() => {
        fetchingData(setOffers, `topCategoryId_like=^5$&_start=${random}&_end=${random + 20}&_limit=20`);
        fetchingData(setOffers1, `topCategoryId_like=^10$&_start=${random}&_end=${random + 20}&_limit=20`);
        fetchingData(setOffers2, `topCategoryId_like=^15$&_start=${random}&_end=${random + 20}&_limit=20`);
        fetchingData(setOffers3, `topCategoryId_like=^7$&_start=${random}&_end=${random + 20}&_limit=20`);
        fetchingData(setOffers4, `topCategoryId_like=^15241$&_start=${random}&_end=${random + 20}&_limit=20`);
        fetchingData(setOffers5, `topCategoryId_like=^17269$&_start=${random}&_end=${random + 20}&_limit=20`);
        fetchingData(setOffers6, `topCategoryId_like=^8$&_start=${random}&_end=${random + 20}&_limit=20`);
        fetchingData(setOffers7, `topCategoryId_like=^5$&_start=${random}&_end=${random + 20}&_limit=20`);
    }, []);

    const fetchingData = async (setOffers, link) => {
        const response = await fetch(`http://localhost:8000/offers?${link}`);
        const data = await response.json();
        setOffers(data);
    };

    return (
        <>
            <Slider slides={slides1} />
            <ProductSlider translateX={600} offers={offers} title="Игрушки и детское творчество" />
            <ProductSlider translateX={600} offers={offers1} title="Всё для дома" />
            <ProductSlider translateX={600} offers={offers2} title="Творчество и рукоделие" />
            <Slider slides={slides2} />
            <ProductSlider translateX={600} offers={offers3} title="Сувениры" />
            <ProductSlider translateX={600} offers={offers4} title="Аксессуары" />
            <ProductSlider translateX={600} offers={offers5} title="Товары для красоты и здоровья" />
            <ProductSlider translateX={600} offers={offers6} title="Товары для дачи и сада" />
            <ProductSlider translateX={600} offers={offers7} title="Настольные игры" />
        </>
    );
};

export default Home;

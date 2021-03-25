import React, { useState, useEffect } from "react";
import classes from "./Product.module.scss";

import DeliveryDate from "./DeliveryDate/DeliveryDate";
import AddToCart from "./AddToCart/AddToCart";
import Loading from "./Loading/Loading";
import Tabs from "./Info/Info";
import Socials from "./Socials/Socials";
import Slider from "./Slider/Slider";
import Description from "./Description/Description";
import ProductSlider from "../../ProductSlider/ProductSlider";

const Product = ({ match }) => {
    const [product, setProduct] = useState([]);
    const [productAnalog, setProductAnalog] = useState([]);

    const fetchProduct = async () => {
        const response = await fetch(`http://localhost:8000/offers?data.id=${match.params.id}`);
        const data = await response.json();
        setProduct(data);
    };
    
    useEffect(() => {
        setProduct([]) //Обновить состояние при переходе между товарами
        fetchProduct();
    }, [match]);

    const fetchProductAnalog = async () => {
        if (product.length > 0) {
            const random = Math.floor(Math.random() * Math.floor(1000));
            const response = await fetch(`http://localhost:8000/offers?topCategoryId_like=^${product[0].topCategoryId[0]}$&_start=${random}&_end=${random + 20}&_limit=20`);
            const data = await response.json();
            setProductAnalog(data);
        }
    };

    useEffect(() => {
        fetchProductAnalog();
    }, [product]);

    const showProduct = () => {
        if (product.length > 0) {
            return (
                <>
                    <div className={classes.body}>
                        <h1>{product[0].name}</h1>
                        <div className={classes.grid}>
                            <Slider product={product} />
                            <div className={classes.price}>
                                <span>{product[0].price}</span> <span>₽</span>
                            </div>
                            <AddToCart product={product} />
                            <DeliveryDate product={product} />
                            <Tabs product={product} />
                            <Socials />
                        </div>
                        <Description product={product[0]} />
                    </div>
                    <div className={classes.productAnalog}>
                        <ProductSlider translateX={600} offers={productAnalog} title="Вас может заинтересовать" />
                    </div>
                </>
            );
        } else {
            return <Loading />;
        }
    };
    return showProduct();
};

export default Product;

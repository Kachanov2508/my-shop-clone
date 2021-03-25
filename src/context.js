import React, { useState, createContext } from "react";


// Categories state
export const CategoriesContext = createContext();

export const CategoriesProvider = (props) => {
    const [showCategories, setShowCategories] = useState();

    return (
       <CategoriesContext.Provider value={[showCategories, setShowCategories]}>
           {props.children}
       </CategoriesContext.Provider> 
    )
}

// Cart state
export const CartContext = createContext();

export const CartProvider = (props) => {
    const [product, setProduct] = useState([]);

    return (
        <CartContext.Provider value={[product, setProduct]}>
            {props.children}
        </CartContext.Provider>
    )
};

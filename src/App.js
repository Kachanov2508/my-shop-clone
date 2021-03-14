import { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Categories from "./Components/categories/Categories";
import Home from "./Components/pages/Home";
import "./styles.css";

import ShowCategories from "./context";
import Header from "./Components/Header/Header";
import Footer from "./Components/footer/Footer";
import Product from "./Components/pages/Product/Product";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";

export default function App() {
    const [showCategories, setShowCategories] = useState(false);

    return (
        <BrowserRouter>
            <div className="App">
                <div className="bcg-body"></div>
                <ShowCategories.Provider value={{ setShowCategories }}>
                    <ScrollToTop />
                    <Header />
                    <Route path="/" exact render={() => <Home />} />
                    {showCategories ? <Categories /> : null}
                    <Route path="/product/:id" component={Product} />
                    <Footer />
                </ShowCategories.Provider>
            </div>
        </BrowserRouter>
    );
}

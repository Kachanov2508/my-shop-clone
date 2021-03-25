import { useContext  } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Categories from "./Components/categories/Categories";
import Home from "./Components/pages/Home";
import "./styles.css";

import { CategoriesContext, CategoriesProvider, CartProvider } from "./context";
import Header from "./Components/Header/Header";
import Footer from "./Components/footer/Footer";
import Product from "./Components/pages/Product/Product";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";
import Basket from "./Components/pages/Basket/Basket";

export default function App() {
    const [showCategories, setShowCategories] = useContext(CategoriesContext)

    return (
        <BrowserRouter>
            <div className="App">
                <div className="bcg-body"></div>
                    <CartProvider>
                        <ScrollToTop />
                        <Header />

                        {showCategories ? <Categories /> : null}

                        <Switch>
                            <Route path="/" exact component={Home} />
                            <Route path="/product/:id" component={Product} />
                            <Route path="/basket" component={Basket} />
                        </Switch>

                        <Footer />
                    </CartProvider>
            </div>
        </BrowserRouter>
    );
}

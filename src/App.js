import { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Categories from "./Components/categories/Categories";
import Home from "./Components/pages/Home";
import "./styles.css";

import ShowCategories from './context';
import Header from "./Components/Header/Header";

export default function App() {

  const [showCategories, setShowCategories] = useState(false);

  return (
    <BrowserRouter>
      <div className="App">
        <ShowCategories.Provider value={{setShowCategories}}>
          <Header />
          <Route exact path="/" render={() => <Home />} />
          {showCategories ? <Categories /> : null}
        </ShowCategories.Provider>
      </div>
    </BrowserRouter>
  );
}
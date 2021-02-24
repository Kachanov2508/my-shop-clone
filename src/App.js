import { BrowserRouter, Route } from "react-router-dom";
import Catalogue from "./Components/pages/Catalogue";
import Home from "./Components/pages/Home";
import "./styles.css";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/" render={() => <Home />} />
        <Route exact path="/category" render={() => <Catalogue />} />
      </div>
    </BrowserRouter>
  );
}
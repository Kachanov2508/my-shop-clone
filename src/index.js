import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { CategoriesProvider } from "./context";

const rootElement = document.getElementById("root");
ReactDOM.render(
    <React.StrictMode>
        <CategoriesProvider>
            <App />
        </CategoriesProvider>
    </React.StrictMode>,
    rootElement
);

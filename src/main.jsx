import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inventory from "./Inventory";

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Inventory from "./Inventory";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/inventory" element={<Inventory />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

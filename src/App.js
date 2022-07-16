import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
export default function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route exect path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
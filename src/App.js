import React from "react";
import { BrowserRouter } from "react-router-dom";
import Home from "./screens/home/index";

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Home />
      </div>
    </BrowserRouter>
  );
}

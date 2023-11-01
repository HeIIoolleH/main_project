import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function MainNavigator() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>Home</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default MainNavigator;

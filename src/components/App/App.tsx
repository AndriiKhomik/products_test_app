import React from "react";
import { Route, Routes } from "react-router-dom";
import Products from "../../pages/Products";
import Reviews from "../../pages/Reviews";
import SharedLayout from "../SharedLayout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Products />} />
          <Route path="/reviews" element={<Reviews />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

import React from "react";
import { Routes, Route } from "react-router-dom";
import FullScreenWrapper from "./components/wrapper/FullScreenWrapper";
import Header from "./pages/Header/Header";
import CartPage from "./pages/CartPage/CartPage";
import FavouritesPage from "./pages/FavouritesPage/FavouritesPage";
import BuyProductsPage from "./pages/BuyProductsFromCartPage/BuyProductsPage";
import MainSection from "./pages/MainPage/MainSection";
import NoPage from "./pages/NoPage/NoPage";

function App() {
  return (
    <>
      <FullScreenWrapper>
        <Header />
        <Routes>
          <Route path="/" element={<MainSection />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/cart/action" element={<BuyProductsPage />} />
          <Route path="/favourites" element={<FavouritesPage />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </FullScreenWrapper>
    </>
  );
}

export default App;

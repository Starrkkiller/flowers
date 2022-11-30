import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProductCard } from "./components/shared/ProductCard/ProductCard";
import { Catalog } from "./components/shared/Catalog/Catalog";
import { Footer } from "./components/shared/Footer/Footer";
import { Header } from "./components/shared/Header/Header";
import { useState } from "react";
import { Button } from "./components/common/Button/Button";

export const App = () => {
  const PHONE_NUMBER = "8-800-000-00-00";
  return (
    <>
      <BrowserRouter>
        <Header logo='Logo' shopTitle='Название магазина' phoneNumber={PHONE_NUMBER}/>
        <Routes>
          <Route path="/" element={<Catalog/>}/>
          <Route path="/card" element={<ProductCard/>}/>
        </Routes>

        <Footer phoneNumber={PHONE_NUMBER} social='vk.com'/>
      </BrowserRouter>
    </>
)};
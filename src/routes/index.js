import React from "react";
import { Routes, Route } from "react-router-dom";
import BlankLayouts from "../layouts/BlankLayouts";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import DetailPage from "../pages/DetailPage";
import NotFoundPage from "../pages/NotFoundPage";
const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="movie/:id" element={<DetailPage />} />
      </Route>
      <Route element={<BlankLayouts />}>
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default Router;

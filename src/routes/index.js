import * as React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import BlankLayout from "../layouts/BlankLayout";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import MovieDiscovery from "../pages/MovieDiscovery";
import SearchPage from "../pages/SearchPage.js";
import TVDiscovery from "../pages/TVDiscovery";
import AuthRequire from "./AuthRequire";

function Router() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <AuthRequire>
            <MainLayout />
          </AuthRequire>
        }
      >
        <Route index element={<HomePage />} />
        <Route path="movie" element={<MovieDiscovery />} />
        <Route path="tv" element={<TVDiscovery />} />
        <Route path="search" element={<SearchPage />} />
      </Route>

      <Route element={<BlankLayout />}>
        <Route path="/login" element={<LoginPage />} />
      </Route>
    </Routes>
  );
}

export default Router;

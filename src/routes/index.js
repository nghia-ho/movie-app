import React from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import BlankLayout from "../layouts/BlankLayout";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/HomePage";
import DetailPage from "../pages/DetailPage";
import NotFoundPage from "../pages/NotFoundPage";
import LoginForm from "../components/LoginForm";
import { useAuth } from "../contexts/AuthContext";
import FavoritePage from "../pages/FavoritePage";
const Router = () => {
  let location = useLocation();

  function RequireAuth({ children }) {
    let auth = useAuth();
    if (!auth.user) {
      return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;
  }
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/movie/:id" element={<DetailPage />} />
          <Route path="/login" element={<LoginForm />} />
        </Route>
        <Route element={<BlankLayout />}>
          <Route path="*" element={<NotFoundPage />} />
          <Route
            path="/favorite"
            element={
              <RequireAuth>
                <FavoritePage />
              </RequireAuth>
            }
          />
        </Route>
      </Routes>
    </>
  );
};

export default Router;

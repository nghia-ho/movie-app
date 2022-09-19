import { FavoriteBorder } from "@mui/icons-material";
import React, { useState, useContext, createContext, useEffect } from "react";

const AuthContextType = {
  user: "",
  signin: null,
  signout: null,
};
const AuthContext = createContext(AuthContextType);

export function AuthProvider({ children }) {
  let [user, setUser] = useState("");
  let signin = (newUser) => {
    setUser(newUser);
  };
  let signout = () => {
    setUser(null);
  };
  const [favorite, setFavorite] = useState();
  const addFavoriteList = (movies) => {
    const myFavoriteList = [...(favorite || []), movies];
    setFavorite(myFavoriteList);
    saveFmovie(myFavoriteList);
  };
  const saveFmovie = (items) => {
    localStorage.setItem("favorite", JSON.stringify(items));
  };
  useEffect(() => {
    const movieFav = JSON.parse(localStorage.getItem("favorite"));
    setFavorite(movieFav);
  }, []);

  let value = { user, signin, signout, addFavoriteList, favorite };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}

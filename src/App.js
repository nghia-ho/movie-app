import React from "react";
import Router from "./routes/index";
import { BrowserRouter } from "react-router-dom";
import ThemeProvider from "./contexts/ThemeProvider";
import { AuthProvider } from "./contexts/AuthContext";

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ThemeProvider>
          <Router />
        </ThemeProvider>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;

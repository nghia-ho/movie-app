import React from "react";
import Router from "./routes/index";
import { BrowserRouter } from "react-router-dom";
import ThemeProvider from "./contexts/ThemeProvider";

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <Router />
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;

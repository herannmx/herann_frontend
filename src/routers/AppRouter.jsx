import React from "react";
import { DataProvider } from "../context/data.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";

const AppRouter = () => {
  return (
    <Router>
      <DataProvider>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </DataProvider>
    </Router>
  );
};

export default AppRouter;

import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import PageDashboard from "./pages/PageDashboard/PageDashboard";
import PageProject from "./pages/PageProject/PageProject";
// import Header from "./components/Header/Header";
import ActiveLastBreadcrumb from "./components/Header/Header";

function App() {
  return (
    <div>
      <ActiveLastBreadcrumb />
      <Routes>
        <Route path="/" element={<PageDashboard />} />
        <Route path="/project" element={<PageProject />} />
      </Routes>
    </div>
  );
}

export default App;

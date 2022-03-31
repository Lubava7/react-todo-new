import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import PageDashboard from "./pages/PageDashboard/PageDashboard";
import PageProject from "./pages/PageProject/PageProject";
// import Header from "./components/Header/Header";
import ActiveLastBreadcrumb from "./components/Header/Header";

function App() {
  return (
    <div className="all-div">
      {/* <div className="left-div">
        <ActiveLastBreadcrumb />
        <Routes>
          <Route path="/" element={<PageDashboard />} />
          <Route path="/project" element={<PageProject />} />
        </Routes>
      </div> */}
      <div className="right-div">
        <ActiveLastBreadcrumb />
        <Routes>
          <Route path="/" element={<PageDashboard />} />
          <Route path="/project" element={<PageProject />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

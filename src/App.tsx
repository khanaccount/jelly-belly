import React from "react";
import { Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { Beans } from "./pages/Beans";
import { Facts } from "./pages/Facts";
import { Recipes } from "./pages/Recipes";
import { Combinations } from "./pages/Combinations";
import { History } from "./pages/History";

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route index path="/beans" element={<Beans />} />
        <Route index path="/facts" element={<Facts />} />
        <Route index path="/recipes" element={<Recipes />} />
        <Route index path="/combinations" element={<Combinations />} />
        <Route index path="/history" element={<History />} />
      </Routes>
    </>
  );
};

export default App;

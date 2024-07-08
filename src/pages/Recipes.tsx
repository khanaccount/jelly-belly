import React from "react";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { RecipesInfo } from "../components/RecipesInfo";

export const Recipes: React.FC = () => {
  return (
    <>
      <Header />
      <main className="container">
        <RecipesInfo />
      </main>
      <Footer />
    </>
  );
};

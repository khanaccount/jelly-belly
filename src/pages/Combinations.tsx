import React from "react";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { CombinationsInfo } from "../components/CombinationsInfo";

export const Combinations: React.FC = () => {
  return (
    <>
      <Header />
      <main className="container">
        <CombinationsInfo />
      </main>
      <Footer />
    </>
  );
};

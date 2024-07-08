import React from "react";

import { Header } from "../components/Header";

import { Footer } from "../components/Footer";
import { FactsInfo } from "../components/FactsInfo";

export const Facts: React.FC = () => {
  return (
    <>
      <Header />
      <main className="container">
        <FactsInfo />
      </main>
      <Footer />
    </>
  );
};

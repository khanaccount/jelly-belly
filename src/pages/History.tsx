import React from "react";

import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { HistoryInfo } from "../components/HistoryInfo";

export const History: React.FC = () => {
  return (
    <>
      <Header />
      <main className="container">
        <HistoryInfo />
      </main>
      <Footer />
    </>
  );
};

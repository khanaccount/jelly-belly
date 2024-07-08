import React from "react";

import { Header } from "../components/Header";

import { Footer } from "../components/Footer";
import { BeansInfo } from "../components/BeansInfo";

export const Beans: React.FC = () => {
  return (
    <>
      <Header />
      <main className="container">
        <BeansInfo />
      </main>
      <Footer />
    </>
  );
};

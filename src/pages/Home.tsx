import React from "react";

import { Header } from "../components/Header";
import { Section } from "../components/Section";
import { Footer } from "../components/Footer";

export const Home: React.FC = () => {
  return (
    <>
      <Header />
      <main className="container">
        <Section />
      </main>
      <Footer />
    </>
  );
};

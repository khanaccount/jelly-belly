import React from "react";
import s from "./index.module.scss";

export const Section: React.FC = () => {
  return (
    <section className={s.section}>
      <h1>
        Welcome to <span>Beans Info</span>!
      </h1>
      <p>
        Discover the world of beans with our comprehensive database. Here you can find detailed
        information about various types of beans, their characteristics, and uses. Whether you are a
        culinary enthusiast or simply curious about beans, our platform provides you with the
        knowledge you need.
      </p>
      <p>
        Start exploring our collection and learn more about the diverse types of beans available
        around the world. Click on any bean to get more information, or use the search function to
        find specific beans you are interested in.
      </p>
      <p>Enjoy your journey through the fascinating world of beans!</p>
    </section>
  );
};

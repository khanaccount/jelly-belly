import React from "react";
import { Link } from "react-router-dom";
import s from "./index.module.scss";
import { Logo } from "./Svg/logo";

export const Header: React.FC = () => {
  return (
    <header className={s.headerBg}>
      <div className="container">
        <div className={s.header}>
          <div className={s.logo}>
            <Link to="/">
              <Logo />
            </Link>
          </div>

          <div className={s.pageLists}>
            <Link to="/beans">Beans</Link>
            <Link to="/facts">Facts</Link>
            <Link to="/recipes">Recipes</Link>
            <Link to="/combinations">Combinations</Link>
            <Link to="/history">History</Link>
          </div>
        </div>
      </div>
    </header>
  );
};

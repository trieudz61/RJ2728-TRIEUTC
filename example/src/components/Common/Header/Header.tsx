import React from "react";
import Style from "./Header.module.css";
interface IProps {}

const Header: React.FC<IProps> = (Props) => {
  return (
    <div className={`${Style.header}`}>
      <header className={`${Style.header__top}`}>
        <h1>The Pulpit Rock</h1>
      </header>
    </div>
  );
};
export default Header;

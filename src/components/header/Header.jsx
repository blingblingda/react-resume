import React from "react";
import HeaderNav from "./HeaderNav";
import HeaderIntro from "./HeaderIntro";

function Header() {
  return (
    <header>
      <div className="container">
        <HeaderNav />
        <HeaderIntro />
      </div>
    </header>
  );
}

export default Header;

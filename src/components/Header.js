import React from "react";
import img from "../images/troll-face2.png";

function Header() {
  return (
    <header>
      <img src={img} className="header--image" alt="troll-face" />
      <h1 className="header--title">Meme Generator</h1>
    </header>
  );
}

export default Header;

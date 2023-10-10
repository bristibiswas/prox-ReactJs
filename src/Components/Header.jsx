import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CgMenu } from "react-icons/cg";
import logo from "../assets/Images/logo.png";
import "../styles/header.css";

const Header = () => {
  //   const redirectPage  = (name) =>{
  // history.push(`/${name}`)
  //   }

  // const [navButton, setNavButton] = useState(false);
  const [buttonIcon, setButtonIcon] = useState(false);

  return (
    <>
      <header className="header">
        <a href="/" className="logo">
          <img src={logo} alt="" />
        </a>
        <nav>
          <ul className={buttonIcon ? "nav-list mobile-list" : "nav-list"}>
            <li>
              <Link to="/" onClick={() => setButtonIcon(!buttonIcon)} >Home</Link>
            </li>
            <li>
              <Link to="/service" onClick={() => setButtonIcon(!buttonIcon)} >Service</Link>
            </li>
            <li>
              <Link to="/about" onClick={() => setButtonIcon(!buttonIcon)} >About</Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => setButtonIcon(!buttonIcon)} >Contact</Link>
            </li>
          </ul>
        </nav>

        <div
          className="nav-button"
          onClick={() => setButtonIcon(!buttonIcon)}
        >
          <CgMenu className="nav-icon" />
        </div>
      </header>
    </>
  );
};

export default Header;

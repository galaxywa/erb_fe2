import React from "react";
import logo from "../images/logo.svg";
import PageLinks from "./PageLinks";
import IconLinks from "./IconLinks";
import { useState } from "react";
function Nav() {
  const [isToggled, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!isToggled);
  };
  return (
    <nav className='navbar'>
      <div className='nav-logo'>
        <a href='#home'>
          <img src={logo} className='logo-link' alt='logo' />
        </a>
      </div>
      <div className='nav-links'>
        <PageLinks parentClass='nav-list' itemClass='nav-link' id='nav-list' />
      </div>
      <div className='nav-icons'>
        <IconLinks parentClass='nav-icons-list' itemClass='nav-icon' />
      </div>
      <div className='nav-mobile'>
        <button
          type='button'
          className='nav-mobile-toggle'
          id='nav-mobile-toggle'
          onClick={handleToggle}
        >
          <i className='fa-solid fa-bars'></i>
        </button>
        <PageLinks
          parentClass={isToggled ? "mobile-nav-list active" : "mobile-nav-list"}
          itemClass='mobile-nav-link'
          id='mobile-nav-list'
        />
      </div>
    </nav>
  );
}

export default Nav;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./navbar.scss";
import { navItems } from "./NavItems";
import Button from "./Button";
import Dropdown from "./Dropdown";

function Navbar() {
  const [dropdown, setDropdown] = useState(false);
  const [clicked, setClicked] = useState(false); 

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <>
      <nav className="navbar">
       <div className="navbar-container">

       <Link to="http://localhost:5173/" className="navbar-logo" >
          <img src={logo} alt="" />
        </Link>
        
        <div className="menu-icons" onClick={handleClick}>
          <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>

        <ul className={clicked ? "nav-menu active" : "nav-menu"}>
          {navItems.map((item) => {
            if (item.title === "Services") {
              return (
                <li
                  key={item.id}
                  className={item.cName}
                  onMouseEnter={() => setDropdown(true)}
                  onMouseLeave={() => setDropdown(false)}
                >
                  <Link to={item.path}>{item.title}</Link>
                  {dropdown && <Dropdown />}
                </li>
              );
            }
            return (
              <li key={item.id} className={item.cName}>
                <Link className='nav-links' to={item.path}>{item.title}</Link>
              </li>
            );
          })}
          <li>
          <Button />
          </li>
        </ul>
      
        </div>
      </nav>
    </>
  );
}

export default Navbar;

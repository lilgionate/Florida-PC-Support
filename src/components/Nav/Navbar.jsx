import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./navbar.scss";
import { navItems } from "./NavItems";
import Button from "./Button";
import ServicesDropdown from "./ServicesDropdown";
import ProductsDropdown from "./ProductsDropdown";

function Navbar() {
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [productsDropdown, setProductsDropdown] = useState(false);
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  const handleServicesHover = () => {
    setServicesDropdown(true);
    setProductsDropdown(false);
  };

  const handleProductsHover = () => {
    setProductsDropdown(true);
    setServicesDropdown(false);
  };

  const handleMouseLeave = () => {
    setServicesDropdown(false);
    setProductsDropdown(false);
  };


  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="http://localhost:5173/" className="navbar-logo">
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
                    onMouseEnter={handleServicesHover}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Link to={item.path}>{item.title}</Link>
                    {servicesDropdown && <ServicesDropdown />}
                  </li>
                );
              } else if (item.title === "Products") {
                return (
                  <li
                    key={item.id}
                    className={item.cName}
                    onMouseEnter={handleProductsHover}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Link to={item.path}>{item.title}</Link>
                    {productsDropdown && <ProductsDropdown />}
                  </li>
                );
              }
              return (
                <li key={item.id} className={item.cName}>
                  <Link className="nav-links" to={item.path}>
                    {item.title}
                  </Link>
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
import React, { useState } from "react";
import { productsDropdown } from "./NavItems";
import { Link } from "react-router-dom";
import "./Dropdown.css";

function ProductsDropdown() {
  const [dropdown, setDropdown] = useState(false);

  return (
    <>
      <ul
        className={dropdown ? "products-submenu clicked" : "products-submenu"}
        onClick={() => setDropdown(!dropdown)}
      >
        {productsDropdown.map((item) => {
          return (
            <li key={item.id}>
              <Link to={item.path} className={item.cName} onClick={() => setDropdown(false)}>
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default ProductsDropdown;
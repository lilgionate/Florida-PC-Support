import React, { Component } from "react";
import "./navbar.scss";
import MenuItems from "./MenuItems";
import { Link } from "react-router-dom";

class Navbar extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <nav className="navbarItems">
        <h1 className="navbar-logo">
          <a href="http://localhost:5173/">Florida PC Support</a>
        </h1>

        <div className="menu-icons" onClick={this.handleClick}>
          <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>

        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => (
            <li key={index}>
              <Link className={item.cName} to={item.url}>
                {item.title}
              </Link>
              {item.submenu && (
                <ul className="dropdown-menu" style={{ display: this.state.clicked ? "block" : "none" }}>
                  {item.submenu.map((subItem, subIndex) => (
                    <li key={subIndex}>
                      <Link to={subItem.url}>{subItem.title}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
          <button>Shop Now</button>
        </ul>
      </nav>
    );
  }
}

export default Navbar;

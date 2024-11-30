import React, { useContext, useRef } from "react";
import "./Navbar.css";
import { useState } from "react";

import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import nav_dropdown from "../Assets/drop-drop-icon.webp";

const Navbar = () => {
  const [highlight, setHighlight] = useState("");
  const { getTotalCartItems } = useContext(ShopContext);
  const menuRef = useRef();

  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle("nav-menu-visible");
    e.target.classList.toggle("open");
  };

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>SHOPPER</p>
      </div>
      <img
        className="nav-dropdown"
        onClick={dropdown_toggle}
        src={nav_dropdown}
        alt=""
      />
      <ul ref={menuRef} className="nav-menu">
        <li
          onMouseOver={() => setHighlight("shop")}
          onMouseOut={() => setHighlight("")}
        >
          <Link style={{ textDecoration: "none" }} to="/">
            Shop
          </Link>
          <hr className={highlight === "shop" ? "visible" : "hidden"} />
        </li>
        <li
          onMouseOver={() => setHighlight("men")}
          onMouseOut={() => setHighlight("")}
        >
          <Link style={{ textDecoration: "none" }} to="/men">
            Men
          </Link>{" "}
          <hr className={highlight === "men" ? "visible" : "hidden"} />
        </li>
        <li
          onMouseOver={() => setHighlight("women")}
          onMouseOut={() => setHighlight("")}
        >
          <Link style={{ textDecoration: "none" }} to="/women">
            Women
          </Link>{" "}
          <hr className={highlight === "women" ? "visible" : "hidden"} />
        </li>
        <li
          onMouseOver={() => setHighlight("kids")}
          onMouseOut={() => setHighlight("")}
        >
          <Link style={{ textDecoration: "none" }} to="/kids">
            Kids
          </Link>
          <hr className={highlight === "kids" ? "visible" : "hidden"} />
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link to="login">
          <button>Login</button>
        </Link>
        <Link to="cart">
          <img src={cart_icon} alt="" />
        </Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;

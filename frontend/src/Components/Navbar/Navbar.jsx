import React, { useContext } from "react";
import "./Navbar.css";
import { useState } from "react";

import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

const Navbar = () => {
  const [highlight, setHighlight] = useState("");

  const { getTotalCartItems } = useContext(ShopContext);

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>SHOPPER</p>
      </div>
      <ul className="nav-menu">
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

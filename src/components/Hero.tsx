// import React from "react";
import "./Hero.css";
import image1 from "../assets/images/image1.png";
import menuPng from "../assets/images/menu.png";
import cartPng from "../assets/images/cart.png";
import logoPng from "../assets/images/logo.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <>
      <div className="header">
        <div className="container">
          <div className="navbar">
            <div className="logo">
              <img src={logoPng} width="125px" />
            </div>
            <nav>
              <ul id="MenuItems">
                <li>
                  <a href="">Home</a>
                </li>
                <li>
                  <a href="">Product</a>
                </li>
                <li>
                  <a href="">About</a>
                </li>
                <li>
                  <a href="">Contact</a>
                </li>
                <li>
                  <a href="">Account</a>
                </li>
              </ul>
            </nav>
            <img
              src={cartPng}
              width="30px"
              height="30px"
              className="cart-png"
            />
            <img src={menuPng} className="menu-icon" /*onClick={menutoggle}*/ />
          </div>
          <div className="row">
            <div className="col-2">
              <h1>
                Give Your Workout <br />A New Style!
              </h1>
              <p>
                Success isn't about greatness. It's about consistency.
                Consistent
                <br />
                hard work gains success. Greatness will come.
              </p>
              <Link to="/login" className="btn">
                Explore Now &#8594;
              </Link>
            </div>
            <div className="col-2">
              <img src={image1} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;

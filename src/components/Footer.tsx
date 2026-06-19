// import React from "react";
import "./Hero.css";
import playStorePng from "../assets/images/play-store.png";
import appStorePng from "../assets/images/app-store.png";
import logoWhitePng from "../assets/images/logo-white.png";

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="footer-col-1">
              <h3>Download Our App</h3>
              <p>Download App for Android and ios mobile phone.</p>
              <div className="app-logo">
                <img src={playStorePng} />
                <img src={appStorePng} />
              </div>
            </div>
            <div className="footer-col-2">
              <img src={logoWhitePng} />
              <p>
                Our Purpose Is To Sustainably Make The Pleasure and Benefits of
                Sports Accessible to the Many.
              </p>
            </div>
            <div className="footer-col-3">
              <h3>Useful Links</h3>
              <ul>
                <li>Coupons</li>
                <li>Blog Post</li>
                <li>Return Policy</li>
                <li>Join Affiliate</li>
              </ul>
            </div>
            <div className="footer-col-4">
              <h3>Follow us</h3>
              <ul>
                <li>Facebook</li>
                <li>Twitter</li>
                <li>Instagram</li>
                <li>Youtube</li>
              </ul>
            </div>
          </div>
          <hr />
          <p className="copyright">Copyright 2020 - Easy tutorials</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

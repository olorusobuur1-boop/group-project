// import React from 'react'
import StarIcon from "@mui/icons-material/Star";
import "./Hero.css";
import category1 from "../assets/images/category-1.jpg";
import category2 from "../assets/images/category-2.jpg";
import category3 from "../assets/images/category-3.jpg";
import product1 from "../assets/images/product-1.jpg";
import product2 from "../assets/images/product-2.jpg";
import product3 from "../assets/images/product-3.jpg";

const Products = () => {
  return (
    <div>
      <div className="categories">
        <div className="small-container">
          <div className="row">
            <div className="col-3">
              <img src={category1} alt="" />
            </div>
            <div className="col-3">
              <img src={category2} alt="" />
            </div>
            <div className="col-3">
              <img src={category3} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="small-container">
        <h2 className="title">Featured Products</h2>
        <div className="row">
          <div className="col-4">
            <img src={product1} />
            <h4>Red Printed T-Shirt</h4>
            <div className="rating">
              <StarIcon />
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-o"></i>
            </div>
            <p>$50.00</p>
          </div>
          <div className="col-4">
            <img src={product2} />
            <h4>Red Printed T-Shirt</h4>
            <div className="rating">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-o"></i>
            </div>
            <p>$50.00</p>
          </div>
          <div className="col-4">
            <img src={product3} />
            <h4>Red Printed T-Shirt</h4>
            <div className="rating">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-o"></i>
            </div>
            <p>$50.00</p>
          </div>
          <div className="col-4">
            <img src="images/product-4.jpg" />
            <h4>Red Printed T-Shirt</h4>
            <div className="rating">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-half-o"></i>
            </div>
            <p>$50.00</p>
          </div>
        </div>
        <h2 className="title">Featured Products</h2>
        <div className="row">
          <div className="col-4">
            <img src="images/product-5.jpg" />
            <h4>Red Printed T-Shirt</h4>
            <div className="rating">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-o"></i>
            </div>
            <p>$50.00</p>
          </div>
          <div className="col-4">
            <img src="images/product-6.jpg" />
            <h4>Red Printed T-Shirt</h4>
            <div className="rating">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-o"></i>
            </div>
            <p>$50.00</p>
          </div>
          <div className="col-4">
            <img src="images/product-7.jpg" />
            <h4>Red Printed T-Shirt</h4>
            <div className="rating">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-o"></i>
            </div>
            <p>$50.00</p>
          </div>
          <div className="col-4">
            <img src="images/product-8.jpg" />
            <h4>Red Printed T-Shirt</h4>
            <div className="rating">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-half-o"></i>
            </div>
            <p>$50.00</p>
          </div>

          <div className="col-4">
            <img src="images/product-9.jpg" />
            <h4>Red Printed T-Shirt</h4>
            <div className="rating">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-o"></i>
            </div>
            <p>$50.00</p>
          </div>
          <div className="col-4">
            <img src="images/product-10.jpg" />
            <h4>Red Printed T-Shirt</h4>
            <div className="rating">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-o"></i>
            </div>
            <p>$50.00</p>
          </div>
          <div className="col-4">
            <img src="images/product-11.jpg" />
            <h4>Red Printed T-Shirt</h4>
            <div className="rating">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-o"></i>
            </div>
            <p>$50.00</p>
          </div>
          <div className="col-4">
            <img src="images/product-12.jpg" />
            <h4>Red Printed T-Shirt</h4>
            <div className="rating">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-half-o"></i>
            </div>
            <p>$50.00</p>
          </div>
        </div>
      </div>

      <div className="offer">
        <div className="small-container">
          <div className="row">
            <div className="col-2">
              <img src="images/exclusive.png" className="offer-img" />
            </div>
            <div className="col-2">
              <p>Exclusively Avalaible on Redstore</p>
              <h1>Smart Band 4</h1>
              <small>
                The Mi Smart Band 4 features a 39.9% larger (than Mi Band 3)
                AMOLED color full-touch display with adjustable brightness, so
                everything is as clear as it can be.
              </small>
              <br />
              <a href="" className="btn">
                Buy Now &#8594;
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;

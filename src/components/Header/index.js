import React from "react";
import "./styles.css";
import { Link } from "react-scroll";
function Header() {
  return (
    <>
      <div className="mb-nav">
       
          <Link className = "mb-nav-item"activeClass="mb-active"  to="home" offset={-64} spy={true}>
            <i className="bx bxs-home"></i>
          </Link>
       
       
          <Link className = "mb-nav-item" activeClass="mb-active" to="about" offset={-64} spy={true}>
            <i className="bx bxs-wink-smile"></i>
          </Link>
        
       
          <Link className = "mb-nav-item" activeClass="mb-active" to="food-menu" offset={-64} spy={true}>
            <i className="bx bxs-food-menu"></i>
          </Link>
       
      
          <Link className = "mb-nav-item" activeClass="mb-active" to="testimonial" offset={-64} spy={true}>
            <i className="bx bxs-comment-detail"></i>
          </Link>
        
      </div>
      <div className="nav">
        <div className="menu-wrap">
          <a href="#home">
            <div className="logo">Freshfood</div>
          </a>
          <div className="menu h-xs">
            <Link
              activeClass="menu-wrap--active"
              to="home"
              offset={-64}
              spy={true}
            >
              <div className="menu-item">Home</div>
            </Link>
            <Link
              activeClass="menu-wrap--active"
              to="about"
              offset={-64}
              spy={true}
            >
              <div className="menu-item">About</div>
            </Link>
            <Link
              activeClass="menu-wrap--active"
              to="food-menu"
              offset={-64}
              spy={true}
            >
              <div className="menu-item">Menu</div>
            </Link>

            <Link
              activeClass="menu-wrap--active"
              to="testimonial"
              spy={true}
            >
              <div className="menu-item">Testimonials</div>
            </Link>
          </div>
          <div className="right-menu">
            <div className="cart-btn">
              <i className="bx bx-cart-alt"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;

import React from "react";
import "./styles.css";
import SectionFoodMenuImg from "../../assets/img/section_food_menu.jpg";
import "aos/dist/aos.css";
import {NavLink,Route} from "react-router-dom";
import ListFood from "../ListFood";
const FoodMenu = () => {
  return (
    <section
      className="align-items-center bg-img bg-img-fixed"
      id="food-menu-section"
      style={{ backgroundImage: `url(${SectionFoodMenuImg})` }}
    >
      <div className="container">
        <div className="food-menu">
          <h1>
            What will <span className="primary-color">you</span> eat today?
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
            alias aliquam eveniet, iure praesentium dicta ex dolorum inventore
            itaque minus repudiandae, odio provident? Velit architecto natus
            expedita non? Odio, dolorum.
          </p>
          <div className="food-category">
            <div data-aos="zoom-in">
              <NavLink exact activeClassName="active" to = "/">All food</NavLink>
            </div>
            <div data-aos-delay="200" data-aos="zoom-in">
              <NavLink to = "/salad">Salad</NavLink>
            </div>
            <div data-aos-delay="400" data-aos="zoom-in">
              <NavLink to = "/meat">Meat</NavLink>
            </div>
            <div data-aos-delay="600" data-aos="zoom-in">
              <NavLink to = "/rice">Rice</NavLink>
            </div>
            <div data-aos-delay="800" data-aos="zoom-in">
              <NavLink to = "fish">Fish</NavLink>
            </div>
          </div>
         
          <Route path = "/:food__category" component = {ListFood}/>
          <Route path = "/" exact component = {ListFood}/>
          {/* <div className="food-item-wrap all">

            <div className="food-item">
              <div className="item-wrap">
                <div className="item-img">
                  <div
                    className="img-holder bg-img"
                    style={{ backgroundImage: `url(${Test})` }}
                  ></div>
                </div>
                <div className="item-info">
                  <div>
                    <h3>Lorem ipsum</h3>
                    <span>120$</span>
                  </div>
                  <div className="cart-btn">
                    <i className="bx bx-cart-alt"></i>
                  </div>
                </div>
              </div>
            </div>

            <div className="food-item">
              <div className="item-wrap bottom-up play-on-scroll">
                <div className="item-img">
                  <div
                    className="img-holder bg-img"
                    style={{ backgroundImage: `url(${Test})` }}
                  ></div>
                </div>
                <div className="item-info">
                  <div>
                    <h3>Lorem ipsum</h3>
                    <span>120$</span>
                  </div>
                  <div className="cart-btn">
                    <i className="bx bx-cart-alt"></i>
                  </div>
                </div>
              </div>
            </div>


          </div> */}
        {/*  */}
        </div>
      </div>
    </section>
  );
};
export default FoodMenu;

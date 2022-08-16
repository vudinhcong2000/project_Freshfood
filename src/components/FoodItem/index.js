import React from "react";
import "./styles.css";
const FoodItem = (props) => {
  const { data } = props;
  return (
    <>
      {data.map((item, index) => {
        return (
          <div className="food-item" key={`item_${index}`}>
            <div className="item-wrap " >
              <div className="item-img">
                <div
                  className="img-holder bg-img"
                  style={{ backgroundImage: `url(${item.imgUrl})` }}
                ></div>
              </div>
              <div className="item-info">
                <div>
                  <h3>{item.name}</h3>
                  <span>{item.price}$</span>
                </div>
                <div className="cart-btn">
                  <i className="bx bx-cart-alt"></i>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
export default FoodItem;

import React from "react";

// imports
import Avatar from "../assets/avatar-image.png";

const Card = (props) => {
  return (
    <>
      <div className="card__wrapper">
        <div className="card__top">
          <div className="card__top_wrapper">
            {/* props.image */}
            <img src={props.image} alt="card image" />
          </div>
        </div>
        <div className="card__bottom">
          <p className="card__bottom_title">
            {/* props.title */}
            {props.title}
          </p>
          <p className="card__bottom_description">
            {/* props.description */}
            {props.description}
          </p>

          <div className="card__bottom_price">
            <p className="card__bottom_price_title">
              {/* props.price */}
              {props.price}
            </p>
            <p className="card__bottom_price_time">3 days left</p>
          </div>
          <div className="card__bottom_line"></div>

          <div className="card__bottom_user">
            <div className="card__bottom_user_img">
              <img
                src={Avatar}
                alt="Avatar Image"
                className="card__bottom_user_image"
              />
            </div>
            <p className="card__bottom_user_name">
              Creation of{" "}
              <span className="card__bottom_user_name_white">Jules Wyvern</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;

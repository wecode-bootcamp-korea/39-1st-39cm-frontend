import React from "react";
import { Link } from "react-router-dom";
import "./Main.scss";

const Main = () => {
  return (
    <div className="wrapMain">
      <div className="wrapLink">
        <div className="wrapLeft">
          <Link
            to={
              "/BestProductList?limit=&offset=&sort=&color=&min_price=&max_price=&category=&brand=&product_gender=2"
            }
          >
            <img src="/images/shimdongseup/mainBest.png" alt="BestSeller_img" />
          </Link>
        </div>
        <div className="wrapRight">
          <Link
            to={
              "/BestProductList?limit=&offset=&sort=&color=&min_price=&max_price=&category=&brand=&product_gender=2"
            }
          >
            <img src="/images/shimdongseup/mainWomen.png" alt="Women_img" />
          </Link>
          <Link
            to={
              "/BestProductList?limit=&offset=&sort=&color=&min_price=&max_price=&category=&brand=&product_gender=1"
            }
          >
            <img
              className="men"
              src="/images/shimdongseup/mainMen.png"
              alt="Men_img"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Main;

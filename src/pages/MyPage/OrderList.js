import React from "react";
import "./MyPage.scss";
import { Link } from "react-router-dom";

function OrderList({ orderedItem }) {
  const { name, productId, brandName, productPrice, amount, image } =
    orderedItem;
  console.log(orderedItem);

  return (
    <>
      {orderedItem && (
        <div className="itemInfo">
          <img src={image} alt="product_img" />
          <div className="wrapItemInfo">
            <Link className="brandLink" to={`/ProductDetail/${productId}`}>
              {brandName}
            </Link>
            <Link className="itemLink" to={`/ProductDetail/${productId}`}>
              {name}
            </Link>
            <div className="singlePrice">
              {Number(productPrice).toLocaleString()} 원
            </div>
          </div>
          <div className="quantity">
            <span>{amount}</span>
          </div>
          <div className="orderPrice">
            <div>{(amount * Number(productPrice)).toLocaleString()} 원</div>
          </div>
        </div>
      )}
    </>
  );
}

export default OrderList;

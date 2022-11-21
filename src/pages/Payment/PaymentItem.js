import { Link } from "react-router-dom";
import React from "react";

const PaymentItem = ({ itemInfo }) => {
  const {
    productId,
    productName,
    productPrice,
    image_url,
    brand_name,
    basketId,
    amount,
  } = itemInfo;
  return (
    <div className="cartItems">
      <img src={image_url} alt="product_img" />
      <div className="itemInfo">
        <Link className="brandLink" to={`/ProductDetail/${productId}`}>
          {brand_name}
        </Link>
        <Link className="productLink" to={`/ProductDetail/${productId}`}>
          {productName}
        </Link>
        <span>옵션 : [사이즈]XL</span>
        <span className="price">
          {productPrice}원 / 수량 {amount}개
        </span>
      </div>
    </div>
  );
};

export default PaymentItem;

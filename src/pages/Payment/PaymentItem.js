import { Link } from "react-router-dom";
import React from "react";

const PaymentItem = ({ itemInfo }) => {
  const { productId, productName, productPrice, images, brand_name, amount } =
    itemInfo;
  return (
    <div className="cartItems">
      <img src={images} alt="product_img" />
      <div className="itemInfo">
        <Link className="brandLink" to={`/ProductDetail/${productId}`}>
          {brand_name}
        </Link>
        <Link className="productLink" to={`/ProductDetail/${productId}`}>
          {productName}
        </Link>
        <span>옵션 : [사이즈]XL</span>
        {productPrice && (
          <span className="price">
            {Number(productPrice).toLocaleString()}원 / {amount}개
          </span>
        )}
      </div>
    </div>
  );
};

export default PaymentItem;

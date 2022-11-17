import React, { useState } from "react";
import { Link } from "react-router-dom";

const CartItem = ({ itemInfo, index, deleteItem }) => {
  const { productName, productPrice, image_url, brand_name, basketId, amount } =
    itemInfo;
  const [quantity, setQuantity] = useState(amount);
  const totalPrice = productPrice * quantity;
  // const totalPrice = productPrice * amount; //백엔드 연결시 교체

  //백엔드 연결전 수량버튼제어
  const plusQuantity = () => {
    setQuantity(quantity + 1);
  };
  const subQuantity = () => {
    setQuantity(quantity - 1);
  };

  //백엔드 연결 시 수량제어 버튼 구현하기

  return (
    <div className="orderInfo">
      {/* <input className="checkBox" type="checkBox" /> */}
      <div className="itemInfo">
        <img src={image_url} alt="product_img" />
        <div className="wrapItemInfo">
          <Link className="brandLink" to="#">
            {brand_name}
          </Link>
          <Link className="itemLink" to="#">
            {productName}
          </Link>
          <div className="singlePrice">{productPrice.toLocaleString()}원</div>
          <div className="optionInfo">옵션 : [size]XL</div>
        </div>
        {/* 서버와 연결시 장바구니 삭제 api로 대체 */}
        <span onClick={deleteItem} className="material-symbols-sharp delete">
          disabled_by_default
        </span>
      </div>
      <div className="quantity">
        <button onClick={subQuantity}>-</button>
        <div>{quantity}</div>
        {/* <div>{amount}</div>백엔드 연결시 교체  */}
        <button onClick={plusQuantity}>+</button>
      </div>
      <div className="orderPrice">
        <div>{totalPrice.toLocaleString()}원</div>
        {/* <Link className="goToPayment" to="#">
              BUY NOW
            </Link> */}
      </div>
      <div className="deliveryCharge">29CM 무료배송</div>
    </div>
  );
};

export default CartItem;

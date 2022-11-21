import React, { useEffect, useState } from "react";
import "../Payment/Payment.scss";
import PaymentItem from "./PaymentItem";

const Payment = () => {
  const [cartItemList, setCartItemList] = useState();
  const [userInfo, setUserInfo] = useState();
  useEffect(() => {
    // mock data fetch
    fetch("/data/shimdongseup/cartData.json")
      .then((res) => res.json())
      .then((data) => {
        setCartItemList(data);
      });
    //   //backend API fetch
    // fetch("http://127.0.0.1:3000/cart", {
    //   method: "GET",
    //   headers: {
    //     authorization: localStorage.getItem("TOCKEN"),
    //   },
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setCartItemList(data);
    //   });

    fetch("/data/shimdongseup/userInfo.json")
      .then((res) => res.json())
      .then((data) => {
        setUserInfo(data);
      });
  }, []);

  // 총 주문 수량 계산
  const calTotalAmount = (arr) => {
    if (arr) {
      let totalAmount = 0;
      arr.forEach((obj) => {
        totalAmount += obj.amount;
      });
      return totalAmount;
    }
  };
  // 총 주문 가격 계산
  const calTotalPrice = (arr) => {
    if (arr) {
      let priceTotal = 0;
      arr.forEach((obj) => {
        priceTotal += obj.amount * obj.productPrice;
      });
      return priceTotal;
    }
  };
  const totalAmount = calTotalAmount(cartItemList);
  const totalPrice = calTotalPrice(cartItemList);

  return (
    <div className="wrapPayment">
      <div className="orderStep">
        <span>01 SHOPPING BAG</span>
        <span>02 ORDER</span>
        <span>03 ORDER CONFIRMED</span>
      </div>
      <div className="wrapCenter">
        <div className="paymentInfo">
          <div className="userInfo">
            배송 정보
            <div className="userInput">
              수령인<input value={userInfo[0].name} disabled={true}></input>
            </div>
            <div className="userInput">
              배송지
              <input value={userInfo[0].address} disabled={true}></input>
            </div>
            <div className="userInput">
              연락처
              <input className="numInput"></input>
              <div>-</div>
              <input className="numInput"></input>
              <div>-</div>
              <input className="numInput"></input>
            </div>
          </div>
          <div className="pointInfo">
            결제정보
            <div className="wrapPoint">
              <div>잔여 포인트</div>
              <span>{userInfo[0].point}Point</span>
            </div>
            <div className="wrapPoint">
              <div>결제 포인트</div>
              {cartItemList && <span>{totalPrice.toLocaleString()} Point</span>}
            </div>
            <div className="wrapPoint">
              <div>결제 후 잔여 포인트</div>
              <span>? Point</span>
            </div>
          </div>
        </div>
        <div className="wrapCartInfo">
          <div className="cartInfo">
            <div className="rightHeader">
              주문상품 정보 / 총 {totalAmount}개
            </div>
            {cartItemList &&
              cartItemList.map((obj, index) => (
                <PaymentItem itemInfo={obj} key={index} />
              ))}
            <div className="totalPrice">
              총 결제금액
              {cartItemList && (
                <div>
                  {totalPrice.toLocaleString()}
                  <span>원</span>
                </div>
              )}
            </div>
            <button>CHECKOUT</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;

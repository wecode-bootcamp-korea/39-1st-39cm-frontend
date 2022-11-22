import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Payment/Payment.scss";
import PaymentItem from "./PaymentItem";

const Payment = () => {
  const navigate = useNavigate();
  const [cartItemList, setCartItemList] = useState();
  const [userInfo, setUserInfo] = useState();
  useEffect(() => {
    //로컬 스토리지 불러오기
    const orderList = JSON.parse(localStorage.getItem("orderList"));
    setCartItemList(orderList);

    //백엔드 연결 전 유저 정보 mockdata
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

  const paymentCheckout = () => {
    if (userInfo[0].point - totalPrice >= 0) {
      if (cartItemList) {
        const deleteCartItem = cartItemList.map((obj) => {
          return obj.basketId;
        });
        const orderedItem = cartItemList.map((obj) => {
          return { productId: obj.productId, amount: obj.amount };
        });
        // console.log("delete :" + deleteCartItem);
        // console.log("order :" + orderedItem);
        //주문 완료 api 호출
        fetch("http://10.58.52.241:3000/checkout", {
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
            authorization: localStorage.getItem("TOKEN"),
          },
          body: JSON.stringify({
            orders: orderedItem,
          }),
        })
          .then((response) => {
            if (response.status !== 200) {
              throw new Error("error");
            } else {
              //결제 후 마이페이지로 이동
              alert("성공적으로 결제가 완료 되었습니다.");
              navigate("/MyPage");
            }
          })
          .catch((error) => {
            console.log("결제 요청에 실패 하였습니다.");
          });

        //장바구니 삭제 api 호출
        fetch("http://10.58.52.241:3000/cart", {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
            authorization: localStorage.getItem("TOKEN"),
          },
          body: JSON.stringify({
            basketIds: deleteCartItem,
          }),
        })
          .then((response) => {
            if (response.status !== 204) {
              throw new Error("error");
            } else {
              localStorage.setItem("orderList", "");
            }
          })
          .catch((error) => {
            console.log("장바구니 삭제에 실패하였습니다.");
          });
      }
    } else {
      alert("포인트가 부족하여 결제에 실패하였습니다.");
    }
  };

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
              수령인
              {userInfo && (
                <input value={userInfo[0].name} disabled={true}></input>
              )}
            </div>
            <div className="userInput">
              배송지
              {userInfo && (
                <input value={userInfo[0].address} disabled={true}></input>
              )}
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
              {userInfo && (
                <span>{userInfo[0].point.toLocaleString()} Point</span>
              )}
            </div>
            <div className="wrapPoint">
              <div>결제 포인트</div>
              {cartItemList && <span>{totalPrice.toLocaleString()} Point</span>}
            </div>
            <div className="wrapPoint">
              <div>결제 후 잔여 포인트</div>
              {userInfo && (
                <span>
                  {(userInfo[0].point - totalPrice).toLocaleString()} Point
                </span>
              )}
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
            <button onClick={paymentCheckout}>CHECKOUT</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;

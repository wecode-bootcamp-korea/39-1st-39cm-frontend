import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../Cart/Cart.scss";
import CartItem from "./CartItem";

const Cart = () => {
  const [cartItemList, setCartItemList] = useState();

  useEffect(() => {
    // mock data fetch
    fetch("/data/shimdongseup/cartData.json", {
      method: "GET",
    })
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
  }, []);

  // 총 주문 수량 계산
  const calTotalAmount = (arr) => {
    if (arr) {
      let totalAmount = 0;
      for (let i = 0; i < arr.length; i++) {
        totalAmount = totalAmount + arr[i].amount;
      }
      return totalAmount;
    }
  };
  // 총 주문 가격 계산
  const calTotalPrice = (arr) => {
    if (arr) {
      let priceTotal = 0;
      for (let i = 0; i < arr.length; i++) {
        const price = arr[i].amount * arr[i].productPrice;
        priceTotal = priceTotal + price;
      }
      return priceTotal;
    }
  };

  const totalAmount = calTotalAmount(cartItemList);
  const totalPrice = calTotalPrice(cartItemList);

  return (
    <div className="wrapCart">
      <div className="orderStep">
        <span>01 SHOPPING BAG</span>
        <span>02 ORDER</span>
        <span>03 ORDER CONFIRMED</span>
      </div>

      <div className="itemList">
        <div className="columnName">
          {/* <input className="checkBox" type="checkBox" /> */}
          <div className="itemInfoCol">상품 정보</div>
          <div className="quantityCol">수량</div>
          <div className="orderPriceCol">주문금액</div>
          <div className="deliveryChargeCol">배송비</div>
        </div>
        {cartItemList &&
          cartItemList.map((obj, index) => (
            <CartItem
              itemInfo={obj}
              key={index}
              index={index}
              //서버와 연결시 장바구니 삭제 api로 대체
              deleteItem={function deleteComment() {
                const deletedItem = [...cartItemList];
                deletedItem.splice(index, 1);
                setCartItemList(deletedItem);
              }}
            />
          ))}
        <div className="itemListFooter">
          <button>선택상품 삭제</button>
          <span>장바구니는 접속 종료 후 60일 동안 보관됩니다.</span>
        </div>
      </div>
      <div className="calculator">
        <div className="columnName">
          <div>총 주문금액</div>
          <div>총 배송비</div>
          <div>총 결제금액</div>
        </div>
        <div className="calculation">
          <div className="totalPrice">
            {cartItemList && (
              <div className="price">
                {totalPrice.toLocaleString()}
                <h3>원</h3>
              </div>
            )}
            <span>총 {totalAmount}개</span>
          </div>
          <div className="wrapIcon">
            <div className="material-icons icon">add_circle</div>
          </div>
          <div className="totalPrice">
            <div className="price">
              0<h3>원</h3>
            </div>
          </div>
          <div className="wrapIcon">
            <div className="material-icons icon">pause_circle_filled</div>
          </div>
          <div className="totalPrice">
            {cartItemList && (
              <div className="price">
                {totalPrice.toLocaleString()}
                <h3>원</h3>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="bottomButton">
        <Link className="continueShopping" to="#">
          CONTINUE SHOPPING
        </Link>
        <Link className="checkout" to="#">
          CHECK OUT
        </Link>
      </div>
    </div>
  );
};

export default Cart;

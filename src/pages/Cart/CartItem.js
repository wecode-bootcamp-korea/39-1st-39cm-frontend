import React from "react";
import { Link } from "react-router-dom";

const CartItem = ({ itemInfo, cartItemList, setCartItemList, deleteItem }) => {
  const {
    productId,
    productName,
    productPrice,
    image_url,
    brand_name,
    basketId,
    amount,
  } = itemInfo;

  const totalPrice = productPrice * amount;

  // 수량 제어 버튼
  const plusAmount = () => {
    // 처음 fetch 받아온 리스트에서 수량을 수정
    const changedCartList = cartItemList.map((item) => {
      if (productId === item.productId) {
        item.amount = amount + 1;
      }
      return item;
    });
    setCartItemList(changedCartList);

    // //백앤드 서버에 수량을 수정
    // fetch("http://127.0.0.1:3000/cart", {
    //   method: "PATCH",
    //   headers: {
    //     authorization: localStorage.getItem("TOCKEN"),
    //   },
    //   body: JSON.stringify({
    //     basketId: basketId,
    //     amout: amount + 1,
    //   }),
    // })
    //   .then((response) => {
    //     if (response.status !== 200) {
    //       throw new Error("error");
    //     }
    //   })
    //   .catch((error) => {
    //     alert("수량 변경에 실패하였습니다.");
    //     //서버 수량 수정 실패시 프론트단의 수량을 원레대로 돌리기
    //     const changedCartList = cartItemList.map((item) => {
    //       if (productId === item.productId) {
    //         item.amount = amount;
    //       }
    //       return item;
    //     });
    //     setCartItemList(changedCartList);
    //   });
  };

  const subAmount = () => {
    // 처음 fetch 받아온 리스트에서 수량을 수정
    const changedCartList = cartItemList.map((item) => {
      if (productId === item.productId) {
        item.amount = amount - 1;
      }
      return item;
    });
    setCartItemList(changedCartList);

    // //백앤드 연결 시
    // fetch("http://127.0.0.1:3000/cart", {
    //   method: "PATCH",
    //   headers: {
    //     authorization: localStorage.getItem("TOCKEN"),
    //   },
    //   body: JSON.stringify({
    //     basketId: basketId,
    //     amout: amount,
    //   }),
    // })
    //   .then((response) => {
    //     if (response.status !== 200) {
    //       throw new Error("error");
    //     }
    //   })
    //   .catch((error) => {
    //     alert("수량 변경에 실패하였습니다.");
    //     //서버 수량 수정 실패시 프론트단의 수량을 원레대로 돌리기
    //     const changedCartList = cartItemList.map((item) => {
    //       if (productId === item.productId) {
    //         item.amount = amount;
    //       }
    //       return item;
    //     });
    //     setCartItemList(changedCartList);
    //   });
  };

  return (
    <div className="orderInfo">
      {/* <input className="checkBox" type="checkBox" /> */}
      <div className="itemInfo">
        <img src={image_url} alt="product_img" />
        <div className="wrapItemInfo">
          <Link className="brandLink" to={`/ProdectDetail/${productId}`}>
            {brand_name}
          </Link>
          <Link className="itemLink" to={`/ProdectDetail/${productId}`}>
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
        <button onClick={subAmount}>-</button>
        <div>{amount}</div>
        <button onClick={plusAmount}>+</button>
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

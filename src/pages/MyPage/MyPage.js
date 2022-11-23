import React from "react";
import "./MyPage.scss";

const MyPage = () => {
  return (
    <div className="Mypage">
      <div className="itemList">
        <div className="columnName">
          <span className="itemInfoCol">상품 정보</span>
          <span className="quantityCol">수량</span>
          <span className="orderPriceCol">주문금액</span>
        </div>
      </div>
    </div>
  );
};

export default MyPage;

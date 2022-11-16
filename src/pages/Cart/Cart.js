import React from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <>
      <div>
        <sapn>01 SHOPPING BAG</sapn>
        <sapn>02 ORDER</sapn>
        <sapn>03 ORDER CONFIRMED</sapn>
      </div>
      <div>
        <div>
          <div>상품 정보</div>
          <div>수량</div>
          <div>주문금액</div>
          <div>배송비</div>
        </div>
        <div>
          <div>
            <Link to="#">어나더오피스</Link>
            <Link to="#">22AW 2ND Goose Down Parka (색상)</Link>
            <div>506,000원</div>
            <div>옵션 : [size]XL</div>
          </div>
          <div>
            <button>-</button>
            <div>1</div>
            <button>+</button>
          </div>
          <div>
            <div>수량에 따른 가격</div>
            <Link to="#">BUY NOW</Link>
          </div>
          <div>29CM 무료배송</div>
        </div>
        <div>
          <button>선택상품 삭제</button>
          <span>장바구니는 접속 종료 후 60일 동안 보관됩니다.</span>
        </div>
      </div>
      <div>
        <div>
          <div>총 주문금액</div>
          <div>총 배송비</div>
          <div>총 결제금액</div>
        </div>
        <div>
          <div>
            480,700원<span>총 1개</span>
          </div>
          <div>+아이콘</div>
          <div>0원(총배송비)</div>
          <div>=아이콘</div>
          <div>480,700원</div>
        </div>
        <div>
          <Link to="#">CONTINUE SHOPPING</Link>
          <Link to="#">CHECK OUT</Link>
        </div>
      </div>
    </>
  );
};

export default Cart;

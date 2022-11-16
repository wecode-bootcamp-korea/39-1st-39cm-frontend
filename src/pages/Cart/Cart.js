import React from "react";
import { Link } from "react-router-dom";
import "../Cart/Cart.scss";

const Cart = () => {
  const checkValue = (e) => console.log(e.target.checked);

  return (
    <div className="wrapCart">
      <div className="orderStep">
        <span>01 SHOPPING BAG</span>
        <span>02 ORDER</span>
        <span>03 ORDER CONFIRMED</span>
      </div>

      <div className="itemList">
        <div className="columnName">
          <input onClick={checkValue} className="checkBox" type="checkBox" />
          <div className="itemInfoCol">상품 정보</div>
          <div className="quantityCol">수량</div>
          <div className="orderPriceCol">주문금액</div>
          <div className="deliveryChargeCol">배송비</div>
        </div>
        <div className="orderInfo">
          <input className="checkBox" type="checkBox" />
          <div className="itemInfo">
            <img
              src="./images/shimdongseup/product_img.jpg"
              alt="product_img"
            />
            <div className="wrapItemInfo">
              <Link className="brandLink" to="#">
                어나더오피스
              </Link>
              <Link className="itemLink" to="#">
                22AW 2ND Goose Down Parka (색상)
              </Link>
              <div className="singlePrice">506,000원</div>
              <div className="optionInfo">옵션 : [size]XL</div>
            </div>
            <span class="material-symbols-sharp delete">
              disabled_by_default
            </span>
          </div>
          <div className="quantity">
            <button>-</button>
            <div>1</div>
            <button>+</button>
          </div>
          <div className="orderPrice">
            <div>266,000원</div>
            <Link className="goToPayment" to="#">
              BUY NOW
            </Link>
          </div>
          <div className="deliveryCharge">29CM 무료배송</div>
        </div>
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
            <div className="price">
              480,700<h3>원</h3>
            </div>
            <span>총 1개</span>
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
            <div className="price">
              480.700<h3>원</h3>
            </div>
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

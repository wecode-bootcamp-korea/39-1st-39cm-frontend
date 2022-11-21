import React from "react";
import { Link } from "react-router-dom";
import "../MyPage/MyPage.scss";

const MyPage = () => {
  return (
    <>
      <div className="myPage">
        <div className="myPageLeft">
          <section className="myName">
            <div className="username">
              <h3>이름</h3>
              <ul>
                <li>
                  <p className="txt">
                    나의 하트 <em>0</em>
                  </p>

                  <p className="txt">
                    나의 리뷰 <em>0</em>
                  </p>
                </li>
              </ul>
            </div>
          </section>
        </div>
        <div className="main">
          <div className="inserted">
            <section className="myOrder">
              <h3 className="myTit">최근 주문</h3>
              <ul className="myOrderInserted">
                <li className="myOrderTit">
                  <div className="myOrderTb">
                    <div className="date">주문일</div>
                    <div className="history">주문내역</div>
                    <div className="num">주문번호</div>
                    <div className="amount">결제금액</div>
                  </div>
                </li>
              </ul>
              <div className="orderList">
                <p>최근 주문내역이 없습니다</p>
              </div>
              <Link to="#">"더보기"</Link>
            </section>
            <div className="splitWrap">
              <section className="myHeart">
                <h3 className="myTit">MY HEART</h3>
                <div className="heartWrap">
                  <h4 className="heartTit">Products</h4>
                  <div className="heartList">
                    <p>상품 하트내역이 없습니다</p>
                  </div>
                  <ul className="heartListIn"></ul>
                </div>
                <div className="secondHeartWrap">
                  <h4 className="secondHeartTit">Review</h4>
                  <div className="reviewList">
                    <p>리뷰 작성내역이 없습니다</p>
                  </div>
                  <ul className="reviewListIn"></ul>
                </div>
                <Link to="#">"더보기"</Link>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyPage;

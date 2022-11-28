import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../MyPage/MyPage.scss";
import OrderList from "./OrderList";
import HeartList from "./HeartList";
import ReviewList from "./ReviewList";

const MyPage = () => {
  const ipAddress = "13.124.197.217";
  const [myPageList, setMyPageList] = useState();
  const [orderedList, setOrderedList] = useState();

  useEffect(() => {
    fetch(`http://${ipAddress}:3000/auth/user/info`, {
      headers: {
        authorization: localStorage.getItem("TOKEN"),
      },
    })
      .then((response) => response.json())
      .then((result) => {
        setMyPageList(result.userInfo[0]);
      });

    fetch(`http://${ipAddress}:3000/auth/user/ordered`, {
      headers: {
        authorization: localStorage.getItem("TOKEN"),
      },
    })
      .then((response) => response.json())
      .then((result) => {
        setOrderedList(result.userOrdered);
      });
  }, []);

  return (
    <>
      <div className="myPage">
        <div className="myPageLeft">
          <section className="myName">
            <div className="username">
              {myPageList && <h3>{myPageList.name}</h3>}
              <ul>
                <li>
                  {myPageList && (
                    <p className="txt">
                      나의 하트{" "}
                      {myPageList.liked ? (
                        <em>{myPageList.liked.length}</em>
                      ) : (
                        <em>0</em>
                      )}
                    </p>
                  )}
                  {myPageList && (
                    <p className="txt">
                      나의 리뷰{" "}
                      {myPageList.reviewed ? (
                        <em>{myPageList.reviewed.length}</em>
                      ) : (
                        <em>0</em>
                      )}
                    </p>
                  )}
                </li>
              </ul>
            </div>
          </section>
          <section className="myPoint">
            <ul>
              <li>
                <span>회원이름</span>
                {myPageList && <em className="userName">{myPageList.name}</em>}
              </li>
              <li>
                <span>사용가능포인트</span>
                {myPageList && (
                  <em>{Number(myPageList.point).toLocaleString()}</em>
                )}
              </li>
            </ul>
          </section>
        </div>
        <div className="main">
          <div className="inserted">
            <section className="myOrder">
              <h3 className="myTit">최근 주문</h3>
              <div className="Mypage">
                <div className="itemList">
                  <div className="columnName">
                    <span className="itemInfoCol">상품 정보</span>
                    <span className="quantityCol">수량</span>
                    <span className="orderPriceCol">주문금액</span>
                  </div>
                </div>
              </div>
              <div className="orderList">
                {orderedList &&
                  orderedList.map((obj, index) => {
                    return <OrderList key={index} orderedItem={obj} />;
                  })}
              </div>

              <Link to="#" className="more">
                더보기
              </Link>
            </section>
            <div className="splitWrap">
              <section className="myHeart">
                <h3 className="myTit">MY HEART</h3>
                <div className="heartWrap">
                  <h4 className="heartTit">Products</h4>
                  <div className="heartList">
                    {myPageList &&
                      myPageList.liked &&
                      myPageList.liked.map((id, index) => {
                        return <HeartList key={index} productId={id} />;
                      })}
                  </div>
                </div>
                <div className="secondHeartWrap">
                  <h4 className="secondHeartTit">Review</h4>
                  <div className="orderList">
                    {myPageList &&
                      myPageList.reviewed &&
                      myPageList.reviewed.map((obj, index) => {
                        return <ReviewList key={index} reviewInfo={obj} />;
                      })}
                  </div>
                  <ul className="heartListIn"></ul>
                </div>
                <Link to="#" className="more">
                  더보기
                </Link>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyPage;

import React from "react";
import "./ProductDetail.scss";
import { useState } from "react";
import { Link } from "react-router-dom";

const ProductDetail = () => {
  const [showColorOpt, setShowColorOpt] = useState(false);
  const [likePd, setLikePd] = useState(false);

  const hendleScrollUp = (e) => {
    if (!window.scrollY) return;

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleScrollDown = (e) => {
    if (window.scrollY) return;

    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <section className="productDetail">
      <div className="topToEndContainer">
        <button className="toTop" onClick={hendleScrollUp}>
          <img src="/images/leedabin/arrowUpSmall.png" alt="toTop" />
        </button>
        <button className="toEnd" onClick={handleScrollDown}>
          <img src="/images/leedabin/arrowDownSmall.png" alt="toEnd" />
        </button>
      </div>
      <div className="productDetailContainer">
        <div className="thumbnailContainer">
          <div className="productThumbnail">
            <div className="arrowsSet">
              <button className="arrowLeft">
                <img src="/images/leedabin/arrowLeft.png" alt="arrowLeft" />
              </button>
              <button className="arrowRight">
                <img src="/images/leedabin/arrowRight.png" alt="arrowright" />
              </button>
            </div>
            <div className="flexBox">
              <img
                className="nbThn1"
                src="/images/leedabin/NB_yellow_set.jpeg"
                alt="thumbnail"
              />
              <img
                className="nbThn2"
                src="/images/leedabin/NB_yellow_set_twogirls.jpeg"
                alt="thumbnail2"
              />
              <img
                className="nbThn3"
                src="/images/leedabin/NB_yellow_sitting.jpeg"
                alt="thumbnail3"
              />
            </div>
          </div>
          <section className="productDetailBox">
            <div className="pdNameHeart">
              <div className="pdLeftBox">
                <h1>뉴발란스 숏다운 (3color)</h1>
                <span className="score">
                  <span className="starts">
                    <img
                      className="start"
                      src="/images/leedabin/startOrange.png"
                      alt="start"
                    />
                    <img
                      className="start"
                      src="/images/leedabin/startOrange.png"
                      alt="start"
                    />
                    <img
                      className="start"
                      src="/images/leedabin/startOrange.png"
                      alt="start"
                    />
                    <img
                      className="start"
                      src="/images/leedabin/startOrange.png"
                      alt="start"
                    />
                    <img
                      className="start"
                      src="/images/leedabin/startOrange.png"
                      alt="start"
                    />
                  </span>
                  <span className="reviewSeeMore"> N개 리뷰 보기</span>
                </span>
              </div>
              <div className="pdRightBox">
                <img
                  className="heartLineIcon"
                  alt="heart"
                  onClick={() => {
                    setLikePd(!likePd);
                  }}
                  src={
                    likePd === false
                      ? "/images/leedabin/heartLine.png"
                      : "/images/leedabin/heartOrange.png"
                  }
                />
              </div>
            </div>
            <h2 className="price">
              297,000
              <span>원</span>
            </h2>
            <section className="ColorWrapper" data-role="selectbox">
              <section className="selectBox">
                <button
                  type="button"
                  className="toggleBtn"
                  onClick={() => setShowColorOpt(!showColorOpt)}
                >
                  COLOR
                  <img
                    src="/images/leedabin/dropDown.png"
                    alt="downArrow"
                    className="ico-down"
                  />
                </button>
                {showColorOpt && (
                  <ul
                    className="selectBoxOption"
                    onClick={() => setShowColorOpt(false)}
                  >
                    <li>
                      <button type="button" className="optionBtn">
                        Khaki Grey
                      </button>
                    </li>
                    <li>
                      <button type="button" className="optionBtn">
                        Black
                      </button>
                    </li>
                    <li>
                      <button type="button" className="optionBtn">
                        Navy
                      </button>
                    </li>
                  </ul>
                )}
              </section>
            </section>
            <div className="orderBtns">
              <Link to={"/Cart"}>
                <button className="addCartBtn" type="button">
                  장바구니 담기
                </button>
              </Link>
              <Link to={"/Payment"}>
                <button className="buyNowBtn" type="button">
                  바로 구매하기
                </button>
              </Link>
            </div>
          </section>
        </div>
      </div>
      <section className="details">
        <img
          className="detailsInfo"
          src="/images/leedabin/NB_yellow_set.jpeg"
          alt="임시 상세페이지01"
        />
        <img
          className="detailsInfo2"
          src="/images/leedabin/NB_yellow_set_twogirls.jpeg"
          alt="임시 상세페이지02"
        />
      </section>
      <section className="reviewContainer">
        <div className="reviewInfo">
          <div className="reviewTopLeftBox">
            <span className="reviewCount">
              리뷰(203)
              <img
                className="start"
                src="/images/leedabin/startOrange.png"
                alt="start"
              />
              <img
                className="start"
                src="/images/leedabin/startOrange.png"
                alt="start"
              />
              <img
                className="start"
                src="/images/leedabin/startOrange.png"
                alt="start"
              />
              <img
                className="start"
                src="/images/leedabin/startOrange.png"
                alt="start"
              />
              <img
                className="start"
                src="/images/leedabin/startOrange.png"
                alt="start"
              />
            </span>
          </div>
          <div className="reviewTopRightBox">
            <span className="reviewRule">
              50자 이상 포토리뷰 작성 시 최대 1,500 마일리지 적립
            </span>
            <div className="divide"></div>
            <span className="writeReview">리뷰쓰기</span>
          </div>
        </div>
        <section className="reviewBox">
          <div className="reviewPhoto">
            <img src="/images/leedabin/NB_yellow_set.jpeg" alt="reviewPhoto" />
          </div>
        </section>
        <div className="reviewCtx">
          <h3 className="reviewTitle">@Kim123</h3>
          <span className="ctx">랄라루</span>
        </div>
      </section>
    </section>
  );
};

export default ProductDetail;

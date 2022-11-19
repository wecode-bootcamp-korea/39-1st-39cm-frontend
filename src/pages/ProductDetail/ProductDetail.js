import React from "react";
import "./ProductDetail.scss";

const ProductDetail = () => {
  return (
    <section className="productDetail">
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
            <img
              className="nbThn1"
              src="/images/leedabin/NB_yellow_set.jpeg"
              alt="thumbnail"
            />
          </div>
          <section className="productDetailBox">
            <div className="pdNameHeart">
              <div className="pdLeftBox">
                <h1>뉴발란스 숏다운 (3color)</h1>
                <span className="score">별별별</span>
                <span className="reviewSeeMore"> N개 리뷰 보기</span>
              </div>
              <div className="pdRightBox">
                <img
                  className="heartLineIcon"
                  src="/images/leedabin/heartLine.png"
                  alt="heart"
                />
              </div>
            </div>
            <h2 className="price">
              297,000
              <span>원</span>
            </h2>
            <section class="ColorWrapper" data-role="selectbox">
              <h2 className="hidden"></h2>
              <section className="selectbox">
                <h2 className="hidden"></h2>
                <button type="button" className="toggleBtn">
                  Color
                  <img
                    src="/images/leedabin/arrowRight.png"
                    alt="downArrow"
                    className="ico-down"
                  />
                </button>
                <ul className="selectBoxOption hide">
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
              </section>
            </section>
            {/* </div> */}
            <div className="orderBtns">
              <button className="addCartBtn" type="button">
                장바구니 담기
              </button>
              <button className="buyNowBtn" type="button">
                바로 구매하기
              </button>
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
      </section>
      <section className="reviewBox"></section>
    </section>
  );
};

export default ProductDetail;

import React from "react";
import "../BestProductList/BestProductList.scss";

function BestProductList() {
  return (
    <div className="bestProduct">
      <div className="leftSide">
        <div className="leftCategories">
          <h2 className="title">BEST</h2>
          <ul className="leftSideList">
            <ul className="categoryNameList">
              <li className="categryName">
                <a className="firstName" href="#">
                  여성의류
                </a>
              </li>
              <li className="categoryName">
                <a className="secondName" href="#">
                  남성의류
                </a>
              </li>
              <li className="categoryName">
                <a className="thirdName" href="#">
                  신발
                </a>
              </li>
            </ul>
          </ul>
        </div>
      </div>
      <div className="mainPage">
        <h2 className="kindOfThing">여성의류</h2>
        <div className="categories">
          <ul className="categoriesList">
            <span className="list">
              <input
                className="kind"
                type="radio"
                name="categoryMediumList"
                value
                checked
              />
              <label
                className="choice"
                for="categoryMediumList"
                title="categoryMediumList"
              >
                전체
              </label>
            </span>
            <span className="list">
              <input
                className="kind"
                type="radio"
                name="secondCategoryMediumList"
                value="secondCategoryMediumList"
              />
              <label
                className="choice"
                for="secondCategoryMediumList"
                title="categoryMediumList"
              >
                상의
              </label>
            </span>
            <span className="list">
              <input
                className="kind"
                type="radio"
                name="thirdCategoryMediumList"
                value="thirdCategoryMediumList"
              />
              <label
                className="choice"
                for="thirdCategoryMediumList"
                title="categoryMediumList"
              >
                하의
              </label>
            </span>
          </ul>
        </div>
        <ul className="productList">
          <li className="product">
            <div className="ware">
              <a href="#" title="제품정보" className="productInfo">
                <div className="wareInfo">
                  <img src="/images/kimdongki/woman.jpg" alt="woman" />
                </div>
              </a>
              <div className="productExplanation">
                <a href="#" title="브랜드" className="brand">
                  브랜드
                </a>
                <a href="#" title="제품이름" className="wareName">
                  <div className="wareShowing">
                    <h5 className="wareExplanation">제품이름_black</h5>
                    <div className="price">
                      <strong className="beforeDiscount">485,000</strong>
                      <div className="discount">
                        <span className="percent">5 %</span>
                        <strong className="discountPrice">460,750</strong>
                      </div>
                    </div>
                  </div>
                </a>
                <div className="like">
                  <button className="heart">
                    <img
                      src="/images/kimdongki/heart.svg"
                      width={16}
                      height={16}
                      viewBox="0 0 18 18"
                    ></img>
                    9,184
                  </button>
                  <a href="#" className="comment">
                    <img
                      src="/images/kimdongki/comment.svg"
                      width={16}
                      height={16}
                      viewBox="0 0 15 16"
                    ></img>
                    <span className="review">644</span>
                  </a>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default BestProductList;

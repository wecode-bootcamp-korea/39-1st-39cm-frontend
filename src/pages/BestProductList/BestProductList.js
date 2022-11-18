import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../BestProductList/BestProductList.scss";
import BestProductBottom from "./Product/BestProductBottom";
import BestProductTop from "./Product/BestProductTop";

function BestProductList() {
  const [bestProduct, setBestProduct] = useState([]);
  const [bestProductTop, setBestProductTop] = useState([]);
  useEffect(() => {
    fetch("/data/bestProductList.json")
      .then((response) => response.json())
      .then((result) => setBestProduct(result));
    console.log(bestProduct);
  }, []);
  useEffect(() => {
    fetch("/data/bestProductTopList.json")
      .then((response) => response.json())
      .then((result) => setBestProductTop(result));
    console.log(bestProduct);
  }, []);
  return (
    <div className="bestProduct">
      <div className="leftSide">
        <div className="leftCategories">
          <h2 className="title">BEST</h2>
          <ul className="leftSideList">
            <ul className="categoryNameList">
              <li className="categryName">
                <Link className="firstName" to="#">
                  여성의류
                </Link>
              </li>
              <li className="categoryName">
                <Link className="secondName" to="#">
                  남성의류
                </Link>
              </li>
              <li className="categoryName">
                <Link className="thirdName" to="#">
                  신발
                </Link>
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
          {bestProductTop.map((product) => (
            <BestProductTop key={product.id} product={product} />
          ))}
          {/* <BestProductTop />
          <BestProductTop />
          <BestProductTop /> */}
        </ul>
        <ul className="productListBottom">
          {bestProduct.map((product) => (
            <BestProductBottom key={product.id} product={product} />
          ))}
          {/* // <BestProductBottom />
          // <BestProductBottom />
          // <BestProductBottom />
          // <BestProductBottom />
          // <BestProductBottom />
          // <BestProductBottom />
          // <BestProductBottom />
          // <BestProductBottom />
          // <BestProductBottom />
          // <BestProductBottom />
          // <BestProductBottom />
          // <BestProductBottom />
          // <BestProductBottom />
          // <BestProductBottom />
          // <BestProductBottom />
          // <BestProductBottom />
          // <BestProductBottom /> */}
        </ul>
      </div>
    </div>
  );
}

export default BestProductList;

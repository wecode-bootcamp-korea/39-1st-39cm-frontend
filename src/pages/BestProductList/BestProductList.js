import React, { useEffect, useState } from "react";
import "../BestProductList/BestProductList.scss";
import BestProductBottom from "./Product/BestProductBottom";
import BestProductTop from "./Product/BestProductTop";

function BestProductList() {
  //bestProductTop,Bottom
  // const [bestProductTop, setBestProductTop] = useState([]);
  const [bestProductBottom, setBestProductBottom] = useState([]);
  const [titleHandler, setTitleHandler] = useState(0);
  const titleName = titleData[titleHandler];

  // useEffect(() => {
  //   fetch("/data/kimdongki/bestProductTopList.json")
  //     .then((response) => response.json())
  //     .then((result) => setBestProductTop(result));
  // }, []);
  useEffect(() => {
    fetch("/data/kimdongki/bestProductBottomList.json")
      .then((response) => response.json())
      .then((result) => setBestProductBottom(result));
  }, []);

  return (
    <div className="bestProduct">
      <div className="leftSide">
        <div className="leftCategories">
          <h2 className="title">BEST</h2>
          <ul className="leftSideList">
            <ul className="categoryNameList">
              {titleData.map((data) => (
                <li className="categoryName">
                  <button
                    key={data.id}
                    className="firstName"
                    onClick={() => setTitleHandler(data.id)}
                  >
                    {data.title}
                  </button>
                </li>
              ))}
            </ul>
          </ul>
        </div>
      </div>
      <div className="mainPage">
        <h2 className="kindOfThing">{titleName.title}</h2>
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
                {titleName.category1}
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
                {titleName.category2}
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
                {titleName.category3}
              </label>
            </span>
          </ul>
        </div>
        <ul className="productListTop">
          {bestProductBottom &&
            bestProductBottom.map((obj, index) => {
              if (index < 3) {
                return <BestProductTop key={index} product={obj} />;
              }
            })}
        </ul>
        <ul className="productListBottom">
          {bestProductBottom &&
            bestProductBottom.map((product, index) => {
              if (index > 2) {
                return <BestProductBottom key={index} product={product} />;
              }
            })}
        </ul>
      </div>
    </div>
  );
}

const titleData = [
  {
    id: 0,
    title: "여성의류",
    category1: "전체",
    category2: "상의",
    category3: "하의",
  },
  {
    id: 1,
    title: "남성의류",
    category1: "전체",
    category2: "상의",
    category3: "하의",
  },
  {
    id: 2,
    title: "신발",
    category1: "전체",
  },
];

export default BestProductList;

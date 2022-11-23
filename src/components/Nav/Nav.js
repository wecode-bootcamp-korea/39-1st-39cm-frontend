import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavIconList from "./NavIconList";
import DropDown from "./DropDown";
import "./Nav.scss";

export default function Nav() {
  const [showSearch, setShowSearch] = useState(false);
  const [showHoverMenu, setShowHoverMenu] = useState(0);
  const [dropDownData, setDropDownData] = useState([]);
  const [inputState, setInputState] = useState("");
  const [itemList, setItemList] = useState([]);

  useEffect(() => {
    fetch("data/DropDownData.json")
      .then((response) => response.json())
      .then((result) => setDropDownData(result));

    //상품리스트 불러오는 fetch
    fetch(
      "http://10.58.52.169:3000/products?limit=&offset=&sort=&color=&min_price=&max_price=&category=&brand=&product_gender="
    )
      .then((response) => response.json())
      .then((result) => setItemList(result.products));
  }, []);

  return (
    <>
      <nav className="nav">
        <section
          className="navContent"
          onMouseEnter={() => setShowHoverMenu(0)}
        >
          <Link className="unsetLink" to={"/"}>
            <img
              className="Logo"
              src="/images/leedabin/BlackLogo.png"
              alt="39cm logo"
            />
          </Link>
          <div className="navContentBox">
            {NavIconList.map((el) => {
              if (el.id !== 3) {
                return (
                  <div key={el.id}>
                    <Link className="unsetLink" to={el.url}>
                      <img src={el.img} alt="icon-img" />
                      <span>{el.text}</span>
                    </Link>
                  </div>
                );
              } else {
                return null;
              }
            })}
            {localStorage.getItem("TOKEN") && (
              <div>
                <Link
                  className="unsetLink"
                  to={"/Login"}
                  onClick={() => localStorage.removeItem("TOKEN")}
                >
                  <img src="/images/leedabin/logout.png" alt="icon-img" />
                  <span>LOGOUT</span>
                </Link>
              </div>
            )}
            {!localStorage.getItem("TOKEN") && (
              <div>
                <Link className="unsetLink" to={"/login"}>
                  <img src="/images/leedabin/login.png" alt="icon-img" />
                  <span>LOGIN</span>
                </Link>
              </div>
            )}
          </div>
        </section>
        <section className="navCategoriesWrap">
          <ul className="navCategories">
            <li onMouseEnter={() => setShowHoverMenu(0)}>BEST</li>
            <li onMouseEnter={() => setShowHoverMenu(1)}>WOMEN</li>
            <li onMouseEnter={() => setShowHoverMenu(2)}>MEN</li>
            <li onMouseEnter={() => setShowHoverMenu(3)}>UNISEX</li>
          </ul>
          <img
            className="searchIcon"
            src="/images/leedabin/search.png"
            alt="Search"
            onClick={() => setShowSearch(true)}
          />
        </section>
        {showSearch && (
          <section className="navSearch">
            <div className="navSearch">
              <img
                alt="closeBtn"
                className="searchCloseBtn"
                src="/images/leedabin/closeBtn.png"
                onClick={() => setShowSearch(false)}
              />
              <div className="sideSearchBox">
                <div className="inputContainer">
                  <input
                    className="navSearchInput"
                    placeholder="Search"
                    onChange={(e) => {
                      setInputState(e.target.value);
                    }}
                  />
                  <img
                    className="searchIcon"
                    src="/images/leedabin/search.png"
                    alt="searchIcon"
                  />
                </div>
                <section className="searchLank">
                  <span className="topTopic">추천검색어</span>
                  <div className="topKeyword">
                    <ul className="keywordList">
                      {/* <Link to={`/ProductDetail/`}>
                        <li>검색어</li>
                      </Link> */}
                      {itemList &&
                        itemList.map((item, index) => {
                          if (
                            item.productName.toLowerCase().includes(inputState)
                          ) {
                            return (
                              <Link
                                key={index}
                                to={`/ProductDetail/${item.productId}`}
                                className="linkStyle"
                                onClick={() => setShowSearch(false)}
                              >
                                <li>{item.productName}</li>
                              </Link>
                            );
                          } else {
                            return null;
                          }
                        })}
                    </ul>
                  </div>
                </section>
              </div>
            </div>
          </section>
        )}
        {dropDownData.map((obj, index) => {
          if (obj.id === showHoverMenu) {
            return (
              <DropDown
                obj={obj}
                key={index}
                mouseLeave={() => setShowHoverMenu(0)}
              />
            );
          } else {
            return null;
          }
        })}
      </nav>
    </>
  );
}

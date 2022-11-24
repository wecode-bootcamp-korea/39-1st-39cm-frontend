import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import NavIconList from "./NavIconList";
import DropDown from "./DropDown";
import "./Nav.scss";

export default function Nav() {
  const ipAddress = "13.124.197.217";
  const navigate = useNavigate();
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
      `http://${ipAddress}:3000/products?limit=&offset=&sort=&color=&min_price=&max_price=&category=&brand=&product_gender=`
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
                    <button
                      className="unsetLink"
                      onClick={() => {
                        if (localStorage.getItem("TOKEN")) {
                          navigate(el.url);
                        } else {
                          alert("로그인 후 이용 가능한 서비스 입니다.");
                          navigate("/Login");
                        }
                      }}
                    >
                      <img src={el.img} alt="icon-img" />
                      <span>{el.text}</span>
                    </button>
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
            <Link
              to="/BestProductList?limit=&offset=&sort=&color=&min_price=&max_price=&category=&brand=&product_gender=2"
              className="navCategory"
              onMouseEnter={() => setShowHoverMenu(0)}
            >
              BEST
            </Link>
            <Link
              to="/BestProductList?limit=&offset=&sort=&color=&min_price=&max_price=&category=&brand=&product_gender=2"
              className="navCategory"
              onMouseEnter={() => setShowHoverMenu(1)}
            >
              WOMEN
            </Link>
            <Link
              to="/BestProductList?limit=&offset=&sort=&color=&min_price=&max_price=&category=&brand=&product_gender=1"
              className="navCategory"
              onMouseEnter={() => setShowHoverMenu(2)}
            >
              MEN
            </Link>
            <Link
              to="/BestProductList?limit=&offset=&sort=&color=&min_price=&max_price=&category=&brand=&product_gender=3"
              className="navCategory"
              onMouseEnter={() => setShowHoverMenu(3)}
            >
              UNISEX
            </Link>
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

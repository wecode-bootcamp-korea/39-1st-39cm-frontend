import React, { useState } from "react";
import "./Nav.scss";
import { Link } from "react-router-dom";

export default function Nav() {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <>
      <nav className="Nav">
        <section className="navContent">
          <Link to={"/Main"}>
            <img
              className="Logo"
              src="/images/leedabin/BlackLogo.png"
              alt="39cm logo"
            />
          </Link>
          <div className="navContentBox">
            <div className="mypage">
              <Link to={"/MyPage"}>
                <img
                  className="mypageIcon"
                  src="/images/leedabin/mypage.png"
                  alt="MY PAGE"
                />
                <span>MY PAGE</span>
              </Link>
            </div>
            <div className="shoppingBag">
              <Link to={"/Cart"}>
                <img
                  className="shoppingIcon"
                  src="/images/leedabin/shoppingbag.png"
                  alt="SHOPPING BAG"
                />
                <span>SHOPPING BAG</span>
              </Link>
            </div>
            <div className="login">
              <Link to={"/Login"}>
                <img
                  className="loginIcon"
                  src="/images/leedabin/login.png"
                  alt="LOGIN"
                />
                <span>Login </span>
              </Link>
            </div>
          </div>
        </section>
        <section className="navCategoriesWrap">
          <ul className="navCategories">
            <li>BEST</li>
            <li>WOMEN</li>
            <li>MEN</li>
            <li>UNISEX</li>
          </ul>
          <img
            class="searchIcon"
            src="/images/leedabin/search.png"
            alt="Search"
            onClick={() => setShowSearch(true)}
          />
        </section>
        {showSearch && (
          <section className="navSearch">
            <div className="navSearch">
              <img
                className="searchCloseBtn"
                src="/images/leedabin/closeBtn.png"
                alt="closeBtn"
                onClick={() => setShowSearch(false)}
              />
              <div className="sideSearchBox">
                <div className="inputContainer">
                  <input className="navSearchInput" placeholder="Search" />
                  <img
                    className="searchIcon"
                    src="/images/leedabin/search.png"
                    alt="searchIcon"
                  />
                </div>
                <section className="searchLank">
                  <span className="topTopic">인기검색어</span>
                  <div className="topKeyword">
                    <ul>
                      <li>니트</li>
                      <li>프라이탁</li>
                    </ul>
                  </div>
                </section>
              </div>
            </div>
          </section>
        )}
      </nav>
    </>
  );
}

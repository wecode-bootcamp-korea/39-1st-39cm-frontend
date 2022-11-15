import React from "react";
import "./Nav.scss";

export default function Nav() {
  return (
    <>
      <nav className="Nav">
        <section className="navContent">
          <img
            className="Logo"
            src="/images/leedabin/BlackLogo.png"
            alt="39cm logo"
          />
          <div className="navContentBox">
            <div className="mypage">
              <img
                className="mypageIcon"
                src="/images/leedabin/mypage.png"
                alt="MY PAGE"
              />
              <span>MY PAGE</span>
            </div>
            <div className="mylike">
              <img
                className="heartIcon"
                src="/images/leedabin/heart.png"
                alt="MY LIKE"
              />
              <span>MY LIKE</span>
            </div>
            <div className="shoppingBag">
              <img
                className="shoppingIcon"
                src="/images/leedabin/shoppingbag.png"
                alt="SHOPPING BAG"
              />
              <span>SHOPPING BAG</span>
            </div>
            <div className="login">
              <img
                className="loginIcon"
                src="/images/leedabin/login.png"
                alt="LOGIN"
              />
              <span>Login </span>
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
          />
        </section>
      </nav>
      <section className="navSearch">
        <div className="navSearch">
          <img
            className="searchCloseBtn"
            src="/images/leedabin/closeBtn.png"
            alt="closeBtn"
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
    </>
  );
}

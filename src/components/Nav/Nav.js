import React, { useState } from "react";
import "./Nav.scss";
import { Link } from "react-router-dom";
import DownNav from "./DownNav";
import DownNavMen from "./DownNavMen";
import DownNavUni from "./DownNavUni";

export default function Nav() {
  const [showSearch, setShowSearch] = useState(false);
  const [showHoverMenu, setShowHoverMenu] = useState(0);

  return (
    <>
      <nav className="Nav">
        <section
          className="navContent"
          onMouseEnter={() => setShowHoverMenu(0)}
        >
          <Link className="unsetLink" to={"/Main"}>
            <img
              className="Logo"
              src="/images/leedabin/BlackLogo.png"
              alt="39cm logo"
            />
          </Link>
          <div className="navContentBox">
            <div className="mypage">
              <Link className="unsetLink" to={"/MyPage"}>
                <img
                  className="mypageIcon"
                  src="/images/leedabin/mypage.png"
                  alt="MY PAGE"
                />
                <span>MY PAGE</span>
              </Link>
            </div>
            <div className="shoppingBag">
              <Link className="unsetLink" to={"/Cart"}>
                <img
                  className="shoppingIcon"
                  src="/images/leedabin/shoppingbag.png"
                  alt="SHOPPING BAG"
                />
                <span>SHOPPING BAG</span>
              </Link>
            </div>
            <div className="login">
              <Link className="unsetLink" to={"/Login"}>
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
            <li onMouseEnter={() => setShowHoverMenu(0)}>BEST</li>
            <li onMouseEnter={() => setShowHoverMenu(1)}>WOMEN</li>
            <li onMouseEnter={() => setShowHoverMenu(2)}>MEN</li>
            <li onMouseEnter={() => setShowHoverMenu(3)}>UNISEX</li>
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
                alt="closeBtn"
                className="searchCloseBtn"
                src="/images/leedabin/closeBtn.png"
                onClick={() => setShowSearch(0)}
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
                  <span className="topTopic">추천검색어</span>
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
        {showHoverMenu === 1 && (
          <DownNav onMouseLeave={() => setShowHoverMenu(0)} />
        )}
        {showHoverMenu === 2 && (
          <DownNavMen onMouseLeave={() => setShowHoverMenu(0)} />
        )}
        {showHoverMenu === 3 && (
          <DownNavUni onMouseLeave={() => setShowHoverMenu(0)} />
        )}
      </nav>
    </>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="wrapLink">
        <div className="linkList">
          <div>SHOPPING LIST</div>
          {SHOPPING_LIST.map((obj, index) => {
            return (
              <Link key={index} className="link" to={obj.link}>
                {obj.pageName}
              </Link>
            );
          })}
        </div>
        <div className="linkList">
          <div>ACCOUNT</div>
          {ACCOUNT_LINK_LIST.map((obj, index) => {
            return (
              <Link key={index} className="link" to={obj.link}>
                {obj.pageName}
              </Link>
            );
          })}
        </div>
      </div>
      <div className="wrapProfile">
        <div className="developer">DEVERLOPER</div>
        <div className="profiles">
          {PROFILE_LIST.map((obj, index) => {
            return (
              <div key={index} className="profile">
                <a href={obj.github}>
                  <img src={obj.img} alt="profile_img" />
                </a>
                <div>{obj.name}</div>
                <div>{obj.position}</div>
              </div>
            );
          })}
        </div>
        <div className="officeInfo">
          <span>상호명:(주)39cm코리아</span>
          <span>주소:서울특별시 강남구 테헤란로 427 위워크타워 10층</span>
          <span>대표번호 : 0000-0000</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;

const PROFILE_LIST = [
  {
    name: "김동기",
    img: "/images/shimdongseup/profile_img_1.png",
    position: "Front-end",
    github: "https://github.com/Sing-DongKi",
  },
  {
    name: "심동섭",
    img: "/images/shimdongseup/profile_img_2.png",
    position: "Front-end",
    github: "https://github.com/ShimDongseup",
  },
  {
    name: "이다빈",
    img: "/images/shimdongseup/profile_img_3.png",
    position: "Front-end",
    github: "https://github.com/Dabnii",
  },
  {
    name: "이동근",
    img: "/images/shimdongseup/profile_img_4.png",
    position: "Back-end",
    github: "https://github.com/LEEDONGKEN",
  },
  {
    name: "한상엽",
    img: "/images/shimdongseup/profile_img_5.png",
    position: "Back-end",
    github: "https://github.com/sangyeobhan",
  },
];

const ACCOUNT_LINK_LIST = [
  // {
  //   pageName: "LOGIN",
  //   link: "/Login",
  // },
  // {
  //   pageName: "SIGNUP",
  //   link: "/Signup",
  // },
  {
    pageName: "MY PAGE",
    link: "/MyPage",
  },
  {
    pageName: "SHOPPING BAG",
    link: "/Cart",
  },
];

const SHOPPING_LIST = [
  {
    pageName: "BEST",
    link: "/BestProductList?limit=&offset=&sort=&color=&min_price=&max_price=&category=&brand=&product_gender=2",
  },
  {
    pageName: "WOMEN",
    link: "/BestProductList?limit=&offset=&sort=&color=&min_price=&max_price=&category=&brand=&product_gender=2",
  },
  {
    pageName: "MEN",
    link: "/BestProductList?limit=&offset=&sort=&color=&min_price=&max_price=&category=&brand=&product_gender=1",
  },
];

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Login/Login.scss";

const Login = () => {
  let navigate = useNavigate();
  let gotoBestList = (e) => {
    e.preventDefault();
    //로그인 정보 확인
    fetch("http://10.58.52.117:3000/auth/login", {
      method: "post",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({
        email: account.id,
        password: account.password,
      }),
    })
      .then((response) => {
        if (response.ok === true) {
          return response.json();
        }
        throw new Error("로그인 실패");
      })
      .catch((error) =>
        setLoginAlert(
          "입력하신 정보와 일치하는 계정이 없습니다.로그인 정보를 확인해주세요"
        )
      )
      .then((data) => {
        localStorage.setItem("TOKEN", data.token);
        navigate("/BestProductList");
      });
  };
  const [loginAlert, setLoginAlert] = useState("");

  const [account, setAccount] = useState({
    id: "",
    password: "",
  });

  const onChangeAccount = (e) => {
    //input에 입력될 때마다 account state값 변경되게 하는 함수
    setAccount({
      ...account,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <div className="loginWrap">
        <div className="loginBox">
          <div className="loginText">로그인</div>
          <form onSubmit={gotoBestList}>
            <input
              type="text"
              name="id"
              placeholder="아이디(이메일)"
              onChange={onChangeAccount}
            />
            <input
              type="password"
              name="password"
              placeholder="비밀번호"
              onChange={onChangeAccount}
            />
            <div className="loginAlert">{loginAlert}</div>
            <button type="submit">로그인하기</button>
          </form>
          <Link to="/Signup" className="goToSignup">
            간편 회원가입하기
          </Link>
        </div>
      </div>
    </>
  );
};

export default Login;

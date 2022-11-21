import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Signup/Signup.scss";

const Signup = () => {
  const navigate = useNavigate();
  const goToLogin = () => navigate("/Login");
  const [idAlert, setIdAlert] = useState("");
  const [buttonActive, setButtonActive] = useState(true);
  const [account, setAccount] = useState({
    name: "",
    id: "",
    password: "",
    gender: "",
    address: "",
  });
  const [signupState, setSignupState] = useState(0);
  const [pwValid, setPwValid] = useState({
    en: "non-check",
    num: "non-check",
    length: "non-check",
    same: "non-check",
  });

  const onChangeAccount = (e) => {
    //input에 입력될 때마다 account state값 변경되게 하는 함수
    setAccount({
      ...account,
      [e.target.name]: e.target.value,
    });
    if (
      e.target.value.includes("@") &&
      e.target.value.includes(".co") &&
      signupState === 0 //아이디 입력창일때
    ) {
      setButtonActive(false);
      setIdAlert("");
    } else if (signupState === 1) {
      //비밀번호 입력창일때
      const en = /[a-zA-Z]/g;
      const num = /[0-9]/g;
      //영어 포함 검사
      if (en.test(e.target.value)) {
        setPwValid({ ...pwValid, en: "check" });
      } else {
        setPwValid({ ...pwValid, en: "non-check" });
      }
      //숫자 포함 검사
      if (num.test(e.target.value)) {
        setPwValid((prev) => ({ ...prev, num: "check" }));
      } else {
        setPwValid((prev) => ({ ...prev, num: "non-check" }));
      }
      //pw 길이 겁사
      if (7 < e.target.value.length && 21 > e.target.value.length) {
        setPwValid((prev) => ({ ...prev, length: "check" }));
      } else {
        setPwValid((prev) => ({ ...prev, length: "non-check" }));
      }
    } else if (signupState === 2) {
      // 상세정보 입력창일때
      if (
        account.id !== "" &&
        account.password !== "" &&
        account.name !== "" &&
        account.gender !== "" &&
        e.target.value !== ""
      ) {
        setButtonActive(false);
      } else {
        setButtonActive(true);
      }
    } else {
      if (e.target.name === "id") {
        setIdAlert("이메일 형식이 올바르지 않습니다.");
      }
      setButtonActive(true);
    }
  };

  const emailvailate = (e) => {
    e.preventDefault();
    if (buttonActive === false && signupState !== 2) {
      setSignupState(signupState + 1);
      setButtonActive(true);
    } else if (buttonActive === false && signupState === 2) {
      console.log(account);
      //회원가입 확인
      fetch("http://10.58.52.117:3000/auth/signup", {
        method: "post",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify({
          name: account.name,
          email: account.id,
          password: account.password,
          gender: account.gender,
          address: account.address,
        }),
      })
        .then((response) => {
          if (response.status !== 201) {
            throw new Error("error");
          } else {
            alert("회원가입 성공");
            goToLogin();
          }
        })
        .catch((error) => {
          alert("회원가입을 처음부터 다시 진행해주세요");
          window.location.reload();
        });
    }
  };

  const pwMatch = (e) => {
    if (e.target.value === account.password) {
      setPwValid((prev) => ({ ...prev, same: "check" }));
      setButtonActive(false);
    } else {
      setPwValid((prev) => ({ ...prev, same: "non-check" }));
      setButtonActive(true);
    }
  };

  const setGender = (e) => {
    setAccount({
      ...account,
      gender: e.target.value,
    });
  };

  return (
    <>
      <div className="signupWrap">
        <div className="signupBox">
          <div className="signupText">간편가입</div>
          {/* 아이디 입력창 */}
          {signupState === 0 && (
            <form className="idForm" onSubmit={emailvailate}>
              <div className="idGuide">
                로그인에 사용할 <br />
                아이디를 입력해주세요.
              </div>
              <input
                name="id"
                type="text"
                placeholder="아이디 (이메일) 입력"
                onChange={onChangeAccount}
              />
              <div className="signupAlert">{idAlert}</div>
              <button className="Btn" type="submit" disabled={buttonActive}>
                다음
              </button>
            </form>
          )}
          {/* 비밀번호 입력창 */}
          {signupState === 1 && (
            <form className="pwForm" onSubmit={emailvailate}>
              <div className="idGuide">
                로그인에 사용할 <br />
                비밀번호를 입력해주세요.
              </div>
              <input
                name="password"
                type="password"
                placeholder="비밀번호 입력"
                onChange={onChangeAccount}
              />
              <span className={pwValid.en}>영문포함</span>
              <span className={pwValid.num}>숫자포함</span>
              <span className={pwValid.length}>8-20자 이내</span>
              <input
                name="password"
                type="password"
                placeholder="비밀번호 입력"
                onChange={pwMatch}
              />
              <span className={pwValid.same}>비밀번호 일치</span>
              <button
                className="Btn pwBtn"
                type="submit"
                disabled={buttonActive}
              >
                다음
              </button>
            </form>
          )}
          {/* 사용자 상세정보 입력창 */}
          {signupState === 2 && (
            <form className="userInfoForm" onSubmit={emailvailate}>
              <div className="idGuide">
                회원님의 <br />
                상세정보를 입력해주세요.
              </div>
              <input
                name="name"
                type="text"
                placeholder="성함을 입력해주세요."
                onChange={onChangeAccount}
              />
              <div className="genderSelector">
                <label className="genderBox">
                  <input
                    type="radio"
                    name="gender"
                    value="남자"
                    onClick={setGender}
                  />{" "}
                  남자
                </label>
                <label className="genderBox">
                  <input
                    type="radio"
                    name="gender"
                    value="여자"
                    onClick={setGender}
                  />{" "}
                  여자
                </label>
              </div>
              <input
                name="address"
                type="text"
                placeholder="주소를 입력해주세요."
                onChange={onChangeAccount}
              />

              <button className="Btn" type="submit" disabled={buttonActive}>
                회원정보 등록
              </button>
            </form>
          )}
        </div>
      </div>
    </>
  );
};

export default Signup;

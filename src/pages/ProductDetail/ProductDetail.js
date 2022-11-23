import { useState, useRef, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./ProductDetail.scss";
import ReviewPage from "./Review/ReviewPage";

const ProductDetail = () => {
  const navigator = useNavigate();
  const params = useParams();
  const productId = params.productId;

  const images = useRef([]);

  const addCart = () => {
    fetch("http://127.0.0.1:3000/cart", {
      method: "POST",
      headers: {
        authorization: localStorage.getItem("TOKEN"),
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({
        productId: productId,
        amount: amount,
      }),
    })
      .then((response) => {
        if (response.status !== 200) {
          throw new Error("에러 발생!");
        } else {
          navigator("/Cart");
        }
      })
      .catch((error) => alert("장바구니 추가에 실패하였습니다."));
  };

  const setPaymentItem = () => {
    if (localStorage.getItem("TOKEN")) {
      localStorage.setItem(
        "orderList",
        // 동섭님과 형식 맞추기 ,pd데이터 백엔드에서 받아보고 변수명 수정 필요!!!!
        JSON.stringify({
          productId: productId,
          productName: pdData.productName,
          productPrice: pdData.price,
          images: pdData.images,
          brandName: pdData.brandName,
          amount: amount,
        })
      );
      navigator("/Payment");
    } else alert("로그인이 필요한 서비스 입니다.");
  };

  const [showColorOpt, setShowColorOpt] = useState(false);
  const [showSizeOpt, setSHowSizeOpt] = useState(false);
  const [likePd, setLikePd] = useState(false);
  const [showBox, setShowBox] = useState(false);
  const [current, setCurrent] = useState(0);
  const [style, setStyle] = useState({ marginLeft: `-${current}00%` });
  const [number, setNumber] = useState(0);
  const [pdData, setPdData] = useState({});
  const [amount, setAmount] = useState(0);

  const [pickedColor, setPickedColor] = useState("");
  const [pickedSize, setPickedSize] = useState("");

  const imgSize = useRef(images.current.length);

  const token = localStorage.getItem("TOKEN");

  useEffect(() => {
    //통신용입니다
    // fetch(`https://reqres.in/api/users/${productId}`)
    fetch("/data/product.json")
      .then((response) => response.json())
      .then((data) => setPdData(data));
  }, []);

  const onIncrease = () => {
    setNumber((prevNum) => prevNum + 1);
    setAmount(amount + 1);
  };

  const onDecrease = () => {
    if (number <= 0) {
      setNumber(0);
    } else {
      setNumber((prevNum) => prevNum - 1);
      setAmount(amount - 1);
    }
  };

  const moveSlide = (i) => {
    let nextIndex = current + i;

    if (nextIndex < 0) nextIndex = imgSize.current - 1;
    else if (nextIndex >= imgSize.current) nextIndex = 0;

    setCurrent(nextIndex);
  };

  useEffect(() => {
    setStyle({ marginLeft: `-${current}00%` });
  }, [current]);

  const hendleScrollUp = (e) => {
    if (!window.scrollY) return;

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleScrollDown = (e) => {
    if (window.scrollY) return;

    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <section className="productDetail">
      <div className="topToEndContainer">
        <button className="toTop" onClick={hendleScrollUp}>
          <img src="/images/leedabin/arrowUpSmall.png" alt="toTop" />
        </button>
        <button className="toEnd" onClick={handleScrollDown}>
          <img src="/images/leedabin/arrowDownSmall.png" alt="toEnd" />
        </button>
      </div>
      <div className="productDetailContainer">
        <div className="thumbnailContainer">
          <div className="productThumbnail">
            <div className="arrowsSet">
              <button className="arrowLeft">
                <img
                  src="/images/leedabin/arrowLeft.png"
                  alt="arrowLeft"
                  onClick={() => {
                    moveSlide(-1);
                  }}
                />
              </button>
              <button
                className="arrowRight"
                onClick={() => {
                  moveSlide(1);
                }}
              >
                <img src="/images/leedabin/arrowRight.png" alt="arrowright" />
              </button>
            </div>
            <div className="flexBox" style={style}>
              {pdData.images?.map((image, i) => (
                <img src={image} alt="thumbnail" />
              ))}
            </div>
          </div>
          <section className="productDetailBox">
            <div className="pdNameHeart">
              <div className="pdLeftBox">
                <h1>{pdData?.productName}</h1>
                <span className="score">
                  <span className="starts">
                    <img
                      className="start"
                      src="/images/leedabin/startOrange.png"
                      alt="start"
                    />
                    <img
                      className="start"
                      src="/images/leedabin/startOrange.png"
                      alt="start"
                    />
                    <img
                      className="start"
                      src="/images/leedabin/startOrange.png"
                      alt="start"
                    />
                    <img
                      className="start"
                      src="/images/leedabin/startOrange.png"
                      alt="start"
                    />
                    <img
                      className="start"
                      src="/images/leedabin/startOrange.png"
                      alt="start"
                    />
                  </span>
                </span>
              </div>
              <div className="pdRightBox">
                {token ? (
                  <img
                    className="heartLineIcon"
                    alt="heart"
                    onClick={() => {
                      setLikePd((prev) => !prev);
                    }}
                    src={
                      likePd === false
                        ? "/images/leedabin/heartLine.png"
                        : "/images/leedabin/heartOrange.png"
                    }
                  />
                ) : (
                  <img
                    className="heartLineIcon"
                    alt="heart"
                    src="/images/leedabin/heartLine.png"
                    onClick={() => alert("로그인이 필요한 서비스 입니다!")}
                  />
                )}
              </div>
            </div>
            {pdData[0] !== null && (
              <h2 className="price">
                {Number(pdData.price).toLocaleString()}
                <span>원</span>
              </h2>
            )}
            <section
              className="colorWrapper"
              data-role="selectbox"
              onMouseLeave={() => setShowColorOpt(false)}
            >
              <section className="selectBox">
                <button
                  type="button"
                  className="toggleBtn"
                  onClick={() => setShowColorOpt((prev) => !prev)}
                >
                  COLOR
                  <img
                    src="/images/leedabin/dropDown.png"
                    alt="downArrow"
                    className="ico-down"
                  />
                </button>
                {showColorOpt && (
                  <ul
                    className="selectBoxOption"
                    onClick={() => setShowBox((prev) => !prev)}
                  >
                    <li>
                      <button
                        type="button"
                        className="optionBtn"
                        onClick={() => setPickedColor("Khaki Grey")}
                      >
                        Khaki Grey
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        className="optionBtn"
                        onClick={() => setPickedColor("Black")}
                      >
                        Black
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        className="optionBtn"
                        onClick={() => setPickedColor("Navy")}
                      >
                        Navy
                      </button>
                    </li>
                  </ul>
                )}
              </section>
            </section>
            <section
              className="sizeWrapper"
              data-role="selectbox"
              onMouseLeave={() => setSHowSizeOpt(false)}
            >
              <section className="selectBox">
                <button
                  type="button"
                  className="sizeToggleBtn"
                  onClick={() => setSHowSizeOpt((prev) => !prev)}
                >
                  SIZE
                  <img
                    src="/images/leedabin/dropDown.png"
                    alt="downArrow"
                    className="ico-down"
                  />
                </button>
                {showSizeOpt && (
                  <ul
                    className="selectSizeOption"
                    onClick={() => setSHowSizeOpt((prev) => !prev)}
                  >
                    <li>
                      <button
                        type="button"
                        className="optionBtnS"
                        onClick={() => setPickedSize("SMALL")}
                      >
                        SMALL
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        className="optionBtnM"
                        onClick={() => setPickedSize("MEDIUM")}
                      >
                        MEDIUM
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => setPickedSize("LARGE")}
                        type="button"
                        className="optionBtnL"
                      >
                        LARGE
                      </button>
                    </li>
                  </ul>
                )}
              </section>
            </section>
            {showBox && (
              <section className="itemSelectContainer">
                <div className="itemOptBox">
                  <span className="itemOptName">{pickedColor}</span>
                  <span className="itemPickedSize">{pickedSize}</span>
                  <div className="optBtnContainer">
                    <button className="addOptMinus" onClick={onDecrease}>
                      -
                    </button>
                    <button className="addOptNum">{number}</button>
                    <button className="addOptAdd" onClick={onIncrease}>
                      +
                    </button>
                  </div>
                  <span className="itemOptAll">
                    {Number(pdData.price).toLocaleString()}
                  </span>
                </div>
                <div className="itemOptBottom">
                  <span className="finalPriceKor">총 상품 금액</span>
                  {pdData[0] !== null && (
                    <span className="finalPriceWon">
                      {Number(pdData.price * amount).toLocaleString()}
                      <span className="wonKor">원</span>
                    </span>
                  )}
                </div>
              </section>
            )}
            <div className="orderBtns">
              <button className="addCartBtn" type="button" onClick={addCart}>
                장바구니 담기
              </button>
              <button
                className="buyNowBtn"
                type="button"
                onClick={setPaymentItem}
              >
                바로 구매하기
              </button>
            </div>
          </section>
        </div>
      </div>

      <div>
        <div className="details">
          {pdData.images?.map((image, i) => (
            <img src={image} alt="thumbnail" className="detailsInfo" />
          ))}
        </div>
      </div>
      <ReviewPage pdData={pdData} />
    </section>
  );
};

export default ProductDetail;

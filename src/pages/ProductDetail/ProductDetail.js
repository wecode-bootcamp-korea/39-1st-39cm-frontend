import { useState, useRef, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./ProductDetail.scss";

const ProductDetail = () => {
  const params = useParams();
  const productId = params.productId;

  // console.log(productId);

  const images = useRef([
    {
      src: "/images/leedabin/400_NB_yellow_set.jpg",
    },
    {
      src: "/images/leedabin/400_NB_yellow_set_twogirls.jpg",
    },
    {
      src: "/images/leedabin/400_NB_yellow_sitting.jpg",
    },
  ]);

  const [showColorOpt, setShowColorOpt] = useState(false);
  const [showSizeOpt, setSHowSizeOpt] = useState(false);
  const [likePd, setLikePd] = useState(false);
  const [showBox, setShowBox] = useState(false);
  const [current, setCurrent] = useState(0);
  const [style, setStyle] = useState({ marginLeft: `-${current}00%` });
  const [number, setNumber] = useState(0);
  const [pdData, setPdData] = useState([]);
  const [amount, setAmount] = useState(0);

  const [pickedColor, setPickedColor] = useState("");
  const [pickedSize, setPickedSize] = useState("");

  const imgSize = useRef(images.current.length);

  const token = localStorage.getItem("TOKEN");

  useEffect(() => {
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
              {images.current.map((img, i) => (
                <img key={i} className="img" src={img.src} alt="thumbnail" />
              ))}
            </div>
          </div>
          <section className="productDetailBox">
            <div className="pdNameHeart">
              <div className="pdLeftBox">
                <h1>{pdData[0]?.productName}</h1>
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
                  <span className="reviewSeeMore"> N개 리뷰 보기</span>
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

            {pdData[0] && (
              <h2 className="price">
                {(pdData[0]?.price).toLocaleString()}
                <span>원</span>
              </h2>
            )}
            <section
              className="colorWrapper"
              data-role="selectbox"
              onMouseEnter={() => setShowColorOpt(false)}
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
              onMouseEnter={() => setSHowSizeOpt(false)}
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
                    {(pdData[0]?.price).toLocaleString()}
                  </span>
                  {/* <span className="deleteItem">X</span> */}
                </div>
                <div className="itemOptBottom">
                  <span className="finalPriceKor">총 상품 금액</span>
                  {pdData[0] && (
                    <span className="finalPriceWon">
                      {(pdData[0]?.price * amount).toLocaleString()}
                      <span className="wonKor">원</span>
                    </span>
                  )}
                </div>
              </section>
            )}
            <div className="orderBtns">
              <Link to={"/Cart"}>
                <button className="addCartBtn" type="button">
                  장바구니 담기
                </button>
              </Link>
              <Link to={"/Payment"}>
                <button className="buyNowBtn" type="button">
                  바로 구매하기
                </button>
              </Link>
            </div>
          </section>
        </div>
      </div>
      <section className="details">
        <img
          className="detailsInfo"
          src={pdData[0]?.images[0]}
          alt="임시 상세페이지01"
        />
        <img
          className="detailsInfo2"
          src={pdData[0]?.images[1]}
          alt="임시 상세페이지02"
        />
      </section>
      <section className="reviewContainer">
        <div className="reviewInfo">
          <div className="reviewTopLeftBox">
            <span className="reviewCount">
              리뷰(203)
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
          </div>
          <div className="reviewTopRightBox">
            <span className="reviewRule">
              50자 이상 포토리뷰 작성 시 최대 1,500 마일리지 적립
            </span>
            <div className="divide"></div>
            <span className="writeReview">
              <Link className="linkSet" to="/">
                리뷰쓰기
              </Link>
            </span>
          </div>
        </div>
        <section className="reviewBox">
          <div className="reviewPhoto">
            <img src={pdData[0]?.reviews[0].reviewImage} alt="reviewPhoto" />
          </div>
          <div className="reviewCtx">
            <h3 className="reviewTitle">{pdData[0]?.reviews[0].reviewUser}</h3>
            <span className="ctx">{pdData[0]?.reviews[0].reviewContent}</span>
          </div>
        </section>
      </section>
    </section>
  );
};

export default ProductDetail;

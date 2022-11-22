import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "./ProductDetail.scss";

const ProductDetail = () => {
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
  const [likePd, setLikePd] = useState(false);
  const [showBox, setShowBox] = useState(false);
  const [current, setCurrent] = useState(0);
  const [style, setStyle] = useState({ marginLeft: `-${current}00%` });
  const imgSize = useRef(images.current.length);
  const token = localStorage.getItem("TOKEN");

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
                <h1>뉴발란스 숏다운 (3color)</h1>
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
                  />
                )}
              </div>
            </div>
            <h2 className="price">
              297,000
              <span>원</span>
            </h2>
            <section className="colorWrapper" data-role="selectbox">
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
                      <button type="button" className="optionBtn">
                        Khaki Grey
                      </button>
                    </li>
                    <li>
                      <button type="button" className="optionBtn">
                        Black
                      </button>
                    </li>
                    <li>
                      <button type="button" className="optionBtn">
                        Navy
                      </button>
                    </li>
                  </ul>
                )}
              </section>
            </section>
            {showBox && (
              <section className="itemSelectContainer">
                <div className="itemOptBox">
                  <span className="itemOptName">BLACK</span>
                  <div className="optBtnContainer">
                    <button className="addOptMinus">-</button>
                    <button className="addOptNum">1</button>
                    <button className="addOptAdd">+</button>
                  </div>
                  <span className="itemOptAll">297,000원</span>
                  <span className="deleteItem">X</span>
                </div>
                <div className="itemOptBottom">
                  <span className="finalPriceKor">총 상품 금액</span>
                  <span className="finalPriceWon">
                    297,000<span className="wonKor">원</span>
                  </span>
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
          src="/images/leedabin/NB_yellow_set.jpeg"
          alt="임시 상세페이지01"
        />
        <img
          className="detailsInfo2"
          src="/images/leedabin/NB_yellow_set_twogirls.jpeg"
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
            <span className="writeReview">리뷰쓰기</span>
          </div>
        </div>
        <section className="reviewBox">
          <div className="reviewPhoto">
            <img
              src="/images/leedabin/NB_yellow_sitting.jpg"
              alt="reviewPhoto"
            />
          </div>
        </section>
        <div className="reviewCtx">
          <h3 className="reviewTitle">@Kim123</h3>
          <span className="ctx">랄라루</span>
        </div>
      </section>
    </section>
  );
};

export default ProductDetail;

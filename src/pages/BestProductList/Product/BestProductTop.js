import React from "react";
import { Link } from "react-router-dom";
import "../Product/BestProductTop.scss";

function BestProductTop(props) {
  const { productName, brandName, price, likesCount, reviewCount, images } =
    props.product;
  return (
    <li className="product">
      <div className="ware">
        <Link to="/ProductDetail" title="제품정보" className="productInfo">
          <div className="wareInfo">
            <img src={images} alt="woman" />
          </div>
        </Link>
        <div className="productExplanation">
          <Link to="/ProductDetail" title="브랜드" className="brand">
            {brandName}
          </Link>
          <Link to="/ProductDetail" title="제품이름" className="wareName">
            <div className="wareShowing">
              <h5 className="wareExplanation">{productName}</h5>
              <div className="price">
                <strong className="discountPrice">{price}</strong>
              </div>
            </div>
          </Link>
          <div className="like">
            <button
              className="heart"
              onClick={() => alert("로그인이 필요합니다. 로그인 하시겠습니까?")}
            >
              <img
                src="/images/kimdongki/heart.svg"
                width={16}
                height={16}
                viewBox="0 0 18 18"
              ></img>
              {likesCount}
            </button>
            <Link to="/ProductDetail" className="comment">
              <img
                src="/images/kimdongki/comment.svg"
                width={16}
                height={16}
                viewBox="0 0 15 16"
              ></img>
              <span className="review">{reviewCount}</span>
            </Link>
          </div>
        </div>
      </div>
    </li>
  );
}

export default BestProductTop;

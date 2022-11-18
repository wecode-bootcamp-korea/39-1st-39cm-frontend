import React from "react";
import { Link } from "react-router-dom";

function BestProductBottom(props) {
  const { productName } = props.product;
  return (
    <li className="product">
      <div className="ware">
        <Link to="/ProductDetail" title="제품정보" className="productInfo">
          <div className="wareInfo">
            <img src="/images/kimdongki/woman.jpg" alt="woman" />
          </div>
        </Link>
        <div className="productExplanation">
          <Link to="/ProductDetail" title="브랜드" className="brand">
            브랜드
          </Link>
          <Link to="/ProductDetail" title="제품이름" className="wareName">
            <div className="wareShowing">
              <h5 className="wareExplanation">{productName}</h5>
              <div className="price">
                <strong className="discountPrice">460,750</strong>
              </div>
            </div>
          </Link>
          <div className="like">
            <button className="heart">
              <img
                src="/images/kimdongki/heart.svg"
                width={16}
                height={16}
                viewBox="0 0 18 18"
              ></img>
              9,184
            </button>
            <Link to="/ProductDetail" className="comment">
              <img
                src="/images/kimdongki/comment.svg"
                width={16}
                height={16}
                viewBox="0 0 15 16"
              ></img>
              <span className="review">644</span>
            </Link>
          </div>
        </div>
      </div>
    </li>
  );
}

export default BestProductBottom;

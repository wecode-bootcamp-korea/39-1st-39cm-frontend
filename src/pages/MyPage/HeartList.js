import React, { useEffect, useState } from "react";
import "./MyPage.scss";
import { Link } from "react-router-dom";

function HeartList({ productId }) {
  const [productInfo, setProductInfo] = useState();
  const ipAddress = "13.124.197.217";

  useEffect(() => {
    fetch(`http://${ipAddress}:3000/products/${productId}`)
      .then((response) => response.json())
      .then((result) => {
        setProductInfo(result.product[0]);
      });
  }, [productId]);

  return (
    <ul className="likeLists">
      {productInfo && (
        <li className="likeListInfo">
          <Link to={`/ProductDetail/${productId}`} className="productLike">
            <div className="imgBox">
              <div className="imgIn">
                <img src={productInfo.images[0]} alt="product" />
              </div>
            </div>
            <div className="info">
              <p className="text">{productInfo.productName}</p>
            </div>
          </Link>
        </li>
      )}
    </ul>
  );
}

export default HeartList;

import React, { useState } from "react";
import { Link } from "react-router-dom";

function BestProductBottom(props) {
  const {
    productId,
    productName,
    brandName,
    price,
    likesCount,
    reviewCount,
    images,
  } = props.product;

  const [isLiked, setIsLiked] = useState(false);

  const login = localStorage.getItem("TOKEN");
  // const [like, setLike] = useState(false);

  //상품의 좋아요 유무 검사
  // useEffect(() => {
  //   fetch(`http://127.0.0.1:3000/likes/${productId}`, {
  //     headers: {
  //       authorization: localStorage.getItem("TOKEN"),
  //     }
  //       .then((response) => response.json())
  //       .then((result) => setIsLiked(result)),
  //   });
  // }, []);

  return (
    <li key={props.index} className="product">
      <div className="ware">
        <Link
          to={`/ProductDetail/${productId}`}
          title="제품정보"
          className="productInfo"
        >
          <div className="wareInfo">
            <img src={images} alt="woman" />
          </div>
        </Link>
        <div className="productExplanation">
          <Link
            to={`/ProductDetail/${productId}`}
            title="브랜드"
            className="brand"
          >
            {brandName}
          </Link>
          <Link
            to={`/ProductDetail/${productId}`}
            title="제품이름"
            className="wareName"
          >
            <div className="wareShowing">
              <h5 className="wareExplanation">{productName}</h5>
              <div className="price">
                <strong className="discountPrice">{price}</strong>
              </div>
            </div>
          </Link>
          <div className="like">
            {login ? (
              <img
                className="heart"
                alt="heart_img"
                onClick={() => {
                  if (isLiked === true) {
                    fetch(`http://127.0.0.1:3000/likes${productId}`, {
                      method: "delete",
                      headers: {
                        "Content-Type": "application/json;charset=utf-8",
                        authorization: login,
                      },
                    })
                      .then((response) => {
                        if (response.status !== 201) {
                          throw new Error("error");
                        } else {
                          //fetch 성공시
                          console.log("좋아요 삭제 성공");
                        }
                      })
                      .catch((error) => {
                        console.log("좋아요 삭제 실패");
                        setIsLiked(!isLiked);
                      });
                  } else {
                    fetch(`http://127.0.0.1:3000/likes${productId}`, {
                      method: "post",
                      headers: {
                        "Content-Type": "application/json;charset=utf-8",
                        authorization: login,
                      },
                    })
                      .then((response) => {
                        if (response.status !== 201) {
                          throw new Error("error");
                        } else {
                          //fetch 성공시
                          console.log("좋아요 추가 성공");
                        }
                      })
                      .catch((error) => {
                        console.log("좋아요 추가 실패");
                      });
                    setIsLiked(!isLiked);
                  }
                }}
                src={
                  isLiked === false
                    ? "/images/kimdongki/heart.png"
                    : "/images/kimdongki/heartRed.png"
                }
              />
            ) : (
              <img
                className="heart"
                alt="heart_img"
                src="/images/kimdongki/heart.png"
                onClick={() => alert("로그인이 필요한 서비스 입니다!")}
              />
            )}
            {likesCount}

            <Link to={`/ProductDetail/${productId}`} className="comment">
              <img
                src="/images/kimdongki/comment.png"
                width={16}
                height={16}
                viewBox="0 0 15 16"
                alt="comment_img"
              />
              <span className="review">{reviewCount}</span>
            </Link>
          </div>
        </div>
      </div>
    </li>
  );
}

export default BestProductBottom;

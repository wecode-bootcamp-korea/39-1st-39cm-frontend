import React from "react";
import "./MyPage.scss";

function ReviewList({ reviewInfo }) {
  return (
    <>
      {reviewInfo && (
        <div className="reviewList">
          <div className="frame">
            <img
              calssName="reviewThb"
              src={reviewInfo.reviewImage}
              alt="miniThumbnail"
            />
          </div>
          <span className="reviewProdutName">{reviewInfo.productName}</span>
          <span className="reviewBrandName">{reviewInfo.productBrand}</span>
          <span className="reviewTitle">{reviewInfo.reviewTitle}</span>
          <span className="reviewCtx">{reviewInfo.reviewContent}</span>
        </div>
      )}
    </>
  );
}

export default ReviewList;

import React from "react";
import "./ReviewPage.scss";

const ReviewPage = ({ pdData }) => {
  return (
    <>
      <section className="reviewContainer">
        <div className="reviewInfo">
          <div className="reviewTopLeftBox">
            <span className="reviewCount">
              리뷰 Review
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
          </div>
        </div>
        {pdData.reviews &&
          pdData.reviews.map((el) => {
            return (
              <div className="reviewbBox">
                <div className="reviewPhoto">
                  <img
                    className="reviewImage"
                    src={el.reviewImage}
                    alt="reviewPhoto"
                  />
                  <div className="reviewCtx">
                    <h3 className="reviewTitle">{el.reviewTitle}</h3>
                    <h3 className="reviewUser">{el.reviewUser}</h3>
                    <span className="ctx">{el.reviewContent}</span>
                  </div>
                </div>
              </div>
            );
          })}
      </section>
    </>
  );
};

export default ReviewPage;

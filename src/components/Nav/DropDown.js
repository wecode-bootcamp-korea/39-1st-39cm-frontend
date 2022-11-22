import React from "react";

const DropDown = ({ obj, mouseLeave }) => {
  return (
    <>
      <div onMouseLeave={mouseLeave} className="dropDown">
        <div className="dropDownRow">
          <ul className="dropDownCategories">
            <li className="category">{obj.category} </li>
            <li className="top">{obj.top}</li>
            <li className="bottom">{obj.bottom}</li>
            <li className="shoes">{obj.shoes}</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default DropDown;

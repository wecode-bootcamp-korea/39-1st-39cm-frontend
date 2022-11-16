import "./Nav.scss";
import "./Nav";

export default function DownNavUni(props) {
  return (
    <>
      <div className="hoverMenu" {...props}>
        <div className="hovRow1">
          <ul className="categories">
            <li className="subcategory01">공용 > </li>
            <li className="subcategory02">상의</li>
            <li className="subcategory03">하의</li>
            <li className="subcategory04">신발</li>
          </ul>
        </div>
      </div>
    </>
  );
}

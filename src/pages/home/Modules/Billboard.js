import React from "react";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import billboard from "assets/images/billboard.jpg";
import billboardMobile from "assets/images/billboard-mobile.jpg";
function Billboard() {
  return (
    <div className="container">
      <div className="billboard">
        <div className="billboard-pc">
          <img src={billboard} alt="" />
        </div>
        <div className="billboard-mobile">
          <img src={billboardMobile} alt="" />
        </div>
        <div className="billboard-content">
          <h1>24 hour flash sale </h1>
          <p>
            Learn with our top rated courses starting at just US $ 11.99. This
            promotion ends tonight!
          </p>
          <div className="billboard-content__input">
            <input type="text" placeholder="What do you want to learn ?" />
            <button>
              <SearchOutlinedIcon className="billboard-icon" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Billboard;

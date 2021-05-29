import React, { useState } from "react";
import { FiCheck } from "react-icons/fi";

function SubmenuMobile({ item }) {
  const [subnav, setSubNav] = useState(false);
  const showSubNav = () => setSubNav(!subnav);
  return (
    <div className="submenu-mobile">
      <h1 className="submenu-mobile__heading" onClick={item.subNav && showSubNav}>
        {item.title}
        {item.subNav && subnav ? item.iconOpen : item.subNav ? item.iconClose : null}
      </h1>
      <div className="submenu-dropdown" id={`dropdown-${item.id}`}>
        {subnav &&
          item.subNav.map((item) => {
            return (
              <div className="submenu-dropdown__item" key={item.id}>
                <label className={`radio`}>
                  <input type="radio" />
                  <span></span>
                  <FiCheck className="filter-check-icon" />
                </label>
                {subnav && item.icon1 ? item.icon1 : null}
                {subnav && item.icon2 ? item.icon2 : null}
                {subnav && item.icon3 ? item.icon3 : null}
                {subnav && item.icon4 ? item.icon4 : null}
                {subnav && item.icon5 ? item.icon5 : null}
                <p className="filter-label">{item.subNavTitle}</p>
                <p className="filter-count">({item.count})</p>
              </div>
            );
          })}
        {/* <div>
					{item.subNav.length > 4 ? (
						<div className='show-more'>
							<p>Show more</p>
							<FaAngleDown className='show-more-icon ' />
						</div>
					) : null}
				</div> */}
      </div>
    </div>
  );
}

export default SubmenuMobile;

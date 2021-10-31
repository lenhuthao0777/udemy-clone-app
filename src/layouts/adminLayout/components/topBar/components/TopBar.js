import UdeAvatar from "components/avatar";
import React from "react";
import { AiTwotoneMail } from "react-icons/ai";
import { IoMdNotifications } from "react-icons/io";
import { useSelector } from "react-redux";
import "../assets/Topbar.scss";
import LOGO from "assets/images/logoudemy.svg";
import avatar from "assets/images/avatar1.jpg";
import { Link } from "react-router-dom";
function TopBar() {
  const { userInfo } = useSelector((state) => state.authReducer);
  return (
    <div className="topbar">
      <Link className="logo" to="/">
        <img src={LOGO} alt="logo" />
      </Link>
      <div className="topbar-noti">
        <div className="item">
          <p>
            <IoMdNotifications className="icon" />
          </p>
        </div>
        <div className="item">
          <p>
            <AiTwotoneMail className="icon" />
          </p>
        </div>
        <div className="topbar-avatar">
          {userInfo ? <span>Hi ! - {userInfo.taiKhoan}</span> : null}
          <UdeAvatar size="AvatarSm" AvatarSrc={avatar} />
        </div>
      </div>
    </div>
  );
}

export default TopBar;

import UdeAvatar from "components/avatar";
import React from "react";
import { AiOutlineMenuUnfold, AiOutlineSearch, AiTwotoneMail } from "react-icons/ai";
import { IoMdNotifications } from "react-icons/io";
import { useSelector } from "react-redux";
function TopBar({ showSideBar, setShowSideBar }) {
    const { userInfo } = useSelector((state) => state.authReducer);
    return (
        <div className="topbar">
            <div className="topbar-content">
                <div className="topbar-content__left">
                    <div className="topbar-icon">
                        <div className="topbar-icon__content">
                            <span onClick={() => setShowSideBar(!showSideBar)}>
                                <AiOutlineMenuUnfold />
                            </span>
                            <span>
                                <AiOutlineSearch />
                            </span>
                        </div>
                    </div>
                </div>
                <div className="topbar-content__right">
                    <div className="topbar-notifi">
                        <ul className="topbar-notifi__list">
                            <li className="topbar-notifi__list--item">
                                <span>
                                    <IoMdNotifications />
                                </span>
                                <span className="notifi-quantity">7+</span>
                            </li>
                            <li className="topbar-notifi__list--item">
                                <span>
                                    <AiTwotoneMail />
                                </span>
                                <span className="notifi-quantity">7+</span>
                            </li>
                        </ul>
                    </div>
                    <div className="topbar-avatar">
                        {userInfo ? <span>Hello {userInfo.taiKhoan}</span> : <span>Hello ?</span>}
                        <UdeAvatar size="AvatarSm" AvatarSrc="./img/avatar3.jpg" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TopBar;

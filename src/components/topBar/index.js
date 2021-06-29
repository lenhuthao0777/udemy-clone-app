import UdeAvatar from "components/avatar";
import React from "react";
import { AiOutlineMenuUnfold, AiOutlineSearch, AiTwotoneMail } from "react-icons/ai";
import { IoMdNotifications } from "react-icons/io";
function TopBar({ showSideBar, setShowSideBar }) {
    return (
        <div className="topbar">
            <div className="topbar-content">
                <div className="topbar-content__left">
                    <div className="topbar-icon" onClick={() => setShowSideBar(!showSideBar)}>
                        <div className="topbar-icon__content">
                            <span>
                                <AiOutlineMenuUnfold />
                            </span>
                            <span>
                                <AiOutlineSearch />
                            </span>
                        </div>
                    </div>
                    <div className="topbar-search">
                        <form action="">
                            <input type="text" />
                            <span>
                                <AiOutlineSearch />
                            </span>
                        </form>
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
                        <span>Hello john</span>
                        <UdeAvatar size="AvatarSm" AvatarSrc="https://s.udemycdn.com/topic-images/lohp-topic-banners/GettyImages-1166389425_opt.jpg" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TopBar;

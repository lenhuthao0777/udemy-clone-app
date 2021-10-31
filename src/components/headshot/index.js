import React from "react";
import UdeAvatar from "../avatar/index";
import avatar from "assets/images/avatar1.jpg";
function HeadShot() {
  return (
    <div>
      <div className="headshot-banner">
        <div className="headshot-banner__content"></div>
        <UdeAvatar AvatarSrc={avatar} size="AvatarMd" />
      </div>
    </div>
  );
}

export default HeadShot;

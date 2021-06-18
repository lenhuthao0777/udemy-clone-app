import UdeAvatar from "src/components/avatar";
import React from "react";
import CommentsItem from "./CommentsItem";
function Comments() {
    return (
        <div className="comments">
            <div className="comments-container">
                <div className="comments-content">
                    <div className="comments-body">
                        <div className="comments-img">
                            <UdeAvatar size="AvatarMd" AvatarSrc="./img/avatar1.jpg" />
                        </div>
                        <CommentsItem />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Comments;

import UdeAvatar from "components/avatar";
import React from "react";
import CommentsItem from "./CommentsItem";
function Comments() {
    return (
        <div className="comments">
            <div className="comments-container">
                <div className="comments-content">
                    <div className="comments-body">
                        <div className="comments-img">
                            <UdeAvatar size="AvatarMd" AvatarSrc="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" />
                        </div>
                        <CommentsItem />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Comments;

import React from "react";
import { BsFillStarFill } from "react-icons/bs";

function SlideMenu() {
    return (
        <div className="slide-menu">
            <div className="slide-menu__content">
                <div className="slide-menu__info">
                    <h3>The Web Developer Bootcamp 2021</h3>
                    <div className="slide-menu__rates">
                        <span>4.6</span>
                        <span>
                            <BsFillStarFill />
                        </span>
                        <span>(49.,234)</span>
                        <span>226,258 students</span>
                    </div>
                </div>
                <div className="slide-menu__price">
                    <p>$89.00</p>
                    <button>Buy now</button>
                </div>
            </div>
        </div>
    );
}

export default SlideMenu;

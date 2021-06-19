import React, { useState } from "react";
import { BsFillStarFill } from "react-icons/bs";
function NavbarScroll() {
    const [showNav, setShowNav] = useState(false);
    const showNavbar = () => {
        if (window.scrollY >= 100) {
            setShowNav(true);
        } else {
            setShowNav(false);
        }
    };
    window.addEventListener("scroll", showNavbar);
    return (
        <div className={`navbar-scroll ${showNav ? "open" : ""}`}>
            <div className="navbar-scroll__content">
                <h3>The Web Developer Bootcamp 2021</h3>
                <div className="navbar-scroll__content-rates">
                    <span>4.6</span>
                    <span>
                        <BsFillStarFill />
                    </span>
                    <span>(49,243)</span>
                    <span>226.258 students</span>
                </div>
            </div>
        </div>
    );
}

export default NavbarScroll;

import React, { useState } from "react";
import { useEffect } from "react";
import { BsFillStarFill } from "react-icons/bs";
function NavbarScroll({ course }) {
    const [navIsOpen, setNavIsOpen] = useState(false);
    useEffect(() => {
        const showNavbar = () => {
            if (window.scrollY >= 100) {
                setNavIsOpen(true);
            } else {
                setNavIsOpen(false);
            }
        };
        window.addEventListener("scroll", showNavbar);
        return()=> window.removeEventListener("scroll", showNavbar)
    }, [navIsOpen]);
    return (
        <div className={`navbar-scroll ${navIsOpen ? "open" : ""}`}>
            <div className="navbar-scroll__content">
                <h3>{course.tenKhoaHoc}</h3>
                <div className="navbar-scroll__content-rates">
                    <span>4.6</span>
                    <span>
                        <BsFillStarFill />
                    </span>
                    <span>({course.luotXem})</span>
                    <span>226.258 students</span>
                </div>
            </div>
        </div>
    );
}

export default NavbarScroll;

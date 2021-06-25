import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "./Navbar";
import { Search } from "actions/Search";
function Header() {
    return (
        <nav>
            <Navbar />
        </nav>
    );
}

export default Header;

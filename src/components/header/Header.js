import React from "react";
import { useHistory } from "react-router-dom";
import Navbar from "./Navbar";
function Header() {
    const history = useHistory();
    return (
        <nav>
            <Navbar history={history} />
        </nav>
    );
}

export default Header;

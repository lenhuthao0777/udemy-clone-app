import React from "react";
import { Link } from "react-router-dom";
function NotFound() {
    return (
        <div className="notfound">
            <div className="notfound__content">
                <h1>404</h1>
                <h2>Page not found :((</h2>
                <button>
                    <Link to="/">Home Now</Link>
                </button>
            </div>
        </div>
    );
}

export default NotFound;

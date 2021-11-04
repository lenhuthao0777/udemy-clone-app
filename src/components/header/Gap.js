import React from "react";
import { Link } from "react-router-dom";
import { Button } from "components/button";
function Gap() {
  return (
    <>
      <div className="header--navbar__gap-button-business">
        <Link className="header--navbar__gap-button-business-text" to="/">
          Udemy for Business
        </Link>
        <div className="header--navbar__gap-button-business-hover">
          <div className="header--navbar__gap-button-business-hover-content">
            <div className="content-text">
              <span>
                Get your team access to over 5,500 top Udemy courses, anytime,
                anywhere.
              </span>
            </div>
            <Button type="button" color="btn--btn-primary" size="full">
              Try Udemy for Business
            </Button>
          </div>
        </div>
      </div>
      <div className="header--navbar__gap-button-teach">
        <Link className="header--navbar__gap-button-teach-text" to="/home">
          Teach on Udemy
        </Link>
        <div className="header--navbar__gap-button-teach-hover">
          <div className="header--navbar__gap-button-teach-hover-content">
            <div className="content-text">
              <span>
                Turn what you know into an opportunity and reach millions around
                the world.
              </span>
            </div>
            <Button type="button" color="btn--btn-primary" size="full">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Gap;

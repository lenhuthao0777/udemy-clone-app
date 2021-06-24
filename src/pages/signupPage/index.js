import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
function SignUp() {
    return (
        <div className="signup">
            <div className="container">
                <div className="signup-content">
                    <div className="signup-content__heading">
                        <h1>Sign up and start learning!</h1>
                    </div>
                    <form action="" className="signup-form">
                        <div className="signup-form__group">
                            <div className="signup-form__group-content">
                                <FaUserAlt />
                                <input type="text" placeholder="First and last name" />
                                <span>asdasdasdasd</span>
                            </div>
                        </div>
                        <div className="signup-form__group">
                            <div className="signup-form__group-content">
                                <FaUserAlt />
                                <input type="text" placeholder="E-mail" />
                                <span>asdasdasdasd</span>
                            </div>
                        </div>
                        <div className="signup-form__group">
                            <div className="signup-form__group-content">
                                <FaUserAlt />
                                <input type="text" placeholder="Password" />
                                <span>asdasdasdasd</span>
                            </div>
                        </div>
                        <div className="button-signup">
                            <button>Sign Up</button>
                        </div>
                    </form>
                    <div className="signup-content__bottom">
                        <span>By registering, you agree to our terms of use and privacy policy .</span>
                        <h3>
                            Already have an account ? <Link to="/login">To log in</Link>
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUp;

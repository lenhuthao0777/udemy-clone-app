import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

function SignUp() {
    const schema = yup.object().shape({
        firstName: yup.string().required("Password can't be blank"),
        email: yup.string().required("Email can't be blank").min(5, "Email from 5 to 20 characters").max(20, "Email < 20 characters"),
        password: yup.string().required("Password can't be blank"),
    });
    const {
        register,
        handleSubmit,
        formState: { errors },
        control,
    } = useForm({ resolver: yupResolver(schema) });
    const handelForm = (data) => {
        console.log(data);
    };
    return (
        <div className="signup">
            <div className="container">
                <div className="signup-content">
                    <div className="signup-content__heading">
                        <h1>Sign up and start learning!</h1>
                    </div>
                    <form className="signup-form" onSubmit={handleSubmit(handelForm)}>
                        <div className="signup-form__group">
                            <div className="signup-form__group-content">
                                <FaUserAlt />
                                <input type="text" placeholder="First name" {...register("firstName")} />
                                <span>{errors.firstName?.message}</span>
                            </div>
                        </div>
                        <div className="signup-form__group">
                            <div className="signup-form__group-content">
                                <FaUserAlt />
                                <input type="text" placeholder="E-mail" {...register("email")} />
                                <span>{errors.email?.message}</span>
                            </div>
                        </div>
                        <div className="signup-form__group">
                            <div className="signup-form__group-content">
                                <FaUserAlt />
                                <input type="password" placeholder="Password" {...register("password")} />
                                <span>{errors.password?.message}</span>
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

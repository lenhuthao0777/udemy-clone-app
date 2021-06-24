import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {SignUpForm} from "actions/SignUp";
function SignUp() {
    const dispath = useDispatch();
    const { userInfo } = useSelector((state) => state.SignUpFrom);
    console.log(userInfo);
    const schema = yup.object().shape({
        taiKhoan: yup.string().required("UserName can't be blank"),
        email: yup.string().required("Email can't be blank").min(5, "Email from 5 to 20 characters").max(20, "Email < 20 characters"),
        matKhau: yup.string().required("Password can't be blank"),
        hoTen: yup.string().required("Password can't be blank"),
        soDT: yup.string().required("Password can't be blank"),
        maNhom: yup.string().required("Password can't be blank"),
    });
    const {
        register,
        handleSubmit,
        formState: { errors },
        control,
    } = useForm({ resolver: yupResolver(schema) });
    const handelForm = (data) => {
        console.log(data);
        dispath(SignUpForm(data));
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
                                <input type="text" placeholder="User name" {...register("taiKhoan")} />
                                <span>{errors.taiKhoan?.message}</span>
                            </div>
                        </div>
                        <div className="signup-form__group">
                            <div className="signup-form__group-content">
                                <FaUserAlt />
                                <input type="password" placeholder="Password" {...register("matKhau")} />
                                <span>{errors.matKhau?.message}</span>
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
                                <input type="text" placeholder="Full Name" {...register("hoTen")} />
                                <span>{errors.hoTen?.message}</span>
                            </div>
                        </div>
                        <div className="signup-form__group">
                            <div className="signup-form__group-content">
                                <FaUserAlt />
                                <input type="text" placeholder="Phone" {...register("soDT")} />
                                <span>{errors.soDT?.message}</span>
                            </div>
                        </div>
                        <div className="signup-form__group">
                            <div className="signup-form__group-content">
                                <FaUserAlt />
                                <input type="text" placeholder="Group id" {...register("maNhom")} />
                                <span>{errors.maNhom?.message}</span>
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

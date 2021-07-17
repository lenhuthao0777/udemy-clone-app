import { yupResolver } from "@hookform/resolvers/yup";
import { SignUpForm } from "actions/SignUp";
import React from "react";
import { useForm } from "react-hook-form";
import { FaUserAlt } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { AiTwotoneMail,AiFillPhone,AiOutlineNumber } from "react-icons/ai";
import { BsCardChecklist } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import * as yup from "yup";
function SignUp() {
    const dispatch = useDispatch();
    const schema = yup.object().shape({
        taiKhoan: yup.string().required("UserName can't be blank"),
        email: yup.string().required("Email can't be blank").min(5, "Email from 5 to 20 characters").max(30, "Email < 20 characters"),
        matKhau: yup.string().required("Password can't be blank"),
        hoTen: yup.string().required("Full name can't be blank"),
        soDT: yup.string().required("Phone number can't be blank"),
        maNhom: yup.string().required("Group id can't be blank"),
    });
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: yupResolver(schema) });
    const handelForm = (data) => {
        console.log(data);
        dispatch(SignUpForm(data));
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
                            <h3>User Name</h3>
                            <div className="signup-form__group-content">
                                <FaUserAlt />
                                <input type="text" placeholder="User name" {...register("taiKhoan")} />
                                <span>{errors.taiKhoan?.message}</span>
                            </div>
                        </div>
                        <div className="signup-form__group">
                            <h3>Password</h3>
                            <div className="signup-form__group-content">
                                <RiLockPasswordFill />
                                <input type="password" placeholder="Password" {...register("matKhau")} />
                                <span>{errors.matKhau?.message}</span>
                            </div>
                        </div>
                        <div className="signup-form__group">
                            <h3>Email</h3>
                            <div className="signup-form__group-content">
                                <AiTwotoneMail />
                                <input type="text" placeholder="E-mail" {...register("email")} />
                                <span>{errors.email?.message}</span>
                            </div>
                        </div>
                        <div className="signup-form__group">
                            <h3>Full Name</h3>
                            <div className="signup-form__group-content">
                                <BsCardChecklist />
                                <input type="text" placeholder="Full Name" {...register("hoTen")} />
                                <span>{errors.hoTen?.message}</span>
                            </div>
                        </div>
                        <div className="signup-form__group">
                            <h3>Phone Number</h3>
                            <div className="signup-form__group-content">
                                <AiFillPhone />
                                <input type="text" placeholder="Phone" {...register("soDT")} />
                                <span>{errors.soDT?.message}</span>
                            </div>
                        </div>
                        <div className="signup-form__group">
                            <h3>Group Id</h3>
                            <div className="signup-form__group-content">
                                <AiOutlineNumber />
                                <input type="text" placeholder="GP07" {...register("maNhom")} />
                                <span>{errors.maNhom?.message}</span>
                            </div>
                        </div>
                        <div className="button-signup">
                            <input type="submit" placeholder="Sign Up" />
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

import React, { useEffect, useRef, useState } from "react";
import { AiFillPhone, AiTwotoneMail } from "react-icons/ai";
import { BsCardChecklist } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import "../assets/Login_now.scss";
function SignUp({ handleSignUp, success }) {
  const [signUpData, setSignUpData] = useState({
    taiKhoan: "",
    email: "",
    matKhau: "",
    hoTen: "",
    soDT: "",
    maNhom: "GP07",
  });
  const setSuccess = useRef(null);
  const history = useHistory();
  if (success === true) {
    setSuccess.current = setTimeout(() => {
      history.push("/login");
    }, 2000);
  }
  useEffect(() => {
    return () => clearTimeout(setSuccess.current);
  }, []);
  // const schema = yup.object().shape({
  //     taiKhoan: yup.string().required("UserName can't be blank"),
  //     email: yup
  //         .string()
  //         .required("Email can't be blank")
  //         .min(5, "Email from 5 to 20 characters")
  //         .max(30, "Email < 20 characters"),
  //     matKhau: yup.string().required("Password can't be blank"),
  //     hoTen: yup.string().required("Full name can't be blank"),
  //     soDT: yup.string().required("Phone number can't be blank"),
  //     maNhom: yup.string().required("Group id can't be blank"),
  // });
  // const {
  //     register,
  //     handleSubmit,
  //     formState: { errors },
  // } = useForm({ resolver: yupResolver(schema) });
  useEffect(() => {
    if (success === true) toast("Register Success Login Now!");
    if (success === false) toast("Register Failure!");
  });
  const handleChangeInput = (e) => {
    const inputData = { ...signUpData };
    inputData[e.target.name] = e.target.value;
    setSignUpData(inputData);
  };
  const handelForm = (e) => {
    e.preventDefault();
    handleSignUp(signUpData);
  };
  return (
    <div className="signup">
      <div className="container">
        <div className="signup-content">
          <div className="signup-content__heading">
            <h1>Sign up and start learning!</h1>
          </div>
          <form className="signup-form" onSubmit={handelForm}>
            <div className="signup-form__group">
              <h3>User Name</h3>
              <div className="signup-form__group-content">
                <FaUserAlt />
                <input
                  type="text"
                  placeholder="User name"
                  onChange={handleChangeInput}
                  name="taiKhoan"
                />
                <span></span>
              </div>
            </div>
            <div className="signup-form__group">
              <h3>Password</h3>
              <div className="signup-form__group-content">
                <RiLockPasswordFill />
                <input
                  type="password"
                  placeholder="Password"
                  onChange={handleChangeInput}
                  name="matKhau"
                />
                <span></span>
              </div>
            </div>
            <div className="signup-form__group">
              <h3>Email</h3>
              <div className="signup-form__group-content">
                <AiTwotoneMail />
                <input
                  type="text"
                  placeholder="E-mail"
                  onChange={handleChangeInput}
                  name="email"
                />
                <span></span>
              </div>
            </div>
            <div className="signup-form__group">
              <h3>Full Name</h3>
              <div className="signup-form__group-content">
                <BsCardChecklist />
                <input
                  type="text"
                  placeholder="Full Name"
                  onChange={handleChangeInput}
                  name="hoTen"
                />
                <span></span>
              </div>
            </div>
            <div className="signup-form__group">
              <h3>Phone Number</h3>
              <div className="signup-form__group-content">
                <AiFillPhone />
                <input
                  type="text"
                  placeholder="Phone"
                  onChange={handleChangeInput}
                  name="soDT"
                />
                <span></span>
              </div>
            </div>

            <div className="button-signup">
              <input type="submit" placeholder="Sign Up" />
            </div>
          </form>
          <div className="signup-content__bottom">
            <span>
              By registering, you agree to our terms of use and privacy policy .
            </span>
            <h3>
              Already have an account ? <Link to="/login">To log in</Link>
            </h3>
          </div>
        </div>
      </div>

      {/* <div className="login-now">
        <Link to="/login">Login Now!</Link>
      </div> */}
    </div>
  );
}

export default SignUp;

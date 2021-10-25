import { yupResolver } from "@hookform/resolvers/yup";
import AppleIcon from "@material-ui/icons/Apple";
import EmailIcon from "@material-ui/icons/Email";
import FacebookIcon from "@material-ui/icons/Facebook";
import LockIcon from "@material-ui/icons/Lock";
import { login } from "actions/auth";
import { Button } from "components/button";
import qs from "qs";
import React from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useLocation } from "react-router";
import { Link } from "react-router-dom";
import * as yup from "yup";
function Loginpage() {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.authReducer);
  const location = useLocation();
  // controlled compoent: conttrol tat ca moi thu tren dao dien bang state, props
  // uncontrooled component: controll dao dien ko thong qua state , props
  // ca usestate va useref deu dung luu tru data
  // khac: ref thay doi data trong component ko render lai
  // const inputTaiKhoan = useRef();
  // const inputMatKhau = useRef();

  const handelLogin = (value) => {
    console.log(value);
    dispatch(login(value));
  };
  const schema = yup.object().shape({
    taiKhoan: yup
      .string()
      .required("UserName can't be blank")
      .min(4, "UserName from 5 to 20 characters")
      .max(20, "UserName < 20 characters"),
    matKhau: yup.string().required("Password can't be blank"),
  });
  // su dung khi component ko ho tro register
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  // tao schema validation
  // userInfo co data chuyen den trang home
  if (userInfo) {
    const { redirectTo } = qs.parse(location.search, {
      ignoreQueryPrefix: true,
    });
    if (redirectTo) {
      return <Redirect to={redirectTo} />;
    }
    return <Redirect to="/" />;
  }
  return (
    <form onSubmit={handleSubmit(handelLogin)}>
      <div className="form">
        <div className="form__heading">
          <h3>Log into your Udemy account!</h3>
        </div>
        <div className="form__option-login">
          <ul>
            <li className="facebook">
              <Link to="/">
                <FacebookIcon className="facebook-icon" />
                Continue with Facebook
              </Link>
            </li>
            <li className="google">
              <Link to="/">
                <FcGoogle className="google-icon" />
                Continue with Google
              </Link>
            </li>
            <li className="apple">
              <Link to="/">
                <AppleIcon className="apple-icon" />
                Continue with Apple
              </Link>
            </li>
          </ul>
        </div>
        <div className="form__login">
          <div className="form-groups">
            <div className="input username">
              <EmailIcon className="email-icon" />
              <input
                type="text"
                placeholder="E-Mail"
                {...register("taiKhoan")}
              />
              <span>{errors.taiKhoan?.message}</span>
            </div>
          </div>
          <div className="form-groups">
            <div className="input password">
              <LockIcon className="lock-icon" />
              <input
                type="password"
                placeholder="Password"
                {...register("matKhau", { required: true })}
              />
              <span>{errors.matKhau?.message}</span>
            </div>
          </div>
        </div>
        <div className="button-form__login">
          <Button size="md" color="btn--btn--primary">
            Login
          </Button>
          <span>or</span>
          <Link className="password-link" to="/">
            Forgot your password.
          </Link>
        </div>
        <div className="form-footer">
          <p>
            You do not have an account ?<Link to="/signup"> Register now</Link>
          </p>
          <p>Connect with your organization</p>
        </div>
      </div>
    </form>
  );
}

export default Loginpage;

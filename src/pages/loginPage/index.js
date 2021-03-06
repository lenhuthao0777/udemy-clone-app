import { yupResolver } from "@hookform/resolvers/yup";
import AppleIcon from "@material-ui/icons/Apple";
import FacebookIcon from "@material-ui/icons/Facebook";
import LockIcon from "@material-ui/icons/Lock";
import { login } from "actions/auth";
import { Button } from "components/button";
import qs from "qs";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { BiUser } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect, useLocation } from "react-router-dom";
import * as yup from "yup";
import { toast } from "react-toastify";
function Loginpage() {
  const dispatch = useDispatch();
  const { userInfo, error, status } = useSelector((state) => state.authReducer);
  const location = useLocation();
  // controlled compoent: conttrol tat ca moi thu tren dao dien bang state, props
  // uncontrooled component: controll dao dien ko thong qua state , props
  // ca usestate va useref deu dung luu tru data
  // khac: ref thay doi data trong component ko render lai
  // const inputTaiKhoan = useRef();
  // const inputMatKhau = useRef();

  const handelLogin = (value) => {
    dispatch(login(value));
  };
  useEffect(() => {
    const noti = (noti) => toast(noti);
    if (status === 200) noti("Login Success!");
    if (status === 500) noti(error);
  }, [status, error]);
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
    <form className="form">
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
            <BiUser className="email-icon" />
            <input
              type="text"
              placeholder="User Name"
              {...register("taiKhoan")}
            />
            <span>{errors?.taiKhoan?.message}</span>
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
            <span>{errors?.matKhau?.message}</span>
          </div>
        </div>
      </div>
      <div className="button-form__login">
        <Button
          size="md"
          color="btn--btn--primary"
          onClick={handleSubmit(handelLogin)}
        >
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
    </form>
  );
}

export default Loginpage;

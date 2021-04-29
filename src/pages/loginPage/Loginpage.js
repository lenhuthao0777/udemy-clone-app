import React, { useRef } from "react";
import { useForm, Controller } from "react-hook-form";
import { Input, FormGroup, Label } from "reactstrap";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../actions/auth";
import { useEffect } from "react";
import { Redirect, useLocation } from "react-router";
import qs from "qs";
import FacebookIcon from "@material-ui/icons/Facebook";
import AppleIcon from "@material-ui/icons/Apple";
import EmailIcon from "@material-ui/icons/Email";
import LockIcon from "@material-ui/icons/Lock";
import { Link } from "react-router-dom";
import { Button } from "../../components/button/Button";
import { FcGoogle } from "react-icons/fc";
function Loginpage() {
	const dispatch = useDispatch();
	const { userInfo, isLoading, error } = useSelector(
		(state) => state.authReducer
	);
	const location = useLocation();
	// controlled compoent: conttrol tat ca moi thu tren dao dien bang state, props
	// uncontrooled component: controll dao dien ko thong qua state , props
	// ca usestate va useref deu dung luu tru data
	// khac: ref thay doi data trong component ko render lai
	// const inputTaiKhoan = useRef();
	// const inputMatKhau = useRef();

	const handelLogin = (value) => {
		// console.log(inputTaiKhoan.current.value);
		// console.log(inputMatKhau.current.value);
		console.log(value);
		dispatch(login(value));
	};
	const schema = yup.object().shape({
		taiKhoan: yup
			.string()
			.required("tai khoan ko dc de trong")
			.min(5, "tai khoan tu 5 den 20 ky tu")
			.max(20, "tai khoan < 20 ky tu"),
		matKhau: yup.string().required("mat khau ko dc de trong"),
	});
	const {
		register,
		handleSubmit,
		formState: { errors },
		// su dung khi component ko ho tro register
		control,
	} = useForm({ resolver: yupResolver(schema) });
	console.log(errors);

	// tao schema validation
	// userInfo co data chuyen den trang home
	if (userInfo) {
		const { redirectTo } = qs.parse(location.search, {
			ignoreQueryPrefix: true,
		});

		if (redirectTo) {
			return <Redirect to={redirectTo} />;
		}

		return <Redirect to='/' />;
	}
	return (
		<form onSubmit={handleSubmit(handelLogin)}>
			{/* <h1>Login page</h1>
			<input
				type='text'
				{...register('taiKhoan', {
					required: {
						value: true,
						message: 'tai khoan khong duoc de trong',
					},
					minLength: {
						value: 5,
						message: 'tai khoan tu 5 den 20 ky tu',
					},
					maxLength: {
						value: 20,
						message: 'tai khoan < 20 ky tu',
					},
				})}
				placeholder='tai khoan'
			/>
			{errors.taiKhoan && <div>{errors.taiKhoan.message}</div>}
			<input
				type='text'
				{...register('matKhau', { required: true })}
				placeholder='mat khau'
			/>
			{errors.matKhau && <div>mat khau ko dc de trong</div>} */}
			{/* <FormGroup>
				<Label>Tai Khoan</Label>
				<Input type='text' {...register("taiKhoan")} />
				{errors.taiKhoan && <div>{errors.taiKhoan.message}</div>}
			</FormGroup>
			<FormGroup>
				<Label>Mat Khau</Label>
				<Input type='text' {...register("matKhau")} />
				{errors.matKhau && <div>{errors.matKhau.message}</div>}
			</FormGroup> */}
			{/* <FormGroup>
				<Controller
					name='taiKhoan'
					control={control}
					defaultValue=''
					rules={{
						required: {
							value: true,
							message: 'mat khau ko dc de trong',
						},
					}}
					render={({ field }) => {
						return <Input {...field} />;
					}}
				/>
				{errors.taiKhoan && <div>{errors.taiKhoan.message}</div>}
			</FormGroup> */}
			{/* {error && <div>{error}</div>}
			<button>Login</button> */}
			<div className='form'>
				<div className='form__heading'>
					<h3>Log into your Udemy account!</h3>
				</div>
				<div className='form__option-login'>
					<ul>
						<li className='facebook'>
							<Link to='/'>
								<FacebookIcon className='facebook-icon' />
								Continue with Facebook
							</Link>
						</li>
						<li className='google'>
							<Link to='/'>
								<FcGoogle className='google-icon' />
								Continue with Google
							</Link>
						</li>
						<li className='apple'>
							<Link to='/'>
								<AppleIcon className='apple-icon' />
								Continue with Apple
							</Link>
						</li>
					</ul>
				</div>
				<div className='form__login'>
					<div className='form-groups'>
						<div className='input username'>
							<EmailIcon className='email-icon' />
							<input type='text' placeholder='E-Mail' />
						</div>
						{/* <p>asdasd</p> */}
					</div>
					<div className='form-groups'>
						<div className='input password'>
							<LockIcon className='lock-icon' />
							<input type='password' placeholder='Password' />
						</div>
					</div>
				</div>
				<div className='button-form__login'>
					<Button size='md' color='btn--btn--primary'>
						Login
					</Button>
					<span>or</span>
					<Link className='password-link' to='/'>
						Forgot your password.
					</Link>
				</div>
				<div className='form-footer'>
					<p>
						You do not have an account ?
						<Link to='/'> Register now</Link>
					</p>
					<p>Connect with your organization</p>
				</div>
			</div>
		</form>
	);
}

export default Loginpage;

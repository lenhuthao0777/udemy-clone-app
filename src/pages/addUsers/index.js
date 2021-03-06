// import { yupResolver } from "@hookform/resolvers/yup";
// import { AddUser } from "actions/AddUserAction";
// import React from "react";
// import { useForm } from "react-hook-form";
// import { useDispatch, useSelector } from "react-redux";
// import * as yup from "yup";

// function AddUsers() {
//     const dispatch = useDispatch();
//     const { status, error } = useSelector((state) => state.AddUser);
//     const schema = yup.object().shape({
//         taiKhoan: yup.string().required("User name can't be blank"),
//         matKhau: yup.string().required("Password can't be blank"),
//         hoTen: yup.string().required("Full name can't be blank"),
//         soDT: yup.string().required("Phone number can't be blank"),
//         maLoaiNguoiDung: yup.string().required("User type can't be blank"),
//         maNhom: yup.string().required("Gruop id can't be blank"),
//         email: yup.string().required("Email can't be blank").min(5, "Email from 5 to 20 characters").max(20, "Email < 20 characters"),
//     });
//     const {
//         register,
//         handleSubmit,
//         formState: { errors },
//     } = useForm({ resolver: yupResolver(schema) });
//     const handelForm = (data) => {
//         console.log(data);
//         dispatch(AddUser(data));
//     };
//     return (
//         <div className="form-adds">
//             <form style={{ width: "400px", paddingTop: "50px" }} onSubmit={handleSubmit(handelForm)}>
//                 <h2 style={{ fontSize: "12px", color: "green", textAlign: "right" }}>{status}</h2>
//                 <h2 style={{ fontSize: "12px", color: "red", textAlign: "right" }}>{error}</h2>
//                 <div className="form-group">
//                     <label htmlFor="exampleInputEmail1">User Name</label>
//                     <input type="text" className="form-control" placeholder="User Name" {...register("taiKhoan")} />
//                     <small id="emailHelp" className="form-text" style={{ color: "red" }}>
//                         {errors.taiKhoan?.message}
//                     </small>
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="exampleInputPassword1">Password</label>
//                     <input type="password" className="form-control" placeholder="Password" {...register("matKhau")} />
//                     <small id="emailHelp" className="form-text" style={{ color: "red" }}>
//                         {errors.matKhau?.message}
//                     </small>
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="exampleInputEmail1">Full Name</label>
//                     <input type="text" className="form-control" placeholder="Full Name" {...register("hoTen")} />
//                     <small id="emailHelp" className="form-text" style={{ color: "red" }}>
//                         {errors.hoTen?.message}
//                     </small>
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="exampleInputEmail1">Phone Number</label>
//                     <input type="text" className="form-control" placeholder="Phone Number" {...register("soDT")} />
//                     <small id="emailHelp" className="form-text" style={{ color: "red" }}>
//                         {errors.soDT?.message}
//                     </small>
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="exampleInputEmail1">User Type</label>
//                     <input type="text" className="form-control" placeholder="User Type" {...register("maLoaiNguoiDung")} />
//                     <small id="emailHelp" className="form-text" style={{ color: "red" }}>
//                         {errors.maLoaiNguoiDung?.message}
//                     </small>
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="exampleInputEmail1">Group Id</label>
//                     <input type="text" className="form-control" placeholder="Group Id" {...register("maNhom")} />
//                     <small id="emailHelp" className="form-text" style={{ color: "red" }}>
//                         {errors.maNhom?.message}
//                     </small>
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="exampleInputEmail1">Email address</label>
//                     <input type="email" className="form-control" placeholder="Enter email" {...register("email")} />
//                     <small id="emailHelp" className="form-text" style={{ color: "red" }}>
//                         {errors.email?.message}
//                     </small>
//                 </div>
//                 <button className="btn btn-primary">Submit</button>
//             </form>
//         </div>
//     );
// }

// export default AddUsers;

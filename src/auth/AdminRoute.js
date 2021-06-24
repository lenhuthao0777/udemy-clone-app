// import React from 'react';
// import { Route, Redirect } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// function AdminRoute({ children, ...props }) {
// 	const { userInfo } = useSelector((state) => state.authReducer);
// 	if (!userInfo) {
// 		return <Redirect to={`/login?redirectTo=${props.path}`} />;
// 	}
// 	if (userInfo.maLoaiNguoiDung !== 'GV') {
// 		return <Redirect to='/' />;
// 	}
// 	return <Route {...props}>{children}</Route>;
// }

// export default AdminRoute;

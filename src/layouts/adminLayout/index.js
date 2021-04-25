import React from 'react';
import { Link } from 'react-router-dom';
function AdminLayout({ children }) {
	return (
		<div className='d-flex'>
			<div className='w-25'>
				<h3>CyberLearn</h3>
				<Link className='text' to='/admin/courses'>
					Courses
				</Link>
				<Link to='/admin/users'>Users</Link>
			</div>
			<div className='w-75'>{children}</div>
		</div>
	);
}

export default AdminLayout;

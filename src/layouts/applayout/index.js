import React from "react";
import Header from "src/components/header/Header";
import Footer from "src/components/footer/Footer";
function AppLayout({ children }) {
	return (
		<>
			<Header></Header>
			{children}
			<Footer></Footer>
		</>
	);
}

export default AppLayout;

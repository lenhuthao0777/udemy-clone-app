import React from "react";
import Header from "component/header";
import Footer from "component/footer/Footer";
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

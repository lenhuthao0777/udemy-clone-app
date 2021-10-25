import React from "react";
import Header from "components/header";
import Footer from "components/footer/Footer";
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

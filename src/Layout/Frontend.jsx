import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import '../index.css'

const Layout = () => {
    return (
        <div className="page-container">
            <Header />
            <div className="container-fluid">
                <Outlet />
            </div>
            <Footer />
        </div>
    )
};

export default Layout;
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Part from "../components/Part";

const Layout = () => {
    return <div className="">
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Part></Part>
        <Footer></Footer>
    </div>;
};
export default Layout;
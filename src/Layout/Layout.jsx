import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Part from "../components/Part";

const Layout = () => {
    return <div className="">
        <Navbar></Navbar>
        <Outlet></Outlet>
        <div className="mt-10">
            <Part ></Part>
            <Footer></Footer>
        </div>
    </div>;
};
export default Layout;
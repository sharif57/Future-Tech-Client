

import { FaHome, FaSignOutAlt, } from "react-icons/fa";
import { Link, NavLink, Outlet } from "react-router-dom";
// import UseAdmin from "../../hooks/UseAdmin";
import { BiUser } from "react-icons/bi";
import { GoReport } from "react-icons/go";
import { IoMdNotifications } from "react-icons/io";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";


const Dashboard = () => {
    const { logOut } = useContext(AuthContext)
    const [items, setItems] = useState([]);
    const { user } = useContext(AuthContext)


    // useEffect(() => {
    //     fetch(`http://localhost:5000/post/${user?.email}`)
    //         .then(res => res.json())
    //         .then(data => {
    //             setItems(data);
    //         });
    // }, [user]);

    const handleLogOut = () => {
        logOut()
            .then(() => console.log('logout successfully'))
            .catch(error => console.error(error))

    }

    const isAdmin = false;
    // const [isAdmin] = UseAdmin();
    console.log(isAdmin);

    return (
        <div className="flex ">
            <div className="w-64 min-h-screen bg-black pt-6 ">
                <ul className="menu p-4 space-y-4">
                    {
                        isAdmin ? <>
                            <li>

                                <NavLink to={'/dashboard/postResource'}><FaHome className="size-8 "></FaHome>Admin Profile</NavLink>
                            </li>
                            <li>

                                <NavLink to={'/dashboard/postResource'}><BiUser className="size-8 "></BiUser>Resource Share</NavLink>
                            </li>
                            <li>

                                <NavLink to={'/dashboard/reported'}><GoReport className="size-8 "></GoReport> Reported Comments </NavLink>
                            </li>
                            <li>

                                <NavLink to={'/dashboard/announcementPost'}><IoMdNotifications className="size-8 text-yellow-500" /> Announcement</NavLink>
                            </li>

                        </>

                            :

                            <>
                              
                                
                                <Link to={'/dashboard/profile'}  className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group">
                                    <span className="w-48 h-48 rounded rotate-[-40deg] bg-purple-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                                    <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">Profile</span>
                                </Link>
                             
                                <Link to={'/dashboard/myPost'} className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group">
                                    <span className="w-48 h-48 rounded rotate-[-40deg] bg-purple-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                                    <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">My Posts</span>
                                </Link>


                                <Link to={'/dashboard/blogPostForm'} className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group">
                                    <span className="w-48 h-48 rounded rotate-[-40deg] bg-purple-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                                    <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">Share Blog</span>
                                </Link>

                                <Link to={'/dashboard/bookMark'} className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group">
                                    <span className="w-48 h-48 rounded rotate-[-40deg] bg-purple-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                                    <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">Book Marks</span>
                                </Link>
                            </>
                    }

                    {/* shared nav links */}

                    <div className="divider">OR</div>
                    <li>

                        <NavLink to={'/'}><FaHome className="size-8 "></FaHome>Home</NavLink>
                    </li>
                    <li>

                        <NavLink to={'/'}><FaSignOutAlt className="size-8 "></FaSignOutAlt> <button onClick={handleLogOut}>Log Out</button></NavLink>
                    </li>

                </ul>
            </div>
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;


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
                <ul className="menu p-4">
                    {
                        isAdmin ? <>
                            <li>

                                <NavLink to={'/dashboard/adminProfile'}><FaHome className="size-8 "></FaHome>Admin Profile</NavLink>
                            </li>
                            <li>

                                <NavLink to={'/dashboard/manageUsers'}><BiUser className="size-8 "></BiUser>Manage Users</NavLink>
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
                                {/* <li>

                                    <NavLink to={'/dashboard/profile'}><CgProfile className="size-8"></CgProfile>My Profile</NavLink>
                                </li> */}
                                <li>

                                    <Link to={'/dashboard/profile'} className="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg bg-gradient-to-tr from-blue-600 to-blue-400 text-white shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/40 active:opacity-[0.85] w-full flex items-center gap-4 px-4 capitalize" type="button">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-5 h-5 text-inherit">
                                            <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z"></path>
                                            <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z"></path>
                                        </svg>
                                        <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">Profile</p>
                                    </Link>
                                </li>
                                <li>

                                    <Link to={'/dashboard/myPost'} className="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg bg-gradient-to-tr from-blue-600 to-blue-400 text-white shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/40 active:opacity-[0.85] w-full flex items-center gap-4 px-4 capitalize" type="button">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-5 h-5 text-inherit">
                                            <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z"></path>
                                            <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z"></path>
                                        </svg>
                                        <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">My Posts</p>
                                    </Link>
                                </li>
                               
                                {/* <li>

                                    <NavLink ><BsPostcard className="size-8"></BsPostcard> My Posts </NavLink>
                                </li> */}
                                <li>

                                    <Link to={'/dashboard/blogPostForm'} className="middle none font-sans font-bold center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg bg-gradient-to-tr from-blue-600 to-blue-400 text-white shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/40 active:opacity-[0.85] w-full flex items-center gap-4 px-4 capitalize" type="button">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-5 h-5 text-inherit">
                                            <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z"></path>
                                            <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z"></path>
                                        </svg>
                                        <p className="block antialiased font-sans text-base leading-relaxed text-inherit font-medium capitalize">Share Blog</p>
                                    </Link>
                                </li>
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
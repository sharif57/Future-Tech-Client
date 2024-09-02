

import { Link, NavLink, Outlet } from "react-router-dom";
// import UseAdmin from "../../hooks/UseAdmin";

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import UseAdmin from "../hooks/useAdmin";


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

    // const isAdmin = true;
    const [isAdmin] = UseAdmin();
    // console.log(isAdmin);

    return (
        <div className="flex ">
            <div className="w-64 min-h-screen bg-black pt-6 ">
                <ul className="menu p-4 space-y-4">
                    {
                        isAdmin ? <>
                            
                            <li>

                                <Link to={'/dashboard/adminProfile'} className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group">
                                    <span className="w-48 h-48 rounded rotate-[-40deg] bg-purple-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                                    <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">Admin Profile</span>
                                </Link>
                            </li>
                            <li>

                                <Link to={'/dashboard/userManagement'} className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group">
                                    <span className="w-48 h-48 rounded rotate-[-40deg] bg-purple-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                                    <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">User Management</span>
                                </Link>
                            </li>
                            <li>

                                <Link to={'/dashboard/performance'} className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group">
                                    <span className="w-48 h-48 rounded rotate-[-40deg] bg-purple-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                                    <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">Performance</span>
                                </Link>
                            </li>
                           

                        </>

                            :

                            <>


                                <Link to={'/dashboard/profile'} className="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group">
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
                        <Link to={'/'}
                            type="button"
                            className="bg-white text-center w-48 rounded-2xl h-14 relative font-sans text-black text-xl font-semibold group"
                        >
                            <div
                                className="bg-green-400 rounded-xl h-12 w-1/4 flex items-center justify-center absolute left-1 top-[4px] group-hover:w-[184px] z-10 duration-500"
                            >
                                <svg
                                    width="25px"
                                    height="25px"
                                    viewBox="0 0 1024 1024"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill="#000000"
                                        d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
                                    ></path>
                                    <path
                                        fill="#000000"
                                        d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
                                    ></path>
                                </svg>
                            </div>
                            <p className="translate-x-2">Go Home</p>
                        </Link>
                    </li>
                    <li>

                        {/* <FaSignOutAlt className="size-8 "></FaSignOutAlt> <button >Log Out</button> */}

                        <NavLink to={'/'}><button onClick={handleLogOut}
                            className="group flex items-center justify-start w-11 h-11 bg-red-600 rounded-full cursor-pointer relative overflow-hidden transition-all duration-200 shadow-lg hover:w-32 hover:rounded-lg active:translate-x-1 active:translate-y-1"
                        >
                            <div
                                className="flex items-center justify-center w-full transition-all duration-300 group-hover:justify-start group-hover:px-3"
                            >
                                <svg className="w-4 h-4" viewBox="0 0 512 512" fill="white">
                                    <path
                                        d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"
                                    ></path>
                                </svg>
                            </div>
                            <div
                                className="absolute right-5 transform translate-x-full opacity-0 text-white text-lg font-semibold transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                            >
                                Logout
                            </div>
                        </button>
                        </NavLink>
                    </li>




                </ul>
            </div>
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div >
    );
};

export default Dashboard;
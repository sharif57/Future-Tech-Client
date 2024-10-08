import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)
    console.log(user);

    const handleLogOut = () => {
        logOut()
            .then(() => console.log('logout successfully'))
            .catch(error => console.error(error))

    }

    return <div className="bg-[#191919]">
        <div className="navbar  container mx-auto  ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <ul className="menu menu-horizontal px-1">
                            <li>
                                <a>
                                    <NavLink
                                        className={({ isActive }) =>
                                            isActive
                                                ? 'font-semibold border-b-2  border-spacing-5 transition-all duration-1000 border-yellow-400'
                                                : 'font-normal transition-all '
                                        }
                                        to={'/'}
                                    >
                                        Home
                                    </NavLink>
                                </a>
                            </li>
                            <li>
                                <a>
                                    <NavLink
                                        className={({ isActive }) =>
                                            isActive
                                                ? 'font-semibold border-b-2  border-spacing-5 transition-all duration-1000 border-yellow-400'
                                                : 'font-normal transition-all '
                                        }
                                        to={'/news'}                            >
                                        News
                                    </NavLink>
                                </a>
                            </li>
                            <li>
                                <a>
                                    <NavLink
                                        className={({ isActive }) =>
                                            isActive
                                                ? 'font-semibold border-b-2  border-spacing-5 transition-all duration-1000 border-yellow-400'
                                                : 'font-normal transition-all '
                                        }
                                        to={'/podcasts'}                            >
                                        Podcasts
                                    </NavLink>
                                </a>
                            </li>
                            <li>
                                <a>
                                    <NavLink
                                        className={({ isActive }) =>
                                            isActive
                                                ? 'font-semibold border-b-2  border-spacing-5 transition-all duration-1000 border-yellow-400'
                                                : 'font-normal transition-all '
                                        }
                                        to={'/resNav'}                            >
                                        Resources
                                    </NavLink>
                                </a>
                            </li>


                        </ul>
                    </ul>
                </div>
                <Link to={'/'} className="btn btn-ghost text-xl"><img src="https://i.ibb.co/vYxPFsF/Logo.png" alt="" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <a>
                            <NavLink
                                className={({ isActive }) =>
                                    isActive
                                        ? 'font-semibold border-b-2  border-spacing-5 transition-all duration-1000 border-yellow-400'
                                        : 'font-normal transition-all '
                                }
                                to={'/'}
                            >
                                Home
                            </NavLink>
                        </a>
                    </li>
                    <li>
                        <a>
                            <NavLink
                                className={({ isActive }) =>
                                    isActive
                                        ? 'font-semibold border-b-2  border-spacing-5 transition-all duration-1000 border-yellow-400'
                                        : 'font-normal transition-all '
                                }
                                to={'/news'}                            >
                                News
                            </NavLink>
                        </a>
                    </li>
                    <li>
                        <a>
                            <NavLink
                                className={({ isActive }) =>
                                    isActive
                                        ? 'font-semibold border-b-2  border-spacing-5 transition-all duration-1000 border-yellow-400'
                                        : 'font-normal transition-all '
                                }
                                to={'/podcasts'}                            >
                                Podcasts
                            </NavLink>
                        </a>
                    </li>
                    <li>
                        <a>
                            <NavLink
                                className={({ isActive }) =>
                                    isActive
                                        ? 'font-semibold border-b-2  border-spacing-5 transition-all duration-1000 border-yellow-400'
                                        : 'font-normal transition-all '
                                }
                                to={'/resNav'}                            >
                                Resources
                            </NavLink>
                        </a>
                    </li>


                </ul>
            </div>
            <div className="navbar-end">
                <ul>
                    {
                        !user && (
                            <li>
                                <NavLink to={'/login'} className={'btn btn-warning '}>LogIn</NavLink>
                            </li>
                        )
                    }
                </ul>
                <div className="flex-none z-10">
                    {
                        user && (
                            <div className='dropdown dropdown-end z-50'>
                                <div
                                    tabIndex={0}
                                    role='button'
                                    className='btn btn-ghost btn-circle avatar'
                                >
                                    <div title={user?.displayName} className='w-10 rounded-full'>
                                        <img
                                            referrerPolicy='no-referrer'
                                            alt='User Profile Photo'
                                            src={user?.photoURL}
                                        />
                                    </div>
                                </div>
                                <ul
                                    tabIndex={0}
                                    className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
                                >

                                    <li>
                                        <NavLink className={({ isActive }) => isActive ? 'text-primary font-bold ' : 'font-bold'}>{user?.displayName}</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='dashboard' className={({ isActive }) => isActive ? 'text-primary font-bold ' : 'font-bold'}>Dashboard</NavLink>
                                    </li>

                                    <li className='mt-2'>
                                        <button onClick={handleLogOut} className='btn btn-warning block text-center'>Logout</button>

                                    </li>

                                </ul>

                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    </div>;
};
export default Navbar;



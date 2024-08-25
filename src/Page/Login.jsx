// import { useContext, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { AuthContext } from "../AuthProvider/AuthProvider";
// import Swal from "sweetalert2";
// import { FcGoogle } from "react-icons/fc";

// const Login = () => {

//     const { googleLogin, loginUser } = useContext(AuthContext)
//     const [success, setSuccess] = useState('')
//     const [error, setError] = useState('')
//     const navigate = useNavigate()


//     const handleLogin = (e) => {
//         e.preventDefault();
//         const email = e.target.email.value;
//         const password = e.target.password.value;
//         console.log(email, password);

//         loginUser(email, password)
//             .then(() => {

//                 navigate(location?.state ? location.state : '/')
//                 // setSuccess(alert('user login successfully'))
//                 setSuccess(
//                     setError(Swal.fire({
//                         title: 'Success!',
//                         text: 'user login successfully',
//                         icon: 'success',
//                         confirmButtonText: 'Cool'
//                     }))
//                 )
//             })
//             .catch(error => setError(error.message))

//     }

//     const handleGoogleLogin = () => {
//         navigate(location?.state ? location.state : '/')
//         googleLogin()
//     }

//     return <div>
//         <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
//             <div className="sm:mx-auto sm:w-full sm:max-w-sm">
//                 <img
//                     alt="Your Company"
//                     src="https://i.ibb.co/vYxPFsF/Logo.png"
//                     className="mx-auto h-10 w-auto"
//                 />
//                 <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
//                     Login your account
//                 </h2>
//             </div>

//             <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
//                 <form onSubmit={handleLogin}
//                     action="#" method="POST" className="space-y-6">
//                     <div>
//                         <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">
//                             Email address
//                         </label>
//                         <div className="mt-2">
//                             <input
//                                 name="email"
//                                 type="email"
//                                 placeholder="Enter your email"
//                                 required
//                                 className="block w-full px-4 rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                             />
//                         </div>
//                     </div>

//                     <div>
//                         <div className="flex items-center justify-between">
//                             <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">
//                                 Password
//                             </label>

//                         </div>
//                         <div className="mt-2">
//                             <input
//                                 name="password"
//                                 type="password"
//                                 placeholder="Enter your password"
//                                 required
//                                 className="block w-full px-4 rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                             />
//                         </div>
//                     </div>

//                     <div>
//                         <button
//                             type="submit"
//                             className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//                         >
//                             Sign in
//                         </button>
//                     </div>
//                 </form>

//                 <button onClick={handleGoogleLogin} className="btn mt-3 bg-gray-50 w-full"><FcGoogle className="size-10" /></button>

//                 <p className="mt-10 text-center text-sm text-white">
//                     Not a member?{' '}
//                     <Link to={'/register'} href="#" className="font-semibold leading-6  px-2 text-indigo-600 hover:text-indigo-500">
//                         Create a new account
//                     </Link>
//                 </p>
//             </div>
//         </div>
//     </div>;
// };
// export default Login;

import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
    const { googleLogin, loginUser } = useContext(AuthContext);
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        
        loginUser(email, password)
            .then(() => {
                navigate(location?.state ? location.state : '/');
                setSuccess(
                    Swal.fire({
                        title: 'Success!',
                        text: 'User login successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                );
            })
            .catch(error => {
                setError(error.message);
                Swal.fire({
                    title: 'Error!',
                    text: error.message,
                    icon: 'error',
                    confirmButtonText: 'Try Again'
                });
            });
    };

    const handleGoogleLogin = () => {
        googleLogin()
            .then(() => {
                navigate(location?.state ? location.state : '/');
            })
            .catch(error => {
                setError(error.message);
                Swal.fire({
                    title: 'Error!',
                    text: error.message,
                    icon: 'error',
                    confirmButtonText: 'Try Again'
                });
            });
    };

    return (
        <div>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                        alt="Your Company"
                        src="https://i.ibb.co/vYxPFsF/Logo.png"
                        className="mx-auto h-10 w-auto"
                    />
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
                        Login your account
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form onSubmit={handleLogin} className="space-y-6">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    name="email"
                                    type="email"
                                    placeholder="Enter your email"
                                    required
                                    className="block w-full px-4 rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">
                                    Password
                                </label>
                            </div>
                            <div className="mt-2">
                                <input
                                    name="password"
                                    type="password"
                                    placeholder="Enter your password"
                                    required
                                    className="block w-full px-4 rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Sign in
                            </button>
                        </div>
                    </form>

                    <button onClick={handleGoogleLogin} className="btn mt-3 bg-gray-50 w-full">
                        <FcGoogle className="size-10" />
                    </button>

                    <p className="mt-10 text-center text-sm text-white">
                        Not a member?{' '}
                        <Link to={'/register'} className="font-semibold leading-6 px-2 text-indigo-600 hover:text-indigo-500">
                            Create a new account
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;

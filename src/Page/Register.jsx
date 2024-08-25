import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {

    const { registerUser, updateUserProfile } = useContext(AuthContext)
    const [error, setError] = useState('')
    const [showPassword, setShowPassword] = useState('')
    const location = useLocation()
    const navigate = useNavigate()


    const handleRegister = (e) => {
        e.preventDefault()
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, photo, email, password);


        if (/^(?=.*[A-Z])(?=.*[a-z]).{6,}$/.test(password)) {
            setError(
                Swal.fire({
                    title: 'Success!',
                    text: 'user login successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })

            );
            registerUser(email, password)
                .then(() => {
                    navigate(location?.state ? location.state : '/')
                    updateUserProfile(name, photo)
                })
        }

        else {
            setError(
                // alert('Password must contain at least one uppercase letter, one lowercase letter, and be at least 6 characters long.')
                setError(Swal.fire({
                    title: 'Error!',
                    text: 'Password must contain at least one uppercase letter, one lowercase letter, and be at least 6 characters long',
                    icon: 'error',
                    confirmButtonText: 'Try aging'
                }))
            );
            return;

        }
        setError('')


    }

    return <div>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img
                    alt="Your Company"
                    src="https://i.ibb.co/vYxPFsF/Logo.png"
                    className="mx-auto h-10 w-auto"
                />
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
                    Create a new account
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                {
                    error && <div>{error}</div>
                }
                <form onSubmit={handleRegister} action="#" method="POST" className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium leading-6 text-white">
                            Name
                        </label>
                        <div className="mt-2">
                            <input
                                name="name"
                                type="text"
                                placeholder="Enter your name"
                                required
                                className="block w-full px-4 rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium leading-6 text-white">
                            Photo Url
                        </label>
                        <div className="mt-2">
                            <input
                                name="photo"
                                type="text"
                                placeholder="Enter your photo url"
                                required
                                className="block w-full px-4 rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
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
                                autoComplete="email"
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
                                autoComplete="current-password"
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

                <p className="mt-10 text-center text-sm text-white">
                    Already have a member?{' '}
                    <Link to={'/login'} href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                        Login here
                    </Link>
                </p>
            </div>
        </div>
    </div>;
};
export default Register;
// import { useContext, useState } from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { AuthContext } from "../AuthProvider/AuthProvider";
// import Swal from "sweetalert2";
// import UseAxiosPublic from "../hooks/useAxiosPublic";
// import GoogleLogIn from "../AuthProvider/GoogleLogIn";

import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useForm } from "react-hook-form";
import UseAxiosPublic from "../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { FcGoogle } from "react-icons/fc";

// const Register = () => {

//     const { registerUser, updateUserProfile } = useContext(AuthContext)
//     const [error, setError] = useState('')
//     // const [showPassword, setShowPassword] = useState('')
//     const location = useLocation()
//     const navigate = useNavigate()

//     const axiosPublic = UseAxiosPublic()


//     const handleRegister = (e) => {
//         e.preventDefault()
//         const name = e.target.name.value;
//         const photo = e.target.photo.value;
//         const email = e.target.email.value;
//         const password = e.target.password.value;
//         console.log(name, photo, email, password);


//         if (/^(?=.*[A-Z])(?=.*[a-z]).{6,}$/.test(password)) {
//             setError(


//             );
//             registerUser(email, password)
//                 .then(() => {
//                     updateUserProfile(name, photo)
//                     const userInfo = {
//                         name: name,
//                         email: email
//                     }

//                     axiosPublic.post('/users', userInfo)
//                         .then(res => {
//                             if (res.data.insertedId) {
//                                 console.log('user added to the database');
//                                 Swal.fire({
//                                     title: 'Success!',
//                                     text: 'user login successfully',
//                                     icon: 'success',
//                                     confirmButtonText: 'Cool'
//                                 })
//                                 navigate(location?.state ? location.state : '/')
//                             }
//                         })
//                 })
//         }

//         else {
//             setError(
//                 // alert('Password must contain at least one uppercase letter, one lowercase letter, and be at least 6 characters long.')
//                 setError(Swal.fire({
//                     title: 'Error!',
//                     text: 'Password must contain at least one uppercase letter, one lowercase letter, and be at least 6 characters long',
//                     icon: 'error',
//                     confirmButtonText: 'Try aging'
//                 }))
//             );
//             return;

//         }
//         setError('')


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
//                     Create a new account
//                 </h2>
//             </div>

//             <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
//                 {
//                     error && <div>{error}</div>
//                 }
//                 <form onSubmit={handleRegister} action="#" method="POST" className="space-y-6">
//                     <div>
//                         <label className="block text-sm font-medium leading-6 text-white">
//                             Name
//                         </label>
//                         <div className="mt-2">
//                             <input
//                                 name="name"
//                                 type="text"
//                                 placeholder="Enter your name"
//                                 required
//                                 className="block w-full px-4 rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                             />
//                         </div>
//                     </div>
//                     <div>
//                         <label className="block text-sm font-medium leading-6 text-white">
//                             Photo Url
//                         </label>
//                         <div className="mt-2">
//                             <input
//                                 name="photo"
//                                 type="text"
//                                 placeholder="Enter your photo url"
//                                 required
//                                 className="block w-full px-4 rounded-md border-0 py-1.5 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
//                             />
//                         </div>
//                     </div>
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
//                                 autoComplete="email"
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
//                                 autoComplete="current-password"
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
//                 <GoogleLogIn></GoogleLogIn>

//                 <p className="mt-10 text-center text-sm text-white">
//                     Already have a member?{' '}
//                     <Link to={'/login'} href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
//                         Login here
//                     </Link>
//                 </p>
//             </div>
//         </div>
//     </div>;
// };
// export default Register;




const Register = () => {


    const axiosPublic = UseAxiosPublic()
    const {
        register,
        handleSubmit,
        reset,

        formState: { errors },
    } = useForm()

    const { registerUser, updateUserProfile, googleLogin } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                console.log(result.user);
                const userInfo = {
                    email: result.user?.email,
                    name: result.user?.displayName
                };
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        if (res.data.insertedId) {
                            console.log('User added to the database');
                            navigate('/');
                        } else {
                            console.log(res.data.message); // Handle the case where the user already exists
                        }
                    });
            })
            .catch(error => {
                console.error('Login failed:', error.message);
            });
    };
    
    const onSubmit = (data) => {
        console.log(data)
        registerUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        // create user entry in the database
                        const userInfo = {
                            name: data.name,
                            email: data.email
                        }
                        axiosPublic.post('/users', userInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                    console.log('user added to the database');
                                    reset();
                                    Swal.fire({
                                        position: "top-center",
                                        icon: "success",
                                        title: "User created successfully",
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                    navigate('/')
                                }
                            })
                    })
                    .catch(error => console.log(error))
            })
    }
    return (
        <div>
            <div className="  ">
                <div className=" w-full font-Roboto max-w-md mx-auto p-4 rounded-md shadow-2xl mt-4   dark:text-gray-800 ">

                    <div className="card   shadow-xl ">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                                <img
                                    alt="Your Company"
                                    src="https://i.ibb.co/vYxPFsF/Logo.png"
                                    className="mx-auto h-10 w-auto"
                                />
                                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
                                    Register Now!
                                </h2>
                            </div>
                            <div className="form-control text-white">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" defaultValue="test" {...register("name", { required: true })} name="name" placeholder="name" className="input input-bordered" />
                                {errors.name && <span className="text-red-600">Name is required</span>}
                            </div>
                            <div className="form-control text-white">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" defaultValue="test" {...register("photoURL", { required: true })} placeholder="photo URL" className="input input-bordered" />
                                {errors.photoURL && <span className="text-red-600">photoURL is required</span>}
                            </div>
                            <div className="form-control text-white">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" defaultValue="test" {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered" />
                                {errors.email && <span className="text-red-600">Email is required</span>}
                            </div>

                            <div className="form-control text-white">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" defaultValue="test" {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    // pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]$/
                                    pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/
                                })} name="password" placeholder="password" className="input input-bordered" />
                                {errors.password && <span className="text-red-600">Password is required</span>}

                                {errors.password?.type === "minLength" && (
                                    <p className="text-red-600">Password must be 6 character</p>
                                )}
                                {errors.password?.type === "maxLength" && (
                                    <p className="text-red-600">Password must be less 20 character </p>
                                )}
                                {errors.password?.type === "pattern" && (
                                    <p className="text-red-600">Password must have one uppercase , one lower case and one number  </p>
                                )}
                               
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="sign up" />
                            </div>
                        </form>
                        <p className="text-center text-blue-700"><small>ALready have an account <Link to={'/login'} className="underline">LogIn</Link></small></p>

                        <div className='divider'>

                        </div>
                        <div className='p-4'>
                            {/* <SocialLogin></SocialLogin> */}
                            <button onClick={handleGoogleLogin} aria-label="Login with Google" type="button" className="btn  bg-gray-50 w-full">
                            <FcGoogle className="size-10" />

                            </button>
                          

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
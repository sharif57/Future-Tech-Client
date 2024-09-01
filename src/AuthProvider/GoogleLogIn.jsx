import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "./AuthProvider";
import UseAxiosPublic from "../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const GoogleLogIn = () => {
    const { googleLogin } = useContext(AuthContext)
    const axiosPublic = UseAxiosPublic()
    const navigate = useNavigate()

    const handleGoogleLogin = () => {
        googleLogin()
        .then(result =>{
            console.log(result.user);
            const userInfo ={
                email: result.user?.email,
                name:result.user?.displayName
            }
            axiosPublic.post('/users', userInfo)
            .then(res =>{
                console.log(res.data);
                navigate('/')
            })
        })
    }

    return <div>
        <button onClick={handleGoogleLogin} className="btn mt-3 bg-gray-50 w-full">
            <FcGoogle className="size-10" />
        </button>
    </div>;
};
export default GoogleLogIn;
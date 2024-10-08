import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const AdminProfile = () => {
    const { user } = useContext(AuthContext)
    const axiosSecure = useAxiosSecure();

    const { data: post = [] } = useQuery({
        queryKey: ['post'],
        queryFn: async () => {
            const res = await axiosSecure.get('/post');
            return res.data;
        }
    });

    const { data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    });
    const { data: reviews = [] } = useQuery({
        queryKey: ['reviews'],
        queryFn: async () => {
            const res = await axiosSecure.get('/reviews');
            return res.data;
        }
    });
    return <div>
        <div className="flex justify-around gap-9 items-center">
            <div className="group before:hover:scale-95 before:hover:h-72 before:hover:w-80 before:hover:h-44 before:hover:rounded-b-2xl before:transition-all before:duration-500 before:content-[''] before:w-80 before:h-24 before:rounded-t-2xl before:bg-gradient-to-bl from-sky-200 via-orange-200 to-orange-700 before:absolute before:top-0 w-80 h-72 relative bg-slate-50 flex flex-col items-center justify-center gap-2 text-center rounded-2xl overflow-hidden">
                <img className="w-28 h-28 bg-blue-700 mt-8 rounded-full border-4 border-slate-50 z-10 group-hover:scale-150 group-hover:-translate-x-24  group-hover:-translate-y-20 transition-all duration-500" src={user?.photoURL} alt="" />
                <div className="z-10  group-hover:-translate-y-10 transition-all duration-500">
                    <span className="text-2xl font-semibold text-black">{user?.displayName}</span>
                    <p>{user?.email}</p>
                </div>
                <a className="bg-blue-700 px-4 py-1 text-slate-50 rounded-md z-10 hover:scale-125 transition-all duration-500 hover:bg-blue-500" href="#">Folow</a>
            </div>
           
        </div>

    </div>;
};
export default AdminProfile;
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const AdminProfile = () => {
    const { user } = useContext(AuthContext)
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
            <div className="flex justify-between items-center gap-10">

                <div
                    className="hover:-translate-y-2 group bg-neutral-50 duration-500 w-44 h-44 flex text-neutral-600 flex-col justify-center items-center relative rounded-xl overflow-hidden shadow-md"
                >
                    <svg
                        viewBox="0 0 200 200"
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute blur z-10 fill-red-300 duration-500 group-hover:blur-none group-hover:scale-105"
                    >
                        <path
                            transform="translate(100 100)"
                            d="M39.5,-49.6C54.8,-43.2,73.2,-36.5,78.2,-24.6C83.2,-12.7,74.8,4.4,69,22.5C63.3,40.6,60.2,59.6,49.1,64.8C38.1,70,19,61.5,0.6,60.7C-17.9,59.9,-35.9,67,-47.2,61.9C-58.6,56.7,-63.4,39.5,-70,22.1C-76.6,4.7,-84.9,-12.8,-81.9,-28.1C-79,-43.3,-64.6,-56.3,-49.1,-62.5C-33.6,-68.8,-16.8,-68.3,-2.3,-65.1C12.1,-61.9,24.2,-55.9,39.5,-49.6Z"
                        ></path>
                    </svg>

                    <div className="z-20 flex flex-col justify-center items-center">
                        <span className="font-bold text-6xl ml-2">34+</span>
                        <p className="font-bold">Projects</p>
                    </div>
                </div>

                <div
                    className="hover:-translate-y-2 group bg-neutral-50 duration-500 w-44 h-44 flex text-neutral-600 flex-col justify-center items-center relative rounded-xl overflow-hidden shadow-md"
                >
                    <svg
                        viewBox="0 0 200 200"
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute blur z-10 fill-red-300 duration-500 group-hover:blur-none group-hover:scale-105"
                    >
                        <path
                            transform="translate(100 100)"
                            d="M39.5,-49.6C54.8,-43.2,73.2,-36.5,78.2,-24.6C83.2,-12.7,74.8,4.4,69,22.5C63.3,40.6,60.2,59.6,49.1,64.8C38.1,70,19,61.5,0.6,60.7C-17.9,59.9,-35.9,67,-47.2,61.9C-58.6,56.7,-63.4,39.5,-70,22.1C-76.6,4.7,-84.9,-12.8,-81.9,-28.1C-79,-43.3,-64.6,-56.3,-49.1,-62.5C-33.6,-68.8,-16.8,-68.3,-2.3,-65.1C12.1,-61.9,24.2,-55.9,39.5,-49.6Z"
                        ></path>
                    </svg>

                    <div className="z-20 flex flex-col justify-center items-center">
                        <span className="font-bold text-6xl ml-2">34+</span>
                        <p className="font-bold">Projects</p>
                    </div>
                </div>
            </div>
        </div>

    </div>;
};
export default AdminProfile;
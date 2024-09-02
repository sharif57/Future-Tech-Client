import { useEffect, useState } from "react";
import { MdAdminPanelSettings } from "react-icons/md";
import Swal from "sweetalert2";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { GrUserAdmin } from "react-icons/gr";


const UserManage = () => {
    const axiosSecure = useAxiosSecure()
    // const [ManageUsers, setManageUsers] = useState([]);

    const handleDelete = _id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        })
            .then((result) => {
                if (result.isConfirmed) {
                    fetch(`http://localhost:5000/userDelete/${_id}`, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.deletedCount > 0) {

                                Swal.fire({
                                    title: "Deleted!",
                                    text: "Your item has been deleted.",
                                    icon: "success"
                                });

                                const remaining = ManageUsers.filter(i => i._id !== _id);
                                setManageUsers(remaining)
                                // console.log('delete');
                                // setSort(remaining)
                            }
                        })
                }
            })

    }


    const handleMakeAdmin = user => {
        axiosSecure.patch(`/users/admin/${user._id}`)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    refetch()
                    Swal.fire({
                        position: "top-center",
                        icon: "success",
                        title: `${user.name} is an Admin Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users')
            return res.data
        } 
    })

    return (
        <div>
            <div className="bg-[#191919] lg:py-5 mb-9 lg:p-0 p-4">
                <div className="container mx-auto">
                    <div className="lg:flex  justify-between items-center ">
                        <div className="lg:w-2/3">
                            <button className="bg-[#333333] p-2 rounded-md text-white font-medium">Discover a World of Insight                            </button>
                            <h1 className="lg:text-5xl text-2xl font-semibold text-white mt-3">Access Comprehensive Resources with FutureTech</h1>
                        </div>

                    </div>
                </div>
            </div>
            <div className="flex flex-col">
                <div className="-m-1.5 overflow-x-auto">
                    <div className="p-1.5 min-w-full inline-block align-middle">
                        <div className="border rounded-lg divide-y divide-gray-200 dark:border-neutral-700 dark:divide-neutral-700">
                            <div className="py-3 px-4">
                                <div className="relative max-w-xs">
                                    <label htmlFor="hs-table-with-pagination-search" className="sr-only">
                                        Search
                                    </label>
                                    <input
                                        type="text"
                                        name="hs-table-with-pagination-search"
                                        id="hs-table-with-pagination-search"
                                        className="py-2 px-3 ps-9 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                                        placeholder="Search for items"
                                    />
                                    <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-3">
                                        <svg
                                            className="size-4 text-gray-400 dark:text-neutral-500"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <circle cx="11" cy="11" r="8"></circle>
                                            <path d="m21 21-4.3-4.3"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="overflow-hidden">
                                <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
                                    <thead className="bg-gray-50 dark:bg-neutral-700">
                                        <tr>
                                            <th scope="col" className="py-3 px-4 pe-0">
                                                <div className="flex items-center h-5">
                                                    <input
                                                        id="hs-table-pagination-checkbox-all"
                                                        type="checkbox"
                                                        className="border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-neutral-700 dark:border-neutral-500 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                                    />
                                                    <label htmlFor="hs-table-pagination-checkbox-all" className="sr-only">
                                                        Checkbox
                                                    </label>
                                                </div>
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                                            >
                                                Name
                                            </th>

                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                                            >
                                                Address
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                                            >
                                                Action
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                                            >
                                                Action
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                                        {users.map((user) => (
                                            <tr key={user._id}>
                                                <td className="py-3 ps-4">
                                                    <div className="flex items-center h-5">
                                                        <input
                                                            id={`hs-table-pagination-checkbox-${user.id}`}
                                                            type="checkbox"
                                                            className="border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                                                        />
                                                        <label
                                                            htmlFor={`hs-table-pagination-checkbox-${user.id}`}
                                                            className="sr-only"
                                                        >
                                                            Checkbox
                                                        </label>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">
                                                    {user.name}
                                                </td>

                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                                                    {user.email}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                                                    {user.role === 'admin' ? (
                                                        <button className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 focus:outline-none focus:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:text-blue-400"
                                                        ><MdAdminPanelSettings className="text-xl size-10" />
                                                        </button>
                                                    ) : (
                                                        <button
                                                            onClick={() => handleMakeAdmin(user)} 
                                                            type="button"
                                                            className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 focus:outline-none focus:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:text-blue-400"
                                                        >
                                                            <GrUserAdmin className="text-xl size-10"  />
                                                        </button>
                                                    )}
                                                </td>

                                                <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">

                                                    <button
                                                        onClick={() => handleDelete(user._id)}
                                                        className="flex justify-center items-center gap-2 w-28 h-12 cursor-pointer rounded-md shadow-2xl text-white font-semibold bg-gradient-to-r from-[#fb7185] via-[#e11d48] to-[#be123c] hover:shadow-xl hover:shadow-red-500 hover:scale-105 duration-300 hover:from-[#be123c] hover:to-[#fb7185]"
                                                    >
                                                        <svg viewBox="0 0 15 15" className="w-5 fill-white">
                                                            <svg
                                                                className="w-6 h-6"
                                                                stroke="currentColor"
                                                                strokeWidth="1.5"
                                                                viewBox="0 0 24 24"
                                                                fill="none"
                                                                xmlns="http://www.w3.org/2000/svg"
                                                            >
                                                                <path
                                                                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                                                    strokeLinejoin="round"
                                                                    strokeLinecap="round"
                                                                ></path>
                                                            </svg>
                                                        </svg>
                                                        Delete
                                                    </button>

                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <div className="py-1 px-4">
                                <nav className="flex items-center space-x-1" aria-label="Pagination">
                                    <button
                                        type="button"
                                        className="p-2.5 min-w-[40px] inline-flex justify-center items-center gap-x-2 text-sm rounded-full text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                                        aria-label="Previous"
                                    >
                                        <span aria-hidden="true">«</span>
                                        <span className="sr-only">Previous</span>
                                    </button>
                                    <button
                                        type="button"
                                        className="min-w-[40px] flex justify-center items-center text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 py-2.5 text-sm rounded-full disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:focus:bg-neutral-700 dark:hover:bg-neutral-700"
                                        aria-current="page"
                                    >
                                        1
                                    </button>
                                    <button
                                        type="button"
                                        className="min-w-[40px] flex justify-center items-center text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 py-2.5 text-sm rounded-full disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:focus:bg-neutral-700 dark:hover:bg-neutral-700"
                                    >
                                        2
                                    </button>
                                    <button
                                        type="button"
                                        className="min-w-[40px] flex justify-center items-center text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 py-2.5 text-sm rounded-full disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:focus:bg-neutral-700 dark:hover:bg-neutral-700"
                                    >
                                        3
                                    </button>
                                    <button
                                        type="button"
                                        className="p-2.5 min-w-[40px] inline-flex justify-center items-center gap-x-2 text-sm rounded-full text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                                        aria-label="Next"
                                    >
                                        <span className="sr-only">Next</span>
                                        <span aria-hidden="true">»</span>
                                    </button>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserManage;


// <div className="flex justify-center items-center gap-10">

// <div
//     className="hover:-translate-y-2 group bg-neutral-50 duration-500 w-44 h-44 flex text-neutral-600 flex-col justify-center items-center relative rounded-xl overflow-hidden shadow-md"
// >
//     <svg
//         viewBox="0 0 200 200"
//         xmlns="http://www.w3.org/2000/svg"
//         className="absolute blur z-10 fill-red-300 duration-500 group-hover:blur-none group-hover:scale-105"
//     >
//         <path
//             transform="translate(100 100)"
//             d="M39.5,-49.6C54.8,-43.2,73.2,-36.5,78.2,-24.6C83.2,-12.7,74.8,4.4,69,22.5C63.3,40.6,60.2,59.6,49.1,64.8C38.1,70,19,61.5,0.6,60.7C-17.9,59.9,-35.9,67,-47.2,61.9C-58.6,56.7,-63.4,39.5,-70,22.1C-76.6,4.7,-84.9,-12.8,-81.9,-28.1C-79,-43.3,-64.6,-56.3,-49.1,-62.5C-33.6,-68.8,-16.8,-68.3,-2.3,-65.1C12.1,-61.9,24.2,-55.9,39.5,-49.6Z"
//         ></path>
//     </svg>
//     <div className="z-20 flex flex-col justify-center items-center">
//         <span className="font-bold text-6xl ml-2">{post.length}</span>
//         <p className="font-bold">Posts</p>
//     </div>
// </div>

// <div
//     className="hover:-translate-y-2 group bg-neutral-50 duration-500 w-44 h-44 flex text-neutral-600 flex-col justify-center items-center relative rounded-xl overflow-hidden shadow-md"
// >
//     <svg
//         viewBox="0 0 200 200"
//         xmlns="http://www.w3.org/2000/svg"
//         className="absolute blur z-10 fill-orange-300 duration-500 group-hover:blur-none group-hover:scale-105"
//     >
//         <path
//             transform="translate(100 100)"
//             d="M45.4,-55.3C59.5,-47.6,70.6,-33.4,76.3,-16.4C81.9,0.6,82.1,19.6,73.5,32.9C64.9,46.2,47.4,53.8,31.3,58.7C15.1,63.6,-0.7,65.8,-17.1,63.1C-33.5,60.4,-50.5,52.9,-60.6,40.8C-70.8,28.6,-74.2,11.9,-72.6,-4.1C-71,-20,-64.4,-35.3,-53.2,-43.8C-41.9,-52.2,-26,-54.8,-10.7,-54.2C4.5,-53.6,9,-49.7,45.4,-55.3Z"
//         ></path>
//     </svg>
//     <div className="z-20 flex flex-col justify-center items-center">
//         <span className="font-bold text-6xl ml-2">{users.length}</span>
//         <p className="font-bold">Users</p>
//     </div>
// </div>

// <div
//     className="hover:-translate-y-2 group bg-neutral-50 duration-500 w-44 h-44 flex text-neutral-600 flex-col justify-center items-center relative rounded-xl overflow-hidden shadow-md"
// >
//     <svg
//         viewBox="0 0 200 200"
//         xmlns="http://www.w3.org/2000/svg"
//         className="absolute blur z-10 fill-indigo-300 duration-500 group-hover:blur-none group-hover:scale-105"
//     >
//         <path
//             transform="translate(100 100)"
//             d="M36.3,-54.3C50,-46.3,65.8,-38.8,70.5,-27.9C75.3,-17.1,69.1,-2.8,64.8,13.8C60.5,30.4,58.1,49.3,47.2,60.4C36.3,71.4,17.9,74.7,0.3,74.4C-17.3,74.1,-34.5,70.2,-43.6,60.4C-52.6,50.5,-53.6,34.8,-53.4,20.8C-53.2,6.8,-51.9,-5.4,-52,-18.2C-52,-31.1,-53.3,-44.7,-46.4,-55.1C-39.5,-65.5,-24.5,-72.7,-10.7,-68.8C3,-64.9,6,-49.8,36.3,-54.3Z"
//         ></path>
//     </svg>
//     <div className="z-20 flex flex-col justify-center items-center">
//         <span className="font-bold text-6xl ml-2">{reviews.length}</span>
//         <p className="font-bold">Reviews</p>
//     </div>
// </div>

// <div
//     className="hover:-translate-y-2 group bg-neutral-50 duration-500 w-44 h-44 flex text-neutral-600 flex-col justify-center items-center relative rounded-xl overflow-hidden shadow-md"
// >
//     <svg
//         viewBox="0 0 200 200"
//         xmlns="http://www.w3.org/2000/svg"
//         className="absolute blur z-10 fill-green-300 duration-500 group-hover:blur-none group-hover:scale-105"
//     >
//         <path
//             transform="translate(100 100)"
//             d="M35.4,-47.2C47.2,-37.1,57.9,-24.4,60.7,-10.2C63.4,4,58.3,19.7,51.2,35.6C44.2,51.5,35.2,67.6,21.3,72.6C7.4,77.5,-11.3,71.4,-24.1,61.3C-37,51.2,-44.1,37.2,-49.2,23.7C-54.3,10.3,-57.4,-2.5,-54.4,-14.2C-51.4,-25.9,-42.4,-36.5,-31.5,-46.3C-20.6,-56.1,-10.3,-65.2,2.1,-67.7C14.5,-70.2,29,-66.2,35.4,-47.2Z"
//         ></path>
//     </svg>
//     <div className="z-20 flex flex-col justify-center items-center">
//         <span className="font-bold text-6xl ml-2">{bookMark.length}</span>
//         <p className="font-bold">Bookmarks</p>
//     </div>
// </div>
// </div>

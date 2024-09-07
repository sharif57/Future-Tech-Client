// import { useEffect, useState } from "react";
// import { MdAdminPanelSettings } from "react-icons/md";
// import Swal from "sweetalert2";
// import useAxiosSecure from "../hooks/useAxiosSecure";
// import { useQuery } from "@tanstack/react-query";
// import { GrUserAdmin } from "react-icons/gr";


// const UserManage = () => {
//     const axiosSecure = useAxiosSecure()
//     const [ManageUsers, setManageUsers] = useState([]);
//     const [search, setSearch] = useState('')

//     const handleDelete = _id => {
//         Swal.fire({
//             title: "Are you sure?",
//             text: "You won't be able to revert this!",
//             icon: "warning",
//             showCancelButton: true,
//             confirmButtonColor: "#3085d6",
//             cancelButtonColor: "#d33",
//             confirmButtonText: "Yes, delete it!"
//         })
//             .then((result) => {
//                 if (result.isConfirmed) {
//                     fetch(`http://localhost:5000/userDelete/${_id}`, {
//                         method: 'DELETE'
//                     })
//                         .then(res => res.json())
//                         .then(data => {
//                             if (data.deletedCount > 0) {

//                                 Swal.fire({
//                                     title: "Deleted!",
//                                     text: "Your item has been deleted.",
//                                     icon: "success"
//                                 });

//                                 const remaining = ManageUsers.filter(i => i._id !== _id);
//                                 setManageUsers(remaining)
//                                 // console.log('delete');
//                                 // setSort(remaining)
//                             }
//                         })
//                 }
//             })

//     }


//     const handleMakeAdmin = user => {
//         axiosSecure.patch(`/users/admin/${user._id}`)
//             .then(res => {
//                 console.log(res.data);
//                 if (res.data.modifiedCount > 0) {
//                     refetch()
//                     Swal.fire({
//                         position: "top-center",
//                         icon: "success",
//                         title: `${user.name} is an Admin Now!`,
//                         showConfirmButton: false,
//                         timer: 1500
//                     });
//                 }
//             })
//     }

//     const { data: users = [], refetch } = useQuery({
//         queryKey: ['users'],
//         queryFn: async () => {
//             const res = await axiosSecure.get('/users')
//             return res.data
//         }
//     })

//     //search funcationity
//     const filterSearch = users.filter(user => user.name.toLowerCase().includes(search.toLowerCase()) ||
//         user.email.toLowerCase().includes(search.toLowerCase)

//     )

//     return (
//         <div>
//             <div className="bg-[#191919] lg:py-5 mb-9 lg:p-0 p-4">
//                 <div className="container mx-auto">
//                     <div className="lg:flex  justify-between items-center ">
//                         <div className="lg:w-2/3">
//                             <button className="bg-[#333333] p-2 rounded-md text-white font-medium">Discover a World of Insight                            </button>
//                             <h1 className="lg:text-5xl text-2xl font-semibold text-white mt-3">Access Comprehensive Resources with FutureTech</h1>
//                         </div>

//                     </div>
//                 </div>
//             </div>
//             <div className="flex flex-col">
//                 <div className="-m-1.5 overflow-x-auto">
//                     <div className="p-1.5 min-w-full inline-block align-middle">
//                         <div className="border rounded-lg divide-y divide-gray-200 dark:border-neutral-700 dark:divide-neutral-700">
//                             <div className="py-3 px-4">
//                                 <div className="relative max-w-xs">
//                                     <label htmlFor="hs-table-with-pagination-search" className="sr-only">
//                                         Search
//                                     </label>
//                                     <input
//                                         type="text"
//                                         name="hs-table-with-pagination-search"
//                                         id="hs-table-with-pagination-search"
//                                         className="py-2  border-2 border-green-400 px-3 ps-9 block w-full  shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
//                                         placeholder="Search for items"
//                                         value={search}
//                                         onChange={(e) => setSearch(e.target.value)}
//                                     />
//                                     <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-3">
//                                         <svg
//                                             className="size-4 text-gray-400 dark:text-neutral-500"
//                                             xmlns="http://www.w3.org/2000/svg"
//                                             width="24"
//                                             height="24"
//                                             viewBox="0 0 24 24"
//                                             fill="none"
//                                             stroke="currentColor"
//                                             strokeWidth="2"
//                                             strokeLinecap="round"
//                                             strokeLinejoin="round"
//                                         >
//                                             <circle cx="11" cy="11" r="8"></circle>
//                                             <path d="m21 21-4.3-4.3"></path>
//                                         </svg>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="overflow-hidden">
//                                 <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
//                                     <thead className="bg-gray-50 dark:bg-neutral-700">
//                                         <tr>
//                                             <th scope="col" className="py-3 px-4 pe-0">
//                                                 <div className="flex items-center h-5">
//                                                     <input
//                                                         id="hs-table-pagination-checkbox-all"
//                                                         type="checkbox"
//                                                         className="border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-neutral-700 dark:border-neutral-500 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
//                                                     />
//                                                     <label htmlFor="hs-table-pagination-checkbox-all" className="sr-only">
//                                                         Checkbox
//                                                     </label>
//                                                 </div>
//                                             </th>
//                                             <th
//                                                 scope="col"
//                                                 className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
//                                             >
//                                                 Name
//                                             </th>

//                                             <th
//                                                 scope="col"
//                                                 className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
//                                             >
//                                                 Address
//                                             </th>
//                                             <th
//                                                 scope="col"
//                                                 className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
//                                             >
//                                                 Action
//                                             </th>
//                                             <th
//                                                 scope="col"
//                                                 className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
//                                             >
//                                                 Action
//                                             </th>
//                                         </tr>
//                                     </thead>
//                                     <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
//                                         {filterSearch.map((user) => (
//                                             <tr key={user._id}>
//                                                 <td className="py-3 ps-4">
//                                                     <div className="flex items-center h-5">
//                                                         <input
//                                                             id={`hs-table-pagination-checkbox-${user.id}`}
//                                                             type="checkbox"
//                                                             className="border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
//                                                         />
//                                                         <label
//                                                             htmlFor={`hs-table-pagination-checkbox-${user.id}`}
//                                                             className="sr-only"
//                                                         >
//                                                             Checkbox
//                                                         </label>
//                                                     </div>
//                                                 </td>
//                                                 <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">
//                                                     {user.name}
//                                                 </td>

//                                                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
//                                                     {user.email}
//                                                 </td>
//                                                 <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
//                                                     {user.role === 'admin' ? (
//                                                         <button className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 focus:outline-none focus:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:text-blue-400"
//                                                         ><MdAdminPanelSettings className="text-xl size-10" />
//                                                         </button>
//                                                     ) : (
//                                                         <button
//                                                             onClick={() => handleMakeAdmin(user)}
//                                                             type="button"
//                                                             className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 focus:outline-none focus:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:text-blue-400"
//                                                         >
//                                                             <GrUserAdmin className="text-xl size-10" />
//                                                         </button>
//                                                     )}
//                                                 </td>

//                                                 <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">

//                                                     <button
//                                                         onClick={() => handleDelete(user._id)}
//                                                         className="flex justify-center items-center gap-2 w-28 h-12 cursor-pointer rounded-md shadow-2xl text-white font-semibold bg-gradient-to-r from-[#fb7185] via-[#e11d48] to-[#be123c] hover:shadow-xl hover:shadow-red-500 hover:scale-105 duration-300 hover:from-[#be123c] hover:to-[#fb7185]"
//                                                     >
//                                                         <svg viewBox="0 0 15 15" className="w-5 fill-white">
//                                                             <svg
//                                                                 className="w-6 h-6"
//                                                                 stroke="currentColor"
//                                                                 strokeWidth="1.5"
//                                                                 viewBox="0 0 24 24"
//                                                                 fill="none"
//                                                                 xmlns="http://www.w3.org/2000/svg"
//                                                             >
//                                                                 <path
//                                                                     d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
//                                                                     strokeLinejoin="round"
//                                                                     strokeLinecap="round"
//                                                                 ></path>
//                                                             </svg>
//                                                         </svg>
//                                                         Delete
//                                                     </button>

//                                                 </td>
//                                             </tr>
//                                         ))}
//                                     </tbody>
//                                 </table>
//                             </div>
//                             <div className="py-3 px-4 border-t border-gray-200 dark:border-neutral-700">
//                                 <div className="flex justify-between items-center">
//                                     <p className="text-sm text-gray-600 dark:text-neutral-400">
//                                         Page <span className="font-semibold text-gray-800 dark:text-neutral-200">1</span> of{" "}
//                                         <span className="font-semibold text-gray-800 dark:text-neutral-200">10</span>
//                                     </p>

//                                     <div className="flex items-center space-x-3">
//                                         <button
//                                             type="button"
//                                             className="inline-flex items-center gap-x-2 rounded-md text-sm font-medium text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
//                                         >
//                                             <svg
//                                                 className="size-4"
//                                                 xmlns="http://www.w3.org/2000/svg"
//                                                 width="16"
//                                                 height="16"
//                                                 fill="currentColor"
//                                                 viewBox="0 0 16 16"
//                                             >
//                                                 <path
//                                                     fillRule="evenodd"
//                                                     d="M11.354 1.354a.5.5 0 0 1 0 .708L5.707 7.707a1 1 0 0 0 0 1.414l5.647 5.647a.5.5 0 0 1-.708.708l-5.647-5.647a2 2 0 0 1 0-2.828l5.647-5.647a.5.5 0 0 1 .708 0z"
//                                                 ></path>
//                                             </svg>
//                                             Previous
//                                         </button>
//                                         <button
//                                             type="button"
//                                             className="inline-flex items-center gap-x-2 rounded-md text-sm font-medium text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
//                                         >
//                                             Next
//                                             <svg
//                                                 className="size-4"
//                                                 xmlns="http://www.w3.org/2000/svg"
//                                                 width="16"
//                                                 height="16"
//                                                 fill="currentColor"
//                                                 viewBox="0 0 16 16"
//                                             >
//                                                 <path
//                                                     fillRule="evenodd"
//                                                     d="M4.646 14.646a.5.5 0 0 1 0-.708l5.647-5.647a1 1 0 0 0 0-1.414L4.646 1.354a.5.5 0 1 1 .708-.708l5.647 5.647a2 2 0 0 1 0 2.828l-5.647 5.647a.5.5 0 0 1-.708 0z"
//                                                 ></path>
//                                             </svg>
//                                         </button>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>


//             </div >
//         </div >
//     );
// };

// export default UserManage;


import { useEffect, useState } from "react";
import { MdAdminPanelSettings } from "react-icons/md";
import Swal from "sweetalert2";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { GrUserAdmin } from "react-icons/gr";

const UserManage = () => {
    const axiosSecure = useAxiosSecure();
    const [ManageUsers, setManageUsers] = useState([]);
    const [searchTerm, setSearchTerm] = useState(''); // State to hold search term

    const handleDelete = _id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/userDelete/${_id}`, {
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        refetch();
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your item has been deleted.",
                            icon: "success"
                        });
                        const remaining = ManageUsers.filter(i => i._id !== _id);
                        setManageUsers(remaining);
                    }
                });
            }
        });
    };

    const handleMakeAdmin = user => {
        axiosSecure.patch(`/users/admin/${user._id}`).then(res => {
            if (res.data.modifiedCount > 0) {
                refetch();
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: `${user.name} is an Admin Now!`,
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        });
    };

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    });

    // Filter users based on the search term
    const filteredUsers = users.filter(user => 
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        user.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div>
            <div className="bg-[#191919] lg:py-5 mb-9 lg:p-0 p-4">
                <div className="container mx-auto">
                    <div className="lg:flex  justify-between items-center ">
                        <div className="lg:w-2/3">
                            <button className="bg-[#333333] p-2 rounded-md text-white font-medium">Discover a World of Insight</button>
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
                                        placeholder="Search for users"
                                        value={searchTerm} // Bind search input to state
                                        onChange={(e) => setSearchTerm(e.target.value)} // Update search term on input change
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
                                            <th className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">
                                                Name
                                            </th>
                                            <th className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">
                                                Address
                                            </th>
                                            <th className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">
                                                Action
                                            </th>
                                            <th className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase dark:text-neutral-500">
                                                Action
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                                        {filteredUsers.map((user) => (
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
                                                        <button className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 focus:outline-none focus:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:text-blue-400">
                                                            <MdAdminPanelSettings className="text-xl size-10" />
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
                                                        className="inline-flex items-center gap-x-2 text-sm font-semibold text-red-600 hover:text-red-800 focus:outline-none focus:text-red-800 dark:text-red-500 dark:hover:text-red-400 dark:focus:text-red-400"
                                                    >
                                                        Delete
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            <div className="py-3 px-4 border-t border-gray-200 dark:border-neutral-700">
                                <div className="flex justify-between items-center">
                                    <p className="text-sm text-gray-600 dark:text-neutral-400">
                                        Page <span className="font-semibold text-gray-800 dark:text-neutral-200">1</span> of{" "}
                                        <span className="font-semibold text-gray-800 dark:text-neutral-200">10</span>
                                    </p>

                                    <div className="flex items-center space-x-3">
                                        <button
                                            type="button"
                                            className="inline-flex items-center gap-x-2 rounded-md text-sm font-medium text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                                        >
                                            <svg
                                                className="size-4"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                fill="currentColor"
                                                viewBox="0 0 16 16"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M11.354 1.354a.5.5 0 0 1 0 .708L5.707 7.707a1 1 0 0 0 0 1.414l5.647 5.647a.5.5 0 0 1-.708.708l-5.647-5.647a2 2 0 0 1 0-2.828l5.647-5.647a.5.5 0 0 1 .708 0z"
                                                ></path>
                                            </svg>
                                            Previous
                                        </button>
                                        <button
                                            type="button"
                                            className="inline-flex items-center gap-x-2 rounded-md text-sm font-medium text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700 dark:text-neutral-400 dark:hover:text-neutral-200 dark:focus:text-neutral-200"
                                        >
                                            Next
                                            <svg
                                                className="size-4"
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                fill="currentColor"
                                                viewBox="0 0 16 16"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M4.646 14.646a.5.5 0 0 1 0-.708l5.647-5.647a1 1 0 0 0 0-1.414L4.646 1.354a.5.5 0 1 1 .708-.708l5.647 5.647a2 2 0 0 1 0 2.828l-5.647 5.647a.5.5 0 0 1-.708 0z"
                                                ></path>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserManage;

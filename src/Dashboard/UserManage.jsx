import { useEffect, useState } from "react";
import { MdAdminPanelSettings } from "react-icons/md";
import Swal from "sweetalert2";

const UserManage = () => {
    const [ManageUsers, setManageUsers] = useState([]);

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


    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then((res) => res.json())
            .then((data) => setManageUsers(data));
    }, []);

    return (
        <div>
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
                                        {ManageUsers.map((user) => (
                                            <tr key={user.id}>
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
                                                    <button
                                                        type="button"
                                                        className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 focus:outline-none focus:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:text-blue-400"
                                                    >
                                                        <MdAdminPanelSettings className="size-11" />
                                                    </button>
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

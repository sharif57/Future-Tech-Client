import axios from "axios";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const BookMark = () => {
    const { user } = useContext(AuthContext);
    const [bookMarks, setBookMarks] = useState([]);

    useEffect(() => {
        if (user?.email) {
            axios(`http://localhost:5000/bookMark/${user.email}`)
                .then(res => {
                    setBookMarks(res.data);
                })
                .catch(error => {
                    console.error("Error fetching bookmarks:", error);
                });
        }
    }, [user]);

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
            .then(result => {
                if (result.isConfirmed) {
                    axios.delete(`http://localhost:5000/deleteBook/${_id}`)
                        .then(response => {
                            if (response.data.deletedCount > 0) {
                                Swal.fire({
                                    title: "Deleted!",
                                    text: "Your bookMark item has been deleted.",
                                    icon: "success"
                                });
                                setBookMarks(prevBookmarks => prevBookmarks.filter(i => i._id !== _id));
                            }
                        })
                        .catch(error => {
                            console.error("Error deleting bookmark:", error);
                        });
                }
            });
    };

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
            {bookMarks.map((bookMark) => (
                <div key={bookMark._id}>
                    <div className="bg-gray-800 p-6 rounded-lg h-[550px] shadow-lg transform hover:scale-105 transition-transform duration-300 mx-auto">
                        <img
                            className="w-full h-48 rounded-lg object-cover mb-4"
                            src={bookMark.photo}
                            alt={bookMark.title}
                        />
                        <h2 className="text-xl font-semibold text-white mb-2">{bookMark.title.slice(0, 97)}...</h2>
                        <p className="text-gray-400 mb-4">
                            {bookMark.description.slice(0, 100)}...
                        </p>
                        <div className="flex justify-between items-center">
                            <span className="text-gray-500 text-sm">
                                {new Date(bookMark.currentTime).toLocaleDateString("en-US", {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                })}
                            </span>
                            <Link
                                to={`/dashboard/bookMarkDetails/${bookMark._id}`}
                                className="text-yellow-400 hover:underline"
                            >
                                Read More
                            </Link>
                        </div>
                        <div className="mt-4 flex justify-end">
                            <button onClick={() => handleDelete(bookMark._id)}
                                className="text-white px-3 py-1 rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
                            >
                                <RiDeleteBin6Line className="size-8" />
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default BookMark;

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import axios from "axios";
import { Link } from "react-router-dom";

const MyPost = () => {
    const { user } = useContext(AuthContext);
    const [items, setItems] = useState([]);



    // useEffect(()=>{
    //     fetch(`http://localhost:5000/post?email=${user?.email}`)
    //     .then(res => res.json())
    //     .then(data => console.log(data))
    // },[user])

    useEffect(() => {
        axios(`http://localhost:5000/posts/${user?.email}`)
            .then(res => {
                setItems(res.data)
            })
    }, [user])

    console.log(user?.email);

    return (
        <div className="overflow-x-auto">
            <table className="table ">
                {/* head */}
                <thead>
                    <tr>
                        <th>

                        </th>
                        <th className="text-xl font-bold">Name</th>
                        <th className="text-xl font-bold">Title</th>
                        <th className="text-xl font-bold">Category</th>
                        {/* <th className="text-xl font-bold"></th> */}
                        <th></th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-x divide-gray-500">
                    {/* row 1 */}
                    <tr>

                    </tr>
                    {items.map((p) => (
                        <tr className="hover:shadow-lg" key={p._id}>
                            <th>

                            </th>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">

                                    </div>
                                    <div>
                                        <div className="font-bold">{p.name}</div>
                                    </div>
                                </div>
                            </td>
                            <td className="font-semibold">
                                {p.title.slice(0,100)}
                                <br />
                            </td>
                          
                            <td className="font-semibold">{p.category
                            }</td>

                            <th className="flex flex-row gap-4">
                                <Link to={`/update/${p._id}`}
                                    className="group relative inline-block text-sm font-medium text-black focus:outline-none focus:ring"

                                >
                                    <span className="absolute inset-0 border border-red-600 group-active:border-red-500"></span>
                                    <span
                                        className="block border border-red-600 bg-yellow-500 px-12 py-3 transition-transform active:border-red-500 active:bg-red-500 group-hover:-translate-x-1 group-hover:-translate-y-1">
                                        Update
                                    </span>
                                </Link>

                                <button onClick={() => (p._id)}
                                    className="group relative inline-block text-sm font-medium text-white focus:outline-none focus:ring"
                                    href="#"
                                >
                                    <span className="absolute inset-0 border border-red-600 group-active:border-red-500"></span>
                                    <span
                                        className="block border border-red-600 bg-red-600 px-12 py-3 transition-transform active:border-red-500 active:bg-red-500 group-hover:-translate-x-1 group-hover:-translate-y-1"
                                    >
                                        Delete
                                    </span>
                                </button>
                            </th>

                        </tr>
                    ))}

                </tbody>


            </table>
        </div>
    );
};

export default MyPost;

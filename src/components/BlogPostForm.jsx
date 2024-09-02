import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const BlogPostForm = () => {

    const { user } = useContext(AuthContext)

    const handlePost = (e) => {
        e.preventDefault()
        const name = user?.displayName;
        const email = user?.email;
        const image = user?.photoURL;
        const title = e.target.title.value;
        const category = e.target.category.value;
        const introduction = e.target.introduction.value;
        const currentTime = new Date();
        const photo = e.target.photo.value;
        const description = e.target.description.value;

        const newPost = { name, email, image, title, category, introduction, currentTime, photo, description }
        console.log(newPost);

        fetch('http://localhost:5000/post', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newPost)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    if (data.insertedId) {
                        Swal.fire({
                            title: 'Success!',
                            text: 'Post Added Successfully',
                            icon: 'success',
                            confirmButtonText: 'Cool'
                        });
                    }
                    e.target.reset()
                }
            })
    }

    return <div className="bg-[#191919]">
        <div className="container mx-auto">
            <div className=" p-6 flex justify-center items-center min-h-screen">
                <div className="bg-[#141414] shadow-lg rounded-lg p-8  w-full">
                    <div className="flex justify-around items-center shadow-lg mb-6 bg-[#191919] p-8 rounded-lg hover:bg-gray-600">
                        <div>
                            <h1 className="lg:text-4xl font-semibold mb-6 text-white text-center"> Post Your Blog</h1>
                            <p className="text-center mt-2 font-semibold">Decapitation in reality and fine art: A review</p>
                        </div>
                        <div className="flex gap-4 items-center">
                            <img title={user?.displayName} className="size-24 rounded-full  border-4" src={user?.photoURL} alt="" />
                            <div>
                                <h1 className="text-xl font-semibold text-white">{user?.displayName}</h1>
                                <p>{user?.email}</p>
                            </div>
                        </div>
                    </div>

                    <form onSubmit={handlePost}>


                        {/* category */}
                        <div className="mb-4">
                            <label className="block text-white  font-medium mb-2" >
                                Category
                            </label>
                            <input
                                type="text"
                                name="category"
                                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        {/* Title */}
                        <div className="mb-4">
                            <label className="block text-white  font-medium mb-2" >
                                Title
                            </label>
                            <input
                                type="text"
                                name="title"
                                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"

                            />
                        </div>


                        {/* Introduction */}
                        <div className="mb-4">
                            <label className="block text-white  font-medium mb-2" htmlFor="introduction">
                                Introduction
                            </label>
                            <textarea
                                name="introduction"
                                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        {/* Image URL */}
                        <div className="mb-4">
                            <label className="block text-white  font-medium mb-2">
                                Image URL
                            </label>
                            <input
                                type="text"
                                name="photo"
                                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"

                            />
                        </div>

                        {/* Description */}
                        <div className="mb-4">
                            <label className="block text-white  font-medium mb-2" htmlFor="description">
                                Description
                            </label>
                            <textarea
                                name="description"
                                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"

                            />
                        </div>

                        {/* Submit Button */}
                        <div className="text-center">
                            <button className=" w-1/2 mx-auto text-black text-xl bg-yellow-400 font-medium py-2 px-4 btn btn-outline focus:outline-none focus:ring-2 ">
                                Post Your Blog
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>;
};
export default BlogPostForm;
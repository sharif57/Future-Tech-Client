import { useContext, useEffect, useState } from "react";
import { FaArrowRight, FaBookmark, FaRegBookmark, FaRegCommentDots } from "react-icons/fa";
import { GiLoveHowl } from "react-icons/gi";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Posts = () => {
    const { user } = useContext(AuthContext)

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/post')
            .then((res) => res.json())
            .then(data => setPosts(data))
    }, []);


    const handlePost = (e, post) => {
        e.preventDefault();
        const name = user?.displayName;
        const email = user?.email;
        const image = user?.photoURL;
        const title = post.title; // Get the title from the passed post object
        const category = post.category || "General"; // Assuming a default category if not provided
        const introduction = post.introduction;
        const currentTime = new Date();
        const photo = post.photo || ""; // Assuming a default empty photo if not provided
        const description = post.description;

        const newPost = { name, email, image, title, category, introduction, currentTime, photo, description };
        console.log(newPost);

        fetch('http://localhost:5000/bookMark', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newPost)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Post Bookmarked Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    });
                    e.target.reset();
                }
            });
    };

    const [isAlternateLayout, setIsAlternateLayout] = useState(false);

    // Function to toggle between layouts
    const toggleLayout = () => {
        setIsAlternateLayout(!isAlternateLayout);
    };



    return <div className="bg-[#141414]">
        <div className="container mx-auto">

            {posts.reverse().slice(0, 3).map((post) => (
                <div
                    key={post._id}
                    className="lg:flex justify-between items-center pt-12 pb-12 border-b-8 border-yellow-300 shadow-lg rounded-lg p-5 mb-2 hover:bg-[#191919]"
                >
                    <div className="flex items-center gap-2">
                        <img className="w-20 h-20 rounded-full" src={post.image} alt={post.name} />
                        <div>
                            <h1 className="text-white font-semibold">{post.name}</h1>
                            <p className="text-gray-400">{post.title.slice(0, 52)}...</p>
                        </div>
                    </div>
                    <div>
                        <div className="flex flex-col justify-between lg:mt-0 mt-3">
                            <div>
                                <p className="text-gray-400">
                                    {new Date(post.currentTime).toLocaleDateString("en-US", {
                                        year: "numeric",
                                        month: "long",
                                        day: "numeric",
                                    })}
                                </p>
                                <h1 className="lg:text-3xl font-medium text-white mt-3 mb-3">
                                    {post.introduction.slice(0, 52)}...
                                </h1>
                                <p className="text-gray-400">{post.description.slice(0, 100)}...</p>


                                <div className="flex gap-2 pt-4">
                                    <button className="btn space-x-2">
                                        <GiLoveHowl className="text-red-500 size-6" />
                                        <p>24.5k</p>
                                    </button>
                                    <button className="btn space-x-2">
                                        <FaRegCommentDots className="size-6" />
                                        <p>50</p>
                                    </button>

                                    <form onSubmit={(e) => handlePost(e, post)}>
                                        <button type="submit" onClick={toggleLayout} className="flex items-center space-x-2 btn ">
                                            
                                            {isAlternateLayout ? <FaBookmark className="size-6 text-yellow-400 " /> : <FaRegBookmark className="size-6" />                                            }

                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Link to={`/postDetails/${post._id}`} className="btn btn-outline flex gap-2 lg:mt-0 mt-4">
                            View Blog <FaArrowRight className="w-7 h-7 text-yellow-500" />
                        </Link>
                    </div>
                </div>
            ))}

        </div>
    </div>;
};
export default Posts;
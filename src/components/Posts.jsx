import { useEffect, useState } from "react";
import { FaArrowRight, FaRegCommentDots } from "react-icons/fa";
import { GiLoveHowl } from "react-icons/gi";
import { LuSendHorizonal } from "react-icons/lu";
import { Link } from "react-router-dom";

const Posts = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/post')
            .then((res) => res.json())
            .then(data => setPosts(data))
    }, []);

    return <div className="bg-[#141414]">
        <div className="container mx-auto">

            {posts.reverse().slice(0, 3).map((post) => (
                <div
                    key={post._id}
                    className="flex justify-between items-center pt-12 pb-12 border-b-8 border-yellow-300 shadow-lg rounded-lg p-5 mb-2 hover:bg-[#191919]"
                >
                    <div className="flex items-center gap-2">
                        <img className="w-20 h-20 rounded-full" src={post.image} alt={post.name} />
                        <div>
                            <h1 className="text-white font-semibold">{post.name}</h1>
                            <p className="text-gray-400">{post.title.slice(0, 52)}...</p>
                        </div>
                    </div>
                    <div>
                        <div className="flex flex-col justify-between">
                            <div>
                                <p className="text-gray-400">
                                    {new Date(post.currentTime).toLocaleDateString("en-US", {
                                        year: "numeric",
                                        month: "long",
                                        day: "numeric",
                                    })}
                                </p>
                                <h1 className="text-3xl font-medium text-white mt-3 mb-3">
                                    {post.introduction.slice(0, 52)}...
                                </h1>
                                <p className="text-gray-400">{post.description.slice(0, 100)}...</p>
                                <div className="flex gap-2 pt-4">
                                    <button className="flex items-center space-x-2">
                                        <GiLoveHowl className="text-red-500 w-6 h-6" />
                                        <p>24.5k</p>
                                    </button>
                                    <button className="flex items-center space-x-2">
                                        <FaRegCommentDots className="w-6 h-6" />
                                        <p>50</p>
                                    </button>
                                    <button className="flex items-center space-x-2">
                                        <LuSendHorizonal className="w-6 h-6" />
                                        <p>20</p>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Link to={`/postDetails/${post._id}`} className="btn btn-outline flex gap-2">
                            View Blog <FaArrowRight className="w-7 h-7 text-yellow-500" />
                        </Link>
                    </div>
                </div>
            ))}

        </div>
    </div>;
};
export default Posts;
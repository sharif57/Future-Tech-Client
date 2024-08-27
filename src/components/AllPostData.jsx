


import { useEffect, useState } from "react";
import { FaArrowRight, FaRegCommentDots } from "react-icons/fa";
import { GiLoveHowl } from "react-icons/gi";
import { LuSendHorizonal } from "react-icons/lu";
import { Link } from "react-router-dom";

const AllPostData = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/post')
            .then((res) => res.json())
            .then(data => setPosts(data))
    }, []);


    return (
        <div className="container mx-auto">
            <div className="bg-[#191919] py-16 px-16">
                <div className="container mx-auto">
                    <div className="flex justify-between items-center">
                        <div className="w-2/3">
                            <button className="bg-[#333333] p-2 rounded-md text-white font-medium">
                                View All more Blogs!
                            </button>
                            <h1 className="text-5xl font-semibold text-white mt-3">
                                Explore FutureTech's In-Depth Blog Posts
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
            {posts.reverse().map(post => (
                <div key={post._id} className="flex justify-between items-center pt-12 pb-12 border border-b-8 border-yellow-300 border-separate border-r-0 border-l-0 border-t-0 shadow-lg rounded-lg p-5 mb-2 hover:bg-[#191919]">
                    <div className="flex items-center gap-2">
                        <img
                            className="size-20 rounded-full"
                            src={post.image}
                            alt=""
                        />
                        <div>
                            <h1 className="text-white font-semibold">{post.name}</h1>
                            <p>{post.title.slice(0, 52)}...</p>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between items-center">
                            <div>
                                {new Date(post.currentTime).toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                })}
                                <h1 className="text-3xl font-medium text-white mt-3 mb-3">
                                    {post.introduction.slice(0, 52)}...
                                </h1>
                                <p>{post.description.slice(0, 100)}...</p>
                                <div className="flex gap-2 pt-4">
                                    <button className="btn space-x-2">
                                        <GiLoveHowl className="text-red-500 size-6" />
                                        <p>24.5k</p>
                                    </button>
                                    <button className="btn space-x-2">
                                        <FaRegCommentDots className="size-6" />
                                        <p>50</p>
                                    </button>
                                    <button className="btn space-x-2">
                                        <LuSendHorizonal className="size-6" />
                                        <p>20</p>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Link to={`/postDetails/${post._id}`} className="btn btn-outline flex gap-2">
                            View Blog <FaArrowRight className="size-7 text-yellow-500" />
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default AllPostData;

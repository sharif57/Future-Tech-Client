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
            {/* <div className="flex  justify-between items-center pt-12 pb-12 border border-green-200 border-dashed border-b-0 rounded-lg p-5 mb-2">
                <div className="flex items-center gap-2 ">
                    <img className="size-20 rounded-full" src="https://i.ibb.co/z6FB8pB/20240502162307521-jpeg.jpg" alt="" />
                    <div>
                        <h1 className="text-white font-semibold ">Sharif Mahamud</h1>
                        <p>web developer</p>
                    </div>
                </div>
                <div>
                    <div className="flex  justify-between  items-center ">
                        <div>
                            <p >October 15, 2023</p>
                            <h1 className="text-3xl font-medium text-white mt-3 mb-3">Explore FutureTech's In-Depth Blog Posts</h1>
                            <p>Explore the revolution in quantum computing, its applications, and its potential impact.</p>
                            <div className="flex gap-2 pt-4">
                                <button className="btn space-x-2">
                                    <GiLoveHowl className="text-red-500 size-6"></GiLoveHowl>
                                    <p>24.5k</p>
                                </button>
                                <button className="btn space-x-2">
                                <FaRegCommentDots className="size-6"/>
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
                    <button className="btn btn-outline flex gap-2">View Blog <FaArrowRight className="size-7 text-yellow-500" />
                    </button>
                </div>
            </div> */}
            {posts.slice().reverse().map(post => (
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
    </div>;
};
export default Posts;
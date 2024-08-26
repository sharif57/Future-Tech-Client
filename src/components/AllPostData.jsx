// import { useEffect, useState } from "react";
// import { FaArrowRight, FaRegCommentDots } from "react-icons/fa";
// import { GiLoveHowl } from "react-icons/gi";
// import { LuSendHorizonal } from "react-icons/lu";

// const AllPostData = () => {
//     const [posts, setPosts] = useState([])

//     useEffect(() => {
//         fetch('http://localhost:5000/post')
//             .then((res) => res.json())
//             .then(data => setPosts(data))
//     }, [])
//     return <div>
//         <div className="container mx-auto">
//             {/* <div>
//                 <img className="w-full h-[500px] bg-cover  relative" src="https://i.ibb.co/yFmW3Cz/Image-2.png" alt="" />
//             </div>
//             <h1 className=" absolute text-5xl ml-[230px] font-semibold -mt-20 text-center text-white">The Rise of Artificial Intelligence in Healthcare</h1>
//             <div className="p-12">
//                 <div className="w-2/3">
//                     <h1 className="text-2xl text-white font-semibold mb-3">Introduction</h1>
//                     <p>Artificial Intelligence (AI) has emerged as a transformative force in the healthcare industry, reshaping patient care, diagnostics, and research. In this blog post, we explore the profound impact of AI in healthcare, from revolutionizing diagnostic accuracy to enhancing patient outcomes.</p>

//                     <h1 className="text-2xl font-semibold text-white mb-3 mt-14">Artificial Intelligence (AI)</h1>
//                     <p className="mt-3 ">Artificial Intelligence (AI) has permeated virtually every aspect of our lives, and healthcare is no exception. The integration of AI in healthcare is ushering in a new era of medical practice, where machines complement the capabilities of healthcare professionals, ultimately improving patient outcomes and the efficiency of the healthcare system. In this blog post, we will delve into the diverse applications of AI in healthcare, from diagnostic imaging to personalized treatment plans, and address the ethical considerations surrounding this revolutionary technology.</p>
//                     <p className="mt-3 ">Artificial Intelligence (AI) has permeated virtually every aspect of our lives, and healthcare is no exception. The integration of AI in healthcare is ushering in a new era of medical practice, where machines complement the capabilities of healthcare professionals, ultimately improving patient outcomes and the efficiency of the healthcare system. In this blog post, we will delve into the diverse applications of AI in healthcare, from diagnostic imaging to personalized treatment plans, and address the ethical considerations surrounding this revolutionary technology.</p>
//                 </div>
//                 <div className="w-1/3">

//                 </div>
//             </div> */}

//             <div>
//                 <div className="bg-[#191919] py-16 px-16">
//                     <div className="container mx-auto">
//                         <div className="flex  justify-between items-center ">
//                             <div className="w-2/3">
//                                 <button className="bg-[#333333] p-2 rounded-md text-white font-medium">View All more Blogs!</button>
//                                 <h1 className="text-5xl font-semibold text-white mt-3">Explore FutureTech's In-Depth Blog Posts
//                                 </h1>
//                             </div>

//                         </div>
//                     </div>
//                 </div>
//                 {
//                     posts.map(post => (
//                         <div key={post._id} className="flex  justify-between items-center pt-12 pb-12 shadow-xl hover: rounded-lg p-5 mb-2">
//                             <div className="flex items-center gap-2 ">
//                                 <img className="size-20 rounded-full" src="https://i.ibb.co/z6FB8pB/20240502162307521-jpeg.jpg" alt="" />
//                                 <div>
//                                     <h1 className="text-white font-semibold ">{post.name}</h1>
//                                     <p>{post.title}</p>
//                                 </div>
//                             </div>
//                             <div>
//                                 <div className="flex  justify-between  items-center ">
//                                     <div>
//                                         <p >{post.currentTime}</p>
//                                         <h1 className="text-3xl font-medium text-white mt-3 mb-3">{post.introduction}</h1>
//                                         <p>Explore the revolution in quantum computing, its applications, and its potential impact.</p>
//                                         <div className="flex gap-2 pt-4">
//                                             <button className="btn space-x-2">
//                                                 <GiLoveHowl className="text-red-500 size-6"></GiLoveHowl>
//                                                 <p>24.5k</p>
//                                             </button>
//                                             <button className="btn space-x-2">
//                                                 <FaRegCommentDots className="size-6" />
//                                                 <p>50</p>
//                                             </button>
//                                             <button className="btn space-x-2">
//                                                 <LuSendHorizonal className="size-6" />
//                                                 <p>20</p>
//                                             </button>
//                                         </div>
//                                     </div>

//                                 </div>
//                             </div>
//                             <div>
//                                 <button className="btn btn-outline flex gap-2">View Blog <FaArrowRight className="size-7 text-yellow-500" />
//                                 </button>
//                             </div>
//                         </div>
//                     ))
//                 }
//             </div>
//         </div>
//     </div>;
// };
// export default AllPostData;


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

    const formatTime = (timeString) => {
        const date = new Date(timeString);
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');
        return `${hours}:${minutes}:${seconds}`;
    };

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
            {posts.map(post => (
                <div key={post._id} className="flex justify-between items-center pt-12 pb-12 shadow-xl rounded-lg p-5 mb-2">
                    <div className="flex items-center gap-2">
                        <img
                            className="size-20 rounded-full"
                            src="https://i.ibb.co/z6FB8pB/20240502162307521-jpeg.jpg"
                            alt=""
                        />
                        <div>
                            <h1 className="text-white font-semibold">{post.name}</h1>
                            <p>{post.title}</p>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between items-center">
                            <div>
                                <p>{formatTime(post.currentTime)}</p>
                                <h1 className="text-3xl font-medium text-white mt-3 mb-3">
                                    {post.introduction}
                                </h1>
                                <p>{post.description}</p>
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

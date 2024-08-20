import { FaArrowRight, FaRegCommentDots } from "react-icons/fa";
import { GiLoveHowl } from "react-icons/gi";
import { LuSendHorizonal } from "react-icons/lu";

const Posts = () => {
    return <div className="bg-[#141414]">
        <div className="container mx-auto">
            <div className="flex  justify-between items-center pt-12 pb-12 border border-dashed border-b-0 rounded-lg p-5 mb-2">
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
            </div>
            <div className="flex  justify-between items-center pt-12 pb-12 border border-dashed border-b-0 rounded-lg p-5 mb-2">
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
            </div>
            <div className="flex  justify-between items-center pt-12 pb-12 border border-dashed border-b-0 rounded-lg p-5 ">
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
            </div>
        </div>
    </div>;
};
export default Posts;
import { FaArrowRight, FaRegCommentDots } from "react-icons/fa";
import { GiLoveHowl } from "react-icons/gi";
import { LuSendHorizonal } from "react-icons/lu";
import Posts from "../../components/Posts";

const News = () => {
    return <div className="bg-[#141414]">
        <div className="container mx-auto">
            <div className=" pb-10">
                <div className="flex  justify-between items-center py-16 ">
                    <div className="">
                        <h1 className="text-5xl font-semibold text-white mt-3">Today's Headlines: Stay Informed</h1>
                    </div>
                    <div>
                        <p>Explore the latest news from around the world. We bring you up-to-the-minute updates on the most significant events, trends, and stories. Discover the world through our news coverage.</p>
                    </div>
                </div>

                <div className="flex justify-center items-center gap-8">
                    <div>
                        <img src="https://i.ibb.co/yFmW3Cz/Image-2.png" alt="" />
                    </div>
                    <div className="p-6">
                        <h1 className="text-xl font-semibold text-white mb-4">Global Climate Summit Addresses Urgent Climate Action</h1>
                        <p className="mt-2">World leaders gathered at the Global Climate Summit to discuss urgent climate action, emissions reductions, and renewable energy targets.</p>
                        <div className="flex gap-8 mt-6 mb-">
                            <div>
                                <h3>Category</h3>
                                <p className="text-white font-bold">Environment</p>
                            </div>
                            <div>
                                <h3>Publication Date</h3>
                                <p className="text-white font-bold">October 10, 2023</p>
                            </div>
                            <div>
                                <h3>Author</h3>
                                <p className="text-white font-bold">Jane Smith</p>
                            </div>
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="flex gap-2 pt-4">
                                <button className="btn space-x-2">
                                    <GiLoveHowl className="text-red-500 size-6"></GiLoveHowl>
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
                            <button className="btn btn-outline text-white">Read more</button>
                        </div>
                    </div>
                </div>
                <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">

                    <div>
                        <img className="h-[200px] w-full bg-cover object-fill rounded-lg" src="https://i.ibb.co/5jyD2yC/boy-girl-fight-racism-quote-cardboard-23-2148576151.jpg" alt="" />
                        <div>
                            <h1 className="text-white text-xl font-semibold mt-3">A Decisive Victory for Progressive Policies</h1>
                            <p>Policies</p>
                        </div>
                        <div className="flex items-center justify-between gap-8">
                            <div className="flex gap-4 pt-4">
                                <button className="flex items-center gap-2 btn">
                                    <GiLoveHowl className="text-red-500 text-lg" />
                                    <p>24.5k</p>
                                </button>
                                <button className="flex items-center gap-2 btn">
                                    <LuSendHorizonal className="text-lg" />
                                    <p>20</p>
                                </button>
                            </div>
                            <button className="btn btn-outline text-white">Read more</button>
                        </div>
                    </div>
                    <div>
                        <img className="h-[200px] w-full bg-cover object-fill rounded-lg" src="https://i.ibb.co/1znCryL/digital-composite-image-businessman-touching-device-screen-1048944-11552675.jpg" alt="" />
                        <div>
                            <h1 className="text-white text-xl font-semibold mt-3">Tech Giants Unveil Cutting-Edge AI Innovations</h1>
                            <p>Technology</p>
                        </div>
                        <div className="flex items-center justify-between gap-8">
                            <div className="flex gap-4 pt-4">
                                <button className="flex items-center gap-2 btn">
                                    <GiLoveHowl className="text-red-500 text-lg" />
                                    <p>24.5k</p>
                                </button>
                                <button className="flex items-center gap-2 btn">
                                    <LuSendHorizonal className="text-lg" />
                                    <p>20</p>
                                </button>
                            </div>
                            <button className="btn btn-outline text-white">Read more</button>
                        </div>
                    </div>
                    <div>
                        <img className="h-[200px] w-full bg-cover object-fill rounded-lg" src="https://i.ibb.co/bmphSCc/doctor-starting-recovery-plan-with-her-patient-23-2148813498.jpg" alt="" />
                        <div>
                            <h1 className="text-white text-xl font-semibold mt-3">COVID-19 Variants</h1>
                            <p>Health</p>
                        </div>
                        <div className="flex items-center justify-between gap-8">
                            <div className="flex gap-4 pt-4">
                                <button className="flex items-center gap-2 btn">
                                    <GiLoveHowl className="text-red-500 text-lg" />
                                    <p>24.5k</p>
                                </button>
                                <button className="flex items-center gap-2 btn">
                                    <LuSendHorizonal className="text-lg" />
                                    <p>20</p>
                                </button>
                            </div>
                            <button className="btn btn-outline text-white">Read more</button>
                        </div>
                    </div>

                </div>
            </div>
            <div>
                <div className="flex  justify-between items-center py-16 bg-[#191919]">
                    <div className="">
                        <p>Welcome to Our News Hub</p>
                        <h1 className="text-5xl font-semibold text-white mt-3">Discover the World of Headlines</h1>
                    </div>
                    <div>
                        <button className="btn btn-outline flex gap-2">View All Blogs <FaArrowRight className="size-7 text-yellow-500" />
                        </button>
                    </div>
                </div>
            </div>
            <Posts></Posts>
        </div>

    </div>;
};
export default News;
import { FaRegCommentDots } from "react-icons/fa";
import { GiLoveHowl } from "react-icons/gi";
import { LuSendHorizonal } from "react-icons/lu";
import { useLoaderData } from "react-router-dom";

const BookMarkDetails = () => {
    const items = useLoaderData()
    return <div>
        <div>
            <div className="container mx-auto shadow-2xl">
                <div>
                    <img className="w-full h-[500px] rounded-t-badge bg-cover  lg:relative" src={items.photo} alt="" />
                </div>
                <h1 className=" lg:absolute text-4xl ml-[130px] font-semibold -mt-20 text-center text-black bg-opacity-70 rounded-lg bg-slate-300 p-4">
                    {items.title.slice(0, 50)}...
                </h1>
                <div className="p-12 flex gap-[200px]">
                    <div className="w-2/3">
                        <h1 className="text-2xl text-white font-semibold mb-3">Introduction</h1>
                        <p>{items.introduction}</p> {/* Use the correct field name */}

                        <h1 className="text-2xl font-semibold text-white mb-3 mt-14">{items.category}</h1>
                        <p className="mt-3 ">{items.description}</p>
                    </div>
                    <div className="w-1/3">
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
                        <div className="flex gap-12 mt-14 ">
                            <div>
                                <div>
                                    <h1>Publication Date</h1>
                                    <p className="  text-white">
                                        {new Date(items.currentTime).toLocaleDateString('en-US', {
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric'
                                        })}
                                    </p>
                                </div>
                                <div className="mt-8">
                                    <h1>Category</h1>
                                    <p className=" text-white">{items.category}</p>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <h1>Reading Time</h1>
                                    <p className=" text-white">10 Min</p>
                                </div>
                                <div className="mt-8">
                                    <h1>Author Name</h1>
                                    <p className=" text-white">{items.name}</p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-8 ">
                            <h1>Table of Contents</h1>
                            <div className="bg-[#141414] p-6 mt-4 rounded-lg">
                                <li className="text-xs text-white font-normal">{items.table}</li>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>;
};
export default BookMarkDetails;
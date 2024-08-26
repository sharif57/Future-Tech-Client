import { useContext } from "react";
import { FaRegCommentDots } from "react-icons/fa";
import { GiLoveHowl } from "react-icons/gi";
import { LuSendHorizonal } from "react-icons/lu";
import { useLoaderData, } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const PostDetails = () => {

    const items = useLoaderData()
    // console.log(items);
    const { user } = useContext(AuthContext)

    return <div>
        <div className="container mx-auto">
            <div>
                <img className="w-full h-[500px] bg-cover  relative" src={items.photo} alt="" />
            </div>
            <h1 className=" absolute text-5xl ml-[230px] font-semibold -mt-20 text-center text-black bg-opacity-70 rounded-lg bg-slate-300 p-8">The Rise of Artificial Intelligence in Healthcare</h1>
            <div className="p-12 flex gap-[200px]">
                <div className="w-2/3">
                    <h1 className="text-2xl text-white font-semibold mb-3">Introduction</h1>
                    <p>Artificial Intelligence (AI) has emerged as a transformative force in the healthcare industry, reshaping patient care, diagnostics, and research. In this blog post, we explore the profound impact of AI in healthcare, from revolutionizing diagnostic accuracy to enhancing patient outcomes.</p>

                    <h1 className="text-2xl font-semibold text-white mb-3 mt-14">{items.title}</h1>
                    <p className="mt-3 ">{items.description}</p>
                    {/* <p className="mt-3 ">Artificial Intelligence (AI) has permeated virtually every aspect of our lives, and healthcare is no exception. The integration of AI in healthcare is ushering in a new era of medical practice, where machines complement the capabilities of healthcare professionals, ultimately improving patient outcomes and the efficiency of the healthcare system. In this blog post, we will delve into the diverse applications of AI in healthcare, from diagnostic imaging to personalized treatment plans, and address the ethical considerations surrounding this revolutionary technology.</p> */}
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
                                <p className="text-xl font-semibold text-white">
                                    {new Date(items.currentTime).toLocaleDateString('en-US', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric'
                                    })}
                                </p>
                            </div>
                            <div className="mt-8">
                                <h1>Category</h1>
                                <p className="text-xl font-semibold text-white">{items.title}</p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <h1>Reading Time</h1>
                                <p className="text-xl font-semibold text-white">10 Min</p>
                            </div>
                            <div className="mt-8">
                                <h1>Author Name</h1>
                                <p className="text-xl font-semibold text-white">{items.name}</p>
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
    </div>;
};
export default PostDetails;
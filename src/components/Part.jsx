import { FaArrowRight } from "react-icons/fa";
import { FaArrowTrendUp } from "react-icons/fa6";

const Part = () => {
    return <div className="bg-[#191919] py-16 px-16">
        <div className="container mx-auto">
            <div className="flex flex-row-reverse justify-between items-center gap-10 ">
                <div className="">
                    <button className="bg-[#333333] p-2 rounded-md text-white font-medium">Learn, Connect, and Innovate</button>
                    <h1 className="text-5xl font-semibold text-white mt-3">Be Part of the Future Tech Revolution</h1>
                    <p className="mt-3 ">Immerse yourself in the world of future technology. Explore our comprehensive resources, connect with fellow tech enthusiasts, and drive innovation in the industry. Join a dynamic community of forward-thinkers.</p>
                </div>
                <div>
                    <img src="https://i.ibb.co/1TnY0p7/Logo-2.png" alt="" />
                </div>
            </div>

            <div className="bg-[#141414] mt-16 rounded-lg p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="flex  bg-[#191919] p-10 rounded-lg">
                    <div>
                        <h1 className="text-xl text-white font-semibold mb-2">Resource Access</h1>
                        <p>Visitors can access a wide range of resources, including ebooks, whitepapers, reports.</p>
                    </div>
                    <FaArrowRight className="bg-yellow-300 text-black p-4 rounded-lg"></FaArrowRight>

                </div>
                <div className="flex bg-[#191919] p-10 rounded-lg">
                    <div>
                        <h1 className="text-xl text-white font-semibold mb-2"> Community Forum</h1>
                        <p>Join our active community forum to discuss industry trends, share insights, and collaborate with peers.</p>
                    </div>
                    <FaArrowRight className="bg-yellow-300 p-4 rounded-lg"></FaArrowRight>
                </div>
                <div className="flex bg-[#191919] p-10 rounded-lg">
                    <div>
                        <h1 className="text-xl text-white mb-2 font-semibold">Tech Events</h1>
                        <p>Stay updated on upcoming tech events, webinars, and conferences to enhance your knowledge.</p>
                    </div>
                    <FaArrowRight className="bg-yellow-300 text-black p-4 rounded-lg"></FaArrowRight>
                </div>
            </div>
        </div>
    </div>;
};
export default Part;
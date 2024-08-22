import { FaArrowRight } from "react-icons/fa";

const Explore = () => {
    return <div className="bg-[#191919] py-16 px-16">
        <div className="container mx-auto">
            <div className="flex  justify-between items-center">
                <div>
                    <button className="bg-[#333333] p-2 rounded-md text-white font-medium">A Knowledge Treasure Trove</button>
                    <h1 className="text-5xl font-bold text-white mt-3">Explore FutureTech's In-Depth Blog Posts</h1>
                </div>
                <div>
                    <button className="btn btn-outline flex gap-2">View All Blogs <FaArrowRight className="size-7 text-yellow-500" />
                    </button>
                </div>
            </div>
        </div>
    </div>;
};
export default Explore;
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Explore = () => {
    return <div className="bg-[#191919] lg:py-16 lg:px-16 p-2">
        <div className="container mx-auto">
            <div className="lg:flex  justify-between items-center">
                <div>
                    <button className="bg-[#333333] p-2 rounded-md text-white font-medium">A Knowledge Treasure Trove</button>
                    <h1 className="lg:text-5xl text-xl font-semibold text-white mt-3">Explore FutureTech's In-Depth Blog Posts</h1>
                </div>
                <div>
                    <Link to={'/allPostData'} className="btn btn-outline flex gap-2 lg:mt-0 mt-4">View All Blogs <FaArrowRight className="size-7 text-yellow-500" />
                    </Link>
                </div>
            </div>
        </div>
    </div>;
};
export default Explore;
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Review = () => {
    return <div className="bg-[#191919] py-16 px-16">
        <div className="container mx-auto">
            <div className="flex  justify-between items-center ">
                <div className="w-2/3">
                    <button className="bg-[#333333] p-2 rounded-md text-white font-medium">What Our Readers Say</button>
                    <h1 className="text-5xl font-semibold text-white mt-3">Real Words from Real Readers</h1>
                </div>
                <div>
                    <Link to={'/allReviews'} className="btn btn-outline flex gap-2">View All Testimonials <FaArrowRight className="size-7 text-yellow-500" />
                    </Link>
                </div>
            </div>
        </div>
    </div>;
};
export default Review;
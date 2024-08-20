import { FaArrowRight } from "react-icons/fa";

const Unlock = () => {
    return <div className="bg-[#191919] py-16 px-16">
        <div className="container mx-auto">
            <div className="flex  justify-between items-center ">
                <div className="w-2/3">
                    <button className="bg-[#333333] p-2 rounded-md text-white font-medium">Your Gateway to In-Depth Information</button>
                    <h1 className="text-5xl font-semibold text-white mt-3">Unlock Valuable Knowledge with FutureTech's Resources</h1>
                </div>
                <div>
                    <button className="btn btn-outline flex gap-2">View All Resources <FaArrowRight className="size-7 text-yellow-500" />
                    </button>
                </div>
            </div>
        </div>
    </div>;
};
export default Unlock;
import { FaArrowRight } from "react-icons/fa";

const Resources = () => {
    return <div className="bg-[#141414]">
        <div className="container mx-auto">

            <div className="flex  justify-between  items-center gap-10">
                <div className="w-1/3 space-y-6">
                    <img src="https://i.ibb.co/XXJDP1s/Group-234.png" alt="" />
                    <h1 className="text-5xl font-semibold text-white">Ebooks</h1>
                    <p>Explore our collection of ebooks covering a wide spectrum of future technology topics.</p>
                    <div>
                        <button className="btn btn-outline flex gap-2 w-full">Download Ebooks Now <FaArrowRight className="size-7 text-yellow-500" />
                        </button>
                    </div>
                    <div>
                        <div className="bg-[#191919] flex justify-around p-5 rounded-lg">
                            <div>
                                <h1>Downloaded By</h1>
                                <p className="text-white font-semibold text-2xl">10k + users</p>
                            </div>
                            <div>
                                <img src="https://i.ibb.co/1ZDmpTS/Container-2.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="flex justify-between gap-5">
                        <h1 className="text-2xl font-semibold text-white w-1/5">Variety of Topics</h1>
                        <p>Topics include AI in education (25%), renewable energy (20%), healthcare (15%), space exploration (25%), and biotechnology (15%).</p>
                    </div>
                    <img src="https://i.ibb.co/DkbYqMT/Image.png" alt="" />

                    <div className="bg-[#191919]">
                        <h1>Total Ebooks</h1>
                        <p>Over 100 ebooks</p>
                    </div>
                </div>
            </div>
        </div>

    </div>;
};
export default Resources;
import { FaArrowRight, FaEye } from "react-icons/fa";

const Resources = () => {

    // const [items, setItems] = useState([])

    // useEffect(() => {
    //     fetch('http://localhost:5000/resource')
    //         .then(res => res.json())
    //         .then(data => setItems(data))
    // }, [])

    return <div className="bg-[#141414]">
        <div className="container mx-auto ">


            <div className="lg:flex  justify-between  items-center gap-10 lg:pt-16 pb-16 p-4">
                <div className="lg:w-1/3 space-y-6">
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
                                <p className="text-white font-semibold lg:text-2xl">10k + users</p>
                            </div>
                            <div>
                                <img src="https://i.ibb.co/1ZDmpTS/Container-2.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="lg:flex justify-between gap-5 mb-8">
                        <h1 className="text-2xl font-semibold text-white lg:w-1/5 ">Variety of Topics</h1>
                        <p className="lg:mt-0 mt-2">Topics include AI in education (25%), renewable energy (20%), healthcare (15%), space exploration (25%), and biotechnology (15%).</p>
                    </div>
                    {/* <img src="https://i.ibb.co/DkbYqMT/Image.png" alt="" /> */}
                    <video src='/video-1.mp4' controls autoPlay autoFocus className="w-full lg:h-96 h-48 object-cover rounded-lg">
                        Your browser does not support the video tag.
                    </video>

                    <div className="lg:flex justify-between items-center mt-8 ">
                        <div className="bg-[#191919]  px-6 rounded-lg py-2 lg:w-1/4">
                            <h1>Total Ebooks</h1>
                            <p className="text-xl font-semibold text-white">Over 100 ebooks</p>
                        </div>

                        <div className="bg-[#191919] px-6 rounded-lg py-2 lg:w-1/2">

                            <div className="flex  justify-between items-center ">
                                <div>
                                    <p>Download Formats</p>
                                    <h1 className="lg:text-xl font-semibold text-white mt-3">PDF format for access.</h1>
                                </div>
                                <div>
                                    <button className="btn btn-outline flex gap-2">Preview<FaEye className="size-7 text-yellow-500" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#191919] px-6 rounded-lg pt-5 pb-6 mt-3">

                        <div className="flex  justify-between items-center ">
                            <div>
                                <p>Average Author Expertise</p>
                                <h1 className="lg:text-xl font-semibold text-white mt-3">Ebooks are authored by renowned experts with an average of 15 years of experience .</h1>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="lg:flex  justify-between  items-center gap-10 lg:pt-16 pb-16 p-4">
                <div className="lg:w-1/3 space-y-6">
                    <img src="https://i.ibb.co/XXJDP1s/Group-234.png" alt="" />
                    <h1 className="text-5xl font-semibold text-white">Whitepapers</h1>
                    <p>Dive into comprehensive reports and analyses with our collection of whitepapers.</p>
                    <div>
                        <button className="btn btn-outline flex gap-2 w-full">Download Ebooks Now <FaArrowRight className="size-7 text-yellow-500" />
                        </button>
                    </div>
                    <div>
                        <div className="bg-[#191919] flex justify-around p-5 rounded-lg">
                            <div>
                                <h1>Downloaded By</h1>
                                <p className="text-white font-semibold lg:text-2xl">10k + users</p>
                            </div>
                            <div>
                                <img src="https://i.ibb.co/1ZDmpTS/Container-2.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="lg:flex justify-between gap-5 mb-8">
                        <h1 className="text-2xl font-semibold text-white lg:w-1/5 ">Topics Coverage</h1>
                        <p className="lg:mt-0 mt-2">Whitepapers cover quantum computing (20%), AI ethics (15%), space mining prospects (20%), AI in healthcare (15%), and renewable energy strategies (30%).</p>
                    </div>
                    {/* <img src="https://i.ibb.co/DkbYqMT/Image.png" alt="" /> */}
                    <video src="/video-3.mp4" controls autoPlay autoFocus className="w-full lg:h-96 h-48 object-cover rounded-lg">
                        Your browser does not support the video tag.
                    </video>

                    <div className="lg:flex justify-between items-center mt-8 ">
                        <div className="bg-[#191919]  px-6 rounded-lg py-2 lg:w-1/4">
                            <h1>Total Ebooks</h1>
                            <p className="text-xl font-semibold text-white">Over 100 ebooks</p>
                        </div>

                        <div className="bg-[#191919] px-6 rounded-lg py-2 lg:w-1/2">

                            <div className="flex  justify-between items-center ">
                                <div>
                                    <p>Download Formats</p>
                                    <h1 className="lg:text-xl font-semibold text-white mt-3">PDF format for access.</h1>
                                </div>
                                <div>
                                    <button className="btn btn-outline flex gap-2">Preview<FaEye className="size-7 text-yellow-500" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#191919] px-6 rounded-lg pt-5 pb-6 mt-3">

                        <div className="flex  justify-between items-center ">
                            <div>
                                <p>Average Author Expertise</p>
                                <h1 className="lg:text-xl font-semibold text-white mt-3">An intermediate stage, level, or position is one that occurs between two other stages, levels, or positions.</h1>
                            </div>

                        </div>
                    </div>
                </div>
            </div>



          
        </div>

    </div>;
};
export default Resources;
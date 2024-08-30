import { FaArrowTrendUp } from "react-icons/fa6";

const Banner = () => {
    return <div className=" container mx-auto p-2">
        <div className="lg:flex justify-center items-center gap-12 lg:pb-28">
            <div className="lg:w-1/2">
                {/* <img src="https://i.ibb.co/mCdQsF0/Container-1.png" alt="" /> */}
                <div className="lg:pt-24 pt-10">
                    <p className="font-semibold text-xl ">Your Journey to Tomorrow Begins Here</p>
                    <h1 className="lg:text-6xl text-2xl text-white mt-5 font-semibold">Explore the Frontiers of Artificial Intelligence</h1>
                    <p className="mt-5"> Welcome to the epicenter of AI innovation. FutureTech AI News is your passport to a world where machines think, learn, and reshape the future. Join us on this visionary expedition into the heart of AI.</p>
                </div>
                <div className="grid grid-cols-3  lg:pt-24 pt-12">
                    <div>
                        <h1 className="lg:text-5xl text-2xl text-white font-semibold">300<span className="text-yellow-400">+</span></h1>
                        <p className="mt-2">Resources available</p>
                    </div>
                    <div>
                        <h1 className="lg:text-5xl text-2xl text-white font-semibold">12<span className="text-yellow-400">+</span></h1>
                        <p className="mt-2">Total Downloads</p>
                    </div>
                    <div>
                        <h1 className="lg:text-5xl text-2xl text-white font-semibold">10<span className="text-yellow-400">+</span></h1>
                        <p className="mt-2">Active Users</p>
                    </div>

                </div>
            </div>
            <div className="lg:w-1/2" style={{ backgroundImage: "url('/banner.png')", backgroundSize: "cover", backgroundPosition: "center", height: "400px" }}>
                {/* Additional content here */}
                <div className="lg:pt-[250px] space-y-4 pt-14 p-6 lg:mt-0 mt-6 lg:px-40">
                    <img src="https://i.ibb.co/1ZDmpTS/Container-2.png" alt="" />
                    <h1 className="text-3xl font-semibold text-white">Explore 1000+ resources</h1>
                    <p>Over 1,000 articles on emerging tech trends and breakthroughs.</p>
                    <button className="btn btn-outline">Explore Resources <FaArrowTrendUp className="size-6 text-yellow-300" />                    </button>
                </div>
            </div>
        </div>

    </div>;
};
export default Banner;
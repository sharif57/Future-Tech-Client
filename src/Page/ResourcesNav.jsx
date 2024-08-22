/* eslint-disable react/no-unescaped-entities */
const ResourcesNav = () => {
    return <div className="bg-[#141414]">
        <div className="container mx-auto ">
            <div className="py-32">
                <div className="flex  justify-between items-center gap-8  ">
                    <div className="">
                        <h1 className="text-5xl font-semibold text-white mt-3">Unlock a World of Knowledge.</h1>
                    </div>
                    <div>
                        <p>Dive deep into the AI universe with our collection of insightful podcasts. Explore the latest trends, breakthroughs, and discussions on artificial intelligence. Whether you're an enthusiast or a professional, our AI podcasts offer a gateway to knowledge and innovation.</p>
                    </div>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-4 pt-28">
                    <div>
                        <h1 className="text-5xl text-white font-semibold">300<span className="text-yellow-400">+</span></h1>
                        <p className="mt-2">Resources available</p>
                    </div>
                    <div>
                        <h1 className="text-5xl text-white font-semibold">12k<span className="text-yellow-400">+</span></h1>
                        <p className="mt-2">Total Downloads</p>
                    </div>
                    <div>
                        <h1 className="text-5xl text-white font-semibold">10k<span className="text-yellow-400">+</span></h1>
                        <p className="mt-2">Active Users</p>
                    </div>
                    <div>
                        <h1 className="text-5xl text-white font-semibold">100<span className="text-yellow-400">+</span></h1>
                        <p className="mt-2">Countries Accesses Our Content </p>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-center gap-12 pt-14 pb-14">
                <div className="w-2/5 space-y-5">
                    <img src="/public/Group (2).png" alt="" />
                    <h1 className="text-4xl font-semibold text-white">Quantum Computing Whitepaper</h1>
                    <p>Provides technical specifications and requirements for implementing quantum computing systems.</p>
                  
                </div>
                <div className="w-3/5">
                    <video
                        src="https://videos.pexels.com/video-files/6964235/6964235-sd_640_360_25fps.mp4"
                        controls autoPlay autoFocus
                        className="w-full  h-96 object-cover  rounded-lg"
                    >
                        Your browser does not support the video tag.
                    </video>
                    <h1 className="text-xl text-white font-semibold mb-2 mt-4">Quantum Computing Whitepaper</h1>
                    <p>An in-depth whitepaper exploring the principles, applications, and potential impact of quantum computing.</p>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-10 bg-[#191919] p-6 rounded-lg">
                        <div>
                            <p className="text-white">Publication Date</p>
                            <h1 className="text-xl text-white font-semibold">July 2023</h1>
                        </div>
                        <div>
                            <p className="text-white">Category</p>
                            <h1 className="text-xl text-white font-semibold">Quantum Computing</h1>
                        </div>
                        <div>
                            <p className="text-white"> Author</p>
                            <h1 className="text-xl text-white font-semibold">Dr. Quantum</h1>
                        </div>
                    </div>

                </div>
            </div>
            <div className="flex items-center justify-center gap-12 pt-14 pb-14">
                <div className="w-2/5 space-y-5">
                    <img src="/public/Group 236.png" alt="" />
                    <h1 className="text-4xl font-semibold text-white">Space Exploration Whitepaper</h1>
                    <p>An in-depth whitepaper covering the latest advancements in space exploration, including Mars missions and asteroid mining.</p>
                  
                </div>
                <div className="w-3/5">
                    <video
                        src="https://videos.pexels.com/video-files/7169896/7169896-sd_960_506_25fps.mp4"
                        controls autoPlay autoFocus
                        className="w-full  h-96 object-cover  rounded-lg"
                    >
                        Your browser does not support the video tag.
                    </video>
                    <h1 className="text-xl text-white font-semibold mb-2 mt-4">Space Exploration Whitepaper</h1>
                    <p>An in-depth whitepaper exploring the principles, applications, and potential impact of quantum computing.</p>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-10 bg-[#191919] p-6 rounded-lg">
                        <div>
                            <p className="text-white">Publication Date</p>
                            <h1 className="text-xl text-white font-semibold">September 2023</h1>
                        </div>
                        <div>
                            <p className="text-white">Category</p>
                            <h1 className="text-xl text-white font-semibold">Space Exploration</h1>
                        </div>
                        <div>
                            <p className="text-white"> Author</p>
                            <h1 className="text-xl text-white font-semibold">FutureTech Space Division</h1>
                        </div>
                    </div>

                </div>
            </div>


        </div>
    </div>;
};
export default ResourcesNav;
/* eslint-disable react/no-unescaped-entities */

import { FaArrowRight } from "react-icons/fa";

const Podcasts = () => {
    return <div className="bg-[#141414]">
        <div className="container mx-auto">

            <div className="flex  justify-between items-center py-16">
                <div>
                    <h1 className="text-4xl font-semibold text-white mt-3">Unlock the World of Artificial Intelligence through Podcasts.</h1>
                </div>
                <div>
                    <p>Dive deep into the AI universe with our collection of insightful podcasts. Explore the latest trends, breakthroughs, and discussions on artificial intelligence. Whether you're an enthusiast or a professional, our AI podcasts offer a gateway to knowledge and innovation.</p>
                </div>
            </div>

            <div className="flex items-center justify-center gap-12 pt-14 pb-14">
                <div className="w-2/5 space-y-5">
                    <img src="/Icon (5).png" alt="" />
                    <div className="flex items-center justify-between mt-4">
                        <h1 className="text-4xl font-semibold text-white">AI Revolution</h1>
                    </div>

                    <div className="flex justify-between items-center bg-[#191919] p-6 rounded-lg">
                        <div>
                            <p>Host</p>
                            <h1 className="text-xl text-white font-semibold">Dr. Sarah Mitchell</h1>
                        </div>
                        <button className="btn btn-outline text-white">Listen Podcast</button>
                    </div>
                </div>
                <div className="w-3/5">
                    <video
                        src="https://videos.pexels.com/video-files/7579953/7579953-sd_960_506_25fps.mp4"
                        controls autoPlay autoFocus
                        className="w-full  h-96 object-cover  rounded-lg"
                    >
                        Your browser does not support the video tag.
                    </video>
                    <h1 className="text-xl text-white font-semibold mb-2 mt-4">Delves into the transformative impact of AI</h1>
                    <p>Join Dr. Sarah Mitchell as she delves into the transformative impact of AI on industries, featuring expert interviews and real-world case studies. Explore the possibilities of AI in healthcare, finance, and more.</p>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-10 bg-[#191919] p-6 rounded-lg">
                        <div>
                            <p className="text-white">Total Episodes</p>
                            <h1 className="text-xl text-white font-semibold">50</h1>
                        </div>
                        <div>
                            <p className="text-white">Average Episode Length</p>
                            <h1 className="text-xl text-white font-semibold">30 min</h1>
                        </div>
                        <div>
                            <p className="text-white">Release Frequency</p>
                            <h1 className="text-xl text-white font-semibold">Weekly</h1>
                        </div>
                    </div>

                </div>
            </div>

            <div className="flex items-center justify-center gap-12 pt-10 pb-10">
                <div className="w-2/5 space-y-5">
                    <img src="/Icon (5).png" alt="" />
                    <div className="flex items-center justify-between mt-4">
                        <h1 className="text-4xl font-semibold text-white">AI Conversations</h1>
                        {/* <img src=" alt="" /> */}
                    </div>

                    <div className="flex justify-between items-center bg-[#191919] p-6 rounded-lg">
                        <div>
                            <p>Host</p>
                            <h1 className="text-xl text-white font-semibold">Mark Anderson</h1>
                        </div>
                        <button className="btn btn-outline text-white">Listen Podcast</button>
                    </div>
                </div>
                <div className="w-3/5">
                    <video
                        src="https://videos.pexels.com/video-files/3129957/3129957-sd_640_360_25fps.mp4"
                        controls autoPlay autoFocus
                        className="w-full  h-96 object-cover  rounded-lg"
                    >
                        Your browser does not support the video tag.
                    </video>
                    <h1 className="text-xl text-white font-semibold mb-2 mt-4">Engage in thought-provoking conversations with leading experts.</h1>
                    <p>Mark discusses the future of AI, the impact on society, and how it's shaping industries worldwide. Engage in thought-provoking conversations with leading experts.</p>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-10 bg-[#191919] p-6 rounded-lg">
                        <div>
                            <p className="text-white">Total Episodes</p>
                            <h1 className="text-xl text-white font-semibold">50</h1>
                        </div>
                        <div>
                            <p className="text-white">Average Episode Length</p>
                            <h1 className="text-xl text-white font-semibold">30 min</h1>
                        </div>
                        <div>
                            <p className="text-white">Release Frequency</p>
                            <h1 className="text-xl text-white font-semibold">Weekly</h1>
                        </div>
                    </div>

                </div>
            </div>

            <div className=" ">
                <div className="flex  justify-between items-center py-16">
                    <div>
                        <button className="bg-[#333333] p-2 rounded-md text-white font-medium">Featured Videos</button>
                        <h1 className="text-5xl font-semibold text-white mt-3">Latest Podcast Episodes</h1>
                    </div>
                    <div>
                        <button className="btn btn-outline flex gap-2">View All Blogs <FaArrowRight className="size-7 text-yellow-500" />
                        </button>
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-14">
                    <div>
                        <video
                            src="https://videos.pexels.com/video-files/7579953/7579953-sd_960_506_25fps.mp4"
                            controls autoPlay autoFocus
                            className="w-full h-[400px] rounded-lg"
                        >
                            Your browser does not support the video tag.
                        </video>
                        <h1 className="text-xl text-white font-semibold mb-2">Mars Exploration: Unveiling Alien Landscapes</h1>
                        Embark on a journey through the Red Planet's breathtaking landscapes and uncover the mysteries of Mars.
                    </div>
                    <div className="mb-8">
                        <video
                            src="https://videos.pexels.com/video-files/5993319/5993319-sd_640_360_30fps.mp4"
                            controls autoPlay autoFocus
                            className="w-full h-[400px] rounded-lg"
                        >
                            Your browser does not support the video tag.
                        </video>
                        <h1 className="text-xl text-white font-semibold mb-2">Blockchain Explained: A Revolution in Finance</h1>
                        <p>Delve into the world of blockchain technology and its transformative impact on the financial industry.                        </p>
                    </div>
                    <div>
                        <video
                            src="https://videos.pexels.com/video-files/7579945/7579945-sd_960_506_25fps.mp4"
                            controls autoPlay autoFocus
                            className="w-full h-[400px] rounded-lg"
                        >
                            Your browser does not support the video tag.
                        </video>
                        <h1 className="text-xl text-white font-semibold mb-2">Breaking the Silence: Mental Health Awareness in the Workplace</h1>
                        <p>An exploration of the importance of mental health awareness and the initiatives reshaping workplaces for employee well-being.</p>
                    </div>
                    <div>
                        <video
                            src="https://videos.pexels.com/video-files/8327799/8327799-sd_640_360_25fps.mp4"
                            controls autoPlay autoFocus
                            className="w-full h-[400px] rounded-lg"
                        >
                            Your browser does not support the video tag.
                        </video>
                        <h1 className="text-xl text-white font-semibold mb-2">Revolutionizing Investment Strategies</h1>
                        <p>An in-depth look at global efforts to conserve biodiversity and safeguard endangered species from extinction.</p>
                    </div>
                </div>
            </div>

        </div>
    </div>;
};
export default Podcasts;

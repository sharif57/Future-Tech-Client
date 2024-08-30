/* eslint-disable react/no-unescaped-entities */
import { FaArrowRight } from "react-icons/fa";

const Visual = () => {
    return <div>
        <div className="bg-[#191919] py-16 ">
            <div className="container mx-auto">
                <div className="lg:flex  justify-between items-center">
                    <div>
                        <button className="bg-[#333333] p-2 rounded-md text-white font-medium">Featured Videos</button>
                        <h1 className="lg:text-5xl text-2xl font-bold text-white mt-3">Visual Insights for the Modern Viewer</h1>
                    </div>
                    <div>
                        <button className="btn btn-outline flex gap-2 lg:mt-0 mt-3">View All Blogs <FaArrowRight className="size-7 text-yellow-500" />
                        </button>
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:mt-14 mt-8">
                    <div>
                        <video
                            src="https://videos.pexels.com/video-files/7579953/7579953-sd_960_506_25fps.mp4"
                            controls autoPlay autoFocus
                            className="w-full lg:h-[400px] rounded-lg"
                        >
                            Your browser does not support the video tag.
                        </video>
                        <h1 className="text-xl text-white font-semibold mb-2">Mars Exploration: Unveiling Alien Landscapes</h1>
                        Embark on a journey through the Red Planet's breathtaking landscapes and uncover the mysteries of Mars.
                    </div>
                    <div className="lg:mb-8">
                        <video
                            src="https://videos.pexels.com/video-files/5993319/5993319-sd_640_360_30fps.mp4"
                            controls autoPlay autoFocus
                            className="w-full lg:h-[400px] rounded-lg"
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
                            className="w-full lg:h-[400px] rounded-lg"
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
                            className="w-full lg:h-[400px] rounded-lg"
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
export default Visual;
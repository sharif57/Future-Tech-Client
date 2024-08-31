import { FaArrowRight } from "react-icons/fa";

import Posts from "../../components/Posts";
import Visual from "./Visual";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const News = () => {

    const [isExpanded, setIsExpanded] = useState(false);

    const toggleReadMore = () => {
        setIsExpanded(!isExpanded);
    };


    const [news, setNews] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/news')
            .then(res => res.json())
            .then(data => setNews(data))
    }, [])
    console.log(news);
    return <div className="bg-[#141414]">

        <div className="container mx-auto lg:p-2 p-2">
            <div className=" pb-10">
                <div className="lg:flex  justify-between items-center lg:py-16 py-5 ">
                    <div className="">
                        <h1 className="lg:text-5xl text-2xl font-semibold text-white mt-3">Today's Headlines: Stay Informed</h1>
                    </div>
                    <div>
                        <p>Explore the latest news from around the world. We bring you up-to-the-minute updates on the most significant events, trends, and stories. Discover the world through our news coverage.</p>
                    </div>
                </div>



                <div>
                    {news.length > 0 && (
                        <div className="lg:flex justify-center items-center  ">
                            <div className="lg:w-2/5">
                                <img className="lg:h-[300px] lg:w-[600px] lg:rounded-t-3xl rounded-t-xl" src={news[0].urlToImage} alt={news[0].title} />
                            </div>
                            <div className="lg:p-6 lg:w-3/5">
                                <h1 className="text-xl font-semibold text-white mb-4">
                                    {news[0].title}
                                </h1>
                                <p className="mt-2">
                                    {news[0].description}
                                </p>
                                <p className="mt-2">
                                    <span className="text-blue-500 font-semibold text-2xl">Content: </span>
                                    {isExpanded ? news[0].content : news[0].content.slice(0, 200) + '...'}
                                    <span
                                        className="text-blue-500 cursor-pointer ml-2"
                                        onClick={toggleReadMore}
                                    >
                                        {isExpanded ? 'Show less' : 'Read more'}
                                    </span>
                                </p>
                                <div className="lg:flex gap-8 mt-6">

                                    <div>
                                        <h3>Publication Date</h3>
                                        <p className="text-white font-bold">{new Date(news[0].publishedAt).toLocaleDateString()}</p>
                                    </div>
                                    <div>
                                        <h3>Author</h3>
                                        <p className="text-white font-bold">{news[0].author}</p>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center">
                                    {/* <div className="flex gap-2 pt-4">
                                        <button className="btn space-x-2">
                                            <GiLoveHowl className="text-red-500 size-6"></GiLoveHowl>
                                            <p>24.5k</p>
                                        </button>
                                        <button className="btn space-x-2">
                                            <FaRegCommentDots className="size-6" />
                                            <p>50</p>
                                        </button>
                                        <button className="btn space-x-2">
                                            <LuSendHorizonal className="size-6" />
                                            <p>20</p>
                                        </button>
                                    </div> */}
                                    {/* <button
                                        className="cursor-pointer mt-4  w-full bg-gradient-to-r from-rose-900 to-pink-700 hover:scale-105 duration-700 hover:duration-1000 font-semibold transition-all text-white px-10 py-4 rounded-e relative after:[clip-path:polygon(50%_0%,_100%_0,_100%_34%,_100%_100%,_77%_87%,_88%_62%,_64%_75%,_67%_50%,_48%_32%,_82%_18%)] after:hover:duration-700 after:duration-500 after:absolute after:inset-0 after:z-20 after:bg-pink-600 after:translate-x-0 after:hover:-translate-x-1 after:hover:rotate-[100deg] after:origin-bottom-right after:transition-all after:hover:transition-all after:rounded-e after:hover:skew-y-6 after:content-['Hover_ME'] after:hover:content-['SMOOKY_DEV'] after:flex after:items-center after:justify-center after:bg-gradient-to-r after:from-rose-700 after:to-pink-600 after:hover:scale-x-50 before:[clip-path:polygon(26%_0,_38%_17%,_25%_32%,_41%_66%,_27%_81%,_50%_100%,_0_100%,_0%_70%,_0%_35%,_0_0)] before:hover:duration-700 before:duration-500 before:absolute before:inset-0 before:z-20 before:bg-pink-600 before:translate-x-0 before:hover:translate-x-0 before:hover:-rotate-[45deg] before:origin-bottom-left before:transition-all before:hover:transition-all before:rounded-e before:hover:skew-y-6 before:content-['Hover_ME'] before:hover:content-['SMOOKY'] before:flex before:items-center before:justify-center before:bg-gradient-to-l before:from-rose-700 before:to-pink-600"
                                    >
                                        Read More
                                    </button> */}
                                </div>
                            </div>
                        </div>
                    )}

                    <div className="mt-16 grid grid-cols-1 lg:grid-cols-4 gap-8 ">
                        {news.slice(1).map((item, index) => (
                            <div key={index} className="shadow-lg transform hover:scale-90 transition-transform duration-300">
                                <img
                                    className="h-[200px] w-full bg-cover object-fill rounded-lg"
                                    src={item.urlToImage}
                                    alt={item.title}
                                />
                                <div>
                                    <h1 className="text-white text-xl  mt-3">
                                        {item.title}
                                    </h1>
                                    <p>{item.category}</p>
                                </div>
                                <div className="flex items-center justify-between gap-8">

                                    <Link to={`/newsDetails/${item._id}`}
                                        className="cursor-pointer mt-4 text-center  w-full bg-gradient-to-r from-rose-900 to-pink-700 hover:scale-105 duration-700 hover:duration-1000 font-semibold transition-all text-white px-10 py-4 rounded-e relative after:[clip-path:polygon(50%_0%,_100%_0,_100%_34%,_100%_100%,_77%_87%,_88%_62%,_64%_75%,_67%_50%,_48%_32%,_82%_18%)] after:hover:duration-700 after:duration-500 after:absolute after:inset-0 after:z-20 after:bg-pink-600 after:translate-x-0 after:hover:-translate-x-1 after:hover:rotate-[100deg] after:origin-bottom-right after:transition-all after:hover:transition-all after:rounded-e after:hover:skew-y-6 after:content-['Hover_ME'] after:hover:content-['SMOOKY_DEV'] after:flex after:items-center after:justify-center after:bg-gradient-to-r after:from-rose-700 after:to-pink-600 after:hover:scale-x-50 before:[clip-path:polygon(26%_0,_38%_17%,_25%_32%,_41%_66%,_27%_81%,_50%_100%,_0_100%,_0%_70%,_0%_35%,_0_0)] before:hover:duration-700 before:duration-500 before:absolute before:inset-0 before:z-20 before:bg-pink-600 before:translate-x-0 before:hover:translate-x-0 before:hover:-rotate-[45deg] before:origin-bottom-left before:transition-all before:hover:transition-all before:rounded-e before:hover:skew-y-6 before:content-['Hover_ME'] before:hover:content-['SMOOKY'] before:flex before:items-center before:justify-center before:bg-gradient-to-l before:from-rose-700 before:to-pink-600"
                                    >
                                        Read More
                                    </Link>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div>
                <div className="lg:flex  justify-between items-center py-16 bg-[#191919]">
                    <div className="">
                        <p>Welcome to Our News Hub</p>
                        <h1 className="lg:text-5xl text-2xl font-semibold text-white mt-3">Discover the World of Headlines</h1>
                    </div>
                    <div>
                        <button className="btn btn-outline flex gap-2 lg:mt-0 mt-3">View All Blogs <FaArrowRight className="size-7 text-yellow-500" />
                        </button>
                    </div>
                </div>
            </div>
            <Posts></Posts>
            <Visual></Visual>
        </div>

    </div>;
};
export default News;
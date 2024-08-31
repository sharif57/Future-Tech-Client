import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const NewsDetails = () => {

    const [isExpanded, setIsExpanded] = useState(false);

    const toggleReadMore = () => {
        setIsExpanded(!isExpanded);
    };


    const items = useLoaderData()
    console.log(items.length);
    return <div>
        <div className="lg:flex justify-center items-center  mt-12 p-4 lg:mb-10">
            <div className="lg:w-2/5">
                <img className="lg:h-[300px] lg:w-[600px] lg:rounded-t-3xl rounded-t-xl" src={items.urlToImage} />
            </div>
            <div className="lg:p-6 lg:w-3/5">
                <h1 className="text-xl font-semibold text-white mb-4">
                    {items.title}
                </h1>
                <p className="mt-2">
                    {items.description}
                </p>
                <p className="mt-2">
                    <span className="text-blue-500 font-semibold text-2xl">Content: </span>
                    {isExpanded ? items.content : items.content.slice(0, 200) + '...'}
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
                        <p className="text-white font-bold">{new Date(items.publishedAt).toLocaleDateString()}</p>
                    </div>
                    <div>
                        <h3>Author</h3>
                        <p className="text-white font-bold">{items.author}</p>
                    </div>
                </div>

            </div>
        </div>
    </div>;
};
export default NewsDetails;
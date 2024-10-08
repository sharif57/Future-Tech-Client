
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
const AllReviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then((data) => setReviews(data))
            .catch((error) => console.error('Error fetching reviews:', error));
    }, []);
    return <div className="bg-[#141414]">
        <div className="bg-[#191919] py-16 px-16">
            <div className="container mx-auto">
                <div className="flex  justify-between items-center ">
                    <div className="w-2/3">
                        <button className="bg-[#333333] p-2 rounded-md text-white font-medium">What Our Readers Say</button>
                        <h1 className="text-5xl font-semibold text-white mt-3">Real Words from Real Readers</h1>
                    </div>

                </div>
            </div>
        </div>
        <div className="container mx-auto p-16 pl-0 pr-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map(review => (
                <div key={review._id} className="flex flex-col justify-start bg-[#191919] pt-5 rounded-lg">
                    <div className="flex gap-2 justify-center items-center mb-4">
                        <img
                            className="size-12 rounded-full"
                            src={review.image}
                            alt=""
                        />
                        <div>
                            <h1 className="text-xl font-semibold text-white">{review.name}</h1>
                            <p className="text-gray-400">{review.location}</p>
                        </div>
                    </div>
                    <div>
                        <div className="flex p-2 rounded-lg justify-center items-center">
                            <FaStar className="text-yellow-500 font-semibold size-7" />
                            <FaStar className="text-yellow-500 font-semibold size-7" />
                            <FaStar className="text-yellow-500 font-semibold size-7" />
                            {/* Add more stars if needed */}
                        </div>
                        <div className="text-center  p-8 rounded-xl bg-[#141414] m-8">
                            <p className="text-gray-300">{review.description}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>;
};
export default AllReviews;
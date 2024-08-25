const BlogPostForm = () => {
    return <div className="bg-[#191919]">
        <div className="container mx-auto">
            <div className=" p-6 flex justify-center items-center min-h-screen">
                <div className="bg-[#141414] shadow-lg rounded-lg p-8  w-full">
                    <h1 className="lg:text-4xl font-semibold mb-6 text-white text-center"> Post Your Blog</h1>
                    <p className="text-center mt-2 font-semibold">Decapitation in reality and fine art: A review</p>

                    {/* Name */}
                    <div className="mb-4">
                        <label className="block text-white font-medium mb-2" htmlFor="name">
                            Name
                        </label>
                        <input
                            id="name"
                            type="text"
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Title */}
                    <div className="mb-4">
                        <label className="block text-white  font-medium mb-2" htmlFor="title">
                            Title
                        </label>
                        <input
                            id="title"
                            type="text"
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        
                        />
                    </div>

                    {/* Introduction */}
                    <div className="mb-4">
                        <label className="block text-white  font-medium mb-2" htmlFor="introduction">
                            Introduction
                        </label>
                        <textarea
                            id="introduction"
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Reading Time */}
                    <div className="mb-4">
                        <label className="block text-white  font-medium mb-2" htmlFor="reading_time">
                            Reading Time
                        </label>
                        <input
                            id="reading_time"
                            type="text"
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Author Name */}
                    <div className="mb-4">
                        <label className="block text-white  font-medium mb-2" htmlFor="author_name">
                            Author Name
                        </label>
                        <input
                            id="author_name"
                            type="text"
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            
                        />
                    </div>

                    {/* Table of Contents */}
                    <div className="mb-4">
                        <label className="block text-white  font-medium mb-2" htmlFor="table_of_contents">
                            Table of Contents
                        </label>
                        <textarea
                            id="table_of_contents"
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            
                        />
                    </div>

                    {/* Image URL */}
                    <div className="mb-4">
                        <label className="block text-white  font-medium mb-2">
                            Image URL
                        </label>
                        <input
                            id="image"
                            type="text"
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            
                        />
                    </div>

                    {/* Description */}
                    <div className="mb-4">
                        <label className="block text-white  font-medium mb-2" htmlFor="description">
                            Description
                        </label>
                        <textarea
                            id="description"
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="text-center">
                        <button className=" w-1/2 mx-auto text-black bg-yellow-400 font-medium py-2 px-4 btn btn-outline focus:outline-none focus:ring-2 ">
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>;
};
export default BlogPostForm;
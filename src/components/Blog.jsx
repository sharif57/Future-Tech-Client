const Blog = () => {
    return (
        <div className="bg-[#141414]">
            <div className="container mx-auto">
                {/* First Section */}
                <div className="lg:flex gap-10 items-center justify-center lg:pt-[100px] ">
                    <div className="space-y-6 lg:p-0 p-4">
                        <img src="https://i.ibb.co/ggQDHhb/Icon.png" alt="" />
                        <h1 className="lg:text-4xl text-2xl text-white font-semibold mb-4">Future Technology Blog</h1>
                        <p>Stay informed with our blog section dedicated to future technology.</p>
                    </div>
                    <div className="grid gap-4 rounded-lg grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:p-0 p-4">
                        <div className="bg-[#191919] p-6 rounded-lg border-dashed border">
                            <h1 className="text-3xl font-semibold text-white">Quantity</h1>
                            <p className="pt-3">Over 1,000 articles on emerging tech trends and breakthroughs.</p>
                        </div>
                        <div className="bg-[#191919] p-6 rounded-lg border-dashed border">
                            <h1 className="text-3xl font-semibold text-white">Variety</h1>
                            <p className="pt-3">Articles cover fields like AI, robotics, biotechnology, and more.</p>
                        </div>
                        <div className="bg-[#191919] p-6 rounded-lg border-dashed border">
                            <h1 className="text-3xl font-semibold text-white">Frequency</h1>
                            <p className="pt-3">Fresh content added daily to keep you up to date.</p>
                        </div>
                        <div className="bg-[#191919] p-6 rounded-lg border-dashed border">
                            <h1 className="text-3xl font-semibold text-white">Authoritative</h1>
                            <p className="pt-3">Written by our team of tech experts and industry professionals.</p>
                        </div>
                    </div>
                </div>
                <div className="lg:flex gap-10 items-center justify-center pt-[100px] pb-20 p-4 ">
                    <div className="space-y-6">
                        <img src="https://i.ibb.co/DVTX1TY/Icon-1.png" alt="" />
                        <h1 className="lg:text-4xl text-xl text-white font-semibold mb-4">Research Insights Blogs</h1>
                        <p>Stay informed with our blog section dedicated to future technology.</p>
                    </div>
                    <div className="grid gap-4 rounded-lg grid-cols-1 md:grid-cols-2 lg:grid-cols-2 ">
                        <div className="bg-[#191919] p-6 rounded-lg border-dashed border">
                            <h1 className="text-3xl font-semibold text-white">Depth</h1>
                            <p className="pt-3">Over 1,000 articles on emerging tech trends and breakthroughs.</p>
                        </div>
                        <div className="bg-[#191919] p-6 rounded-lg border-dashed border">
                            <h1 className="text-3xl font-semibold text-white">Graphics</h1>
                            <p className="pt-3">Articles cover fields like AI, robotics, biotechnology, and more.</p>
                        </div>
                        <div className="bg-[#191919] p-6 rounded-lg border-dashed border">
                            <h1 className="text-3xl font-semibold text-white">Trends</h1>
                            <p className="pt-3">Fresh content added daily to keep you up to date.</p>
                        </div>
                        <div className="bg-[#191919] p-6 rounded-lg border-dashed border">
                            <h1 className="text-3xl font-semibold text-white">Contributors</h1>
                            <p className="pt-3">Written by our team of tech experts and industry professionals.</p>
                        </div>
                    </div>
                </div>

               
            </div>
        </div>
    );
};

export default Blog;

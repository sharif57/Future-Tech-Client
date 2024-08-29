const Bannerbar = () => {
    return (
        <div className="bg-[#141414]">
            <div className="container mx-auto py-8 p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="space-y-6">
                        <img src="https://i.ibb.co/wYDLY5C/Icon-2.png" alt="" />
                        <div className="flex justify-between items-center">
                            <div>
                                <h1 className="lg:text-4xl text-xl text-white font-semibold mb-4">Latest News Updates</h1>
                                <p>Stay Current.</p>
                            </div>
                            <img src="/Button.png" alt="" />
                        </div>
                        <p className="mt-3">Over 1,000 articles published monthly</p>
                    </div>
                    <div className="space-y-6">
                        <img src="/Icon (4).png" alt="" />
                        <div className="flex justify-between items-center">
                            <div >
                                <h1 className="lg:text-4xl text-xl text-white font-semibold mb-4">Expert Contributors</h1>
                                <p>Trusted Insights.</p>
                            </div>
                            <img src="/Button.png" alt="" />
                        </div>
                        <p className="mt-3">50+ renowned AI experts on our team</p>
                    </div>
                    <div className="space-y-6">
                        <img src="/Icon (3).png" alt="" />
                        <div className="flex justify-between items-center">
                            <div>
                                <h1 className="lg:text-4xl text-xl text-white font-semibold mb-4">Global Readership</h1>
                                <p>Worldwide Impact.</p>
                            </div>
                            <img src="/Button.png" alt="" />
                        </div>
                        <p className="mt-3">2 million monthly readers</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Bannerbar;

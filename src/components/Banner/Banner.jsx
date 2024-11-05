import React from 'react'

const Banner = () => {
    return (
        <div className="container mt-8 mx-auto px-4 md:flex font-lora">
            <img src="/banner.jpg" alt="banner" className="md:w-1/2" />
            <div className="bg-[#e3edf6] dark:bg-slate-600 dark:text-white md:w-1/2 flex flex-col items-center text-center justify-center p-4">
                <h1 className="text-4xl font-bold mb-1">
                    Don&apos;t miss the offer
                </h1>
                <h2 className="text-3xl font-semibold mb-4">Grab it now</h2>
                <a
                    to="/product/4"
                    className="inline-block bg-white dark:bg-slate-800 rounded-md px-6 py-3 hover:bg-blue-500 hover:text-white"
                    data-test="banner-btn"
                >
                    Shop Now
                </a>
            </div>
        </div>
    )
}

export default Banner
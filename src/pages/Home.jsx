import React, { useCallback, useEffect, useState } from 'react'
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import { AiOutlineShoppingCart } from "react-icons/ai";
import RatingStar from "../components/RatingStart";
import Product from '../components/Product';
import Hero from '../components/Hero/Hero';
import Features from '../components/Features/Features';
import Banner from '../components/Banner/Banner';


function Home() {
    const [products, setProducts] = useState([]);
    const fetchProduct = useCallback(async () => {
        const response = await fetch(
            `https://dummyjson.com/products?limit=16&skip=10`
        );
        const jsonResponse = await response.json();

        setProducts(jsonResponse.products);

    }, [])
    useEffect(() => {
        fetchProduct()
    }, [fetchProduct]);


    return (
        <div>

            {/* Main */}
            <div className="dark:bg-slate-800 pb-5">
                {/* Hero  */}
                <Hero />
                {/* Features */}
                <Features />
                {/* Product list 1 */}
                <div className="container mt-8 mx-auto px-4 dark:bg-slate-800">
                    <div className="sm:flex items-center justify-between">
                        <h2 className="text-4xl font-medium font-lora dark:text-white">
                            Trending Products
                        </h2>
                    </div>
                    <div
                        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-4"
                        data-test="product-list-container"
                    >
                        {products.slice(0, 8).map((p) => (
                            <Product key={p.id} productInfo={p} />

                        ))}
                    </div>
                </div>
                {/* Banner */}
                <Banner />
                {/* Product list 2 */}
                <div className="container mt-8 mx-auto px-4 dark:bg-slate-800">
                    <div className="sm:flex items-center justify-between">
                        <h2 className="text-4xl font-medium font-lora dark:text-white">
                            New Arrivals
                        </h2>
                    </div>
                    <div
                        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-4"
                        data-test="product-list-container"
                    >

                        {products.slice(8, 16).map((p) => (
                            <Product key={p.id} productInfo={p} />

                        ))}

                    </div>
                </div>
            </div>
            {/* Footer */}

        </div>
    )
}

export default Home;
import React, { useCallback, useEffect, useState } from 'react';
import Product from '../Product';

const SimilarProduct = ({ originProduct }) => {
    const [products, setProducts] = useState([]);

    const fetchProduct = useCallback(async () => {
        if (originProduct.category) {
            const response = await fetch(
                `https://dummyjson.com/products/category/${originProduct.category}`
            );
            const jsonResponse = await response.json();
            setProducts(jsonResponse.products);
        }
    }, [originProduct.category]);

    useEffect(() => {
        fetchProduct();
    }, [fetchProduct]);

    return (
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
                {products
                    .filter((p) => p.id !== originProduct.id)
                    .map((p) => (
                        <Product key={p.id} productInfo={p} />
                    ))}
            </div>
        </div>
    );
};

export default SimilarProduct;

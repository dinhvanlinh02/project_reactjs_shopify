import React, { useState } from 'react'
import RatingStar from '../RatingStart'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { openLoginModal } from '../../store/slices/commonSlice'
import { addItemToCart } from '../../store/slices/cartSlice'

const Product = (props) => {

    const { productInfo = {} } = props;
    const { id, title, category, rating, price, discountPercentage, thumbnail } = productInfo;
    const dispatch = useDispatch();

    const isLoggIn = useSelector((state) => state.authSlice.isLoggedIn);

    const addtocart = () => {
        if (isLoggIn) {
            console.log("add to cart");

            dispatch(addItemToCart(productInfo));
        } else {
            dispatch(openLoginModal());
        }
    };
    return (
        <div
            className="border border-gray-200 font-lato"
            data-test="product-card"
        >
            <div className="text-center border-b border-gray-200">
                <a>
                    <img
                        src={
                            thumbnail
                        }
                        className="inline-block h-60 transition-transform duration-200 hover:scale-110"
                    />
                </a>
            </div>
            <div className="px-8 pt-4">
                <p className="text-gray-500 text-[14px] font-medium dark:text-white">
                    {category}
                </p>
                <Link
                    to={`/product/${id}`}
                    className="font-semibold hover:underline dark:text-white">
                    {title}
                </Link>
            </div>
            <div className="px-8">
                <RatingStar rating={rating} />
            </div>
            <div className="flex items-center justify-between px-8 pb-4">
                <div className="leading-3">
                    <h2 className="font-medium text-blue-500 text-xl">
                        ${(price * discountPercentage).toFixed(2)}
                    </h2>
                    <span className="mr-2 text-sm line-through opacity-70 dark:text-white">
                        ${price}
                    </span>
                    <span className="text-sm font-semibold dark:text-white">
                        -{discountPercentage}%
                    </span>
                </div>
                <button
                    onClick={addtocart}
                    type="button"
                    className="flex items-center space-x-2 hover:bg-blue-500 text-white py-2 px-4 rounded bg-pink-500"
                    data-test="add-cart-btn"
                >
                    <AiOutlineShoppingCart />
                    <span>ADD TO CART</span>
                </button>
            </div>
        </div >
    )
}

export default Product
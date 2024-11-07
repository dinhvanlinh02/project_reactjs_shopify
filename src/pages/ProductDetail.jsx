import { AiOutlineShoppingCart } from "react-icons/ai";

import { MdFavoriteBorder } from "react-icons/md";
import RatingStar from "../components/RatingStart";
import { FaHandHoldingDollar } from "react-icons/fa6";
import Reviews from "../components/Reviews";

import { useParams } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import SimilarProduct from "../components/SimmilarProduct/SimmilarProduct";
import { useDispatch, useSelector } from "react-redux";
import { openLoginModal } from "../store/slices/commonSlice";

import { addItemToCart } from "../store/slices/cartSlice";

const lorem = "It is important to take care of the patient...";

const ProductDetail = () => {
  const [product, setProductInfo] = useState({
    images: [],
  });
  const isLoggIn = useSelector((state) => state.authSlice.isLoggedIn);
  const { id } = useParams();
  const dispatch = useDispatch();

  const fetchProductInfo = useCallback(async () => {
    try {
      const response = await fetch(`https://dummyjson.com/products/${id}`);
      if (!response.ok) {
        throw new Error("Failed to fetch product information.");
      }
      const jsonResponse = await response.json();
      setProductInfo(jsonResponse);
    } catch (error) {
      console.error("Error fetching product info:", error);
    }
  }, [id]);

  useEffect(() => {
    fetchProductInfo();
  }, [fetchProductInfo]);

  const addtocart = () => {
    if (isLoggIn) {
      console.log("add to cart");

      dispatch(addItemToCart(product));
    } else {
      dispatch(openLoginModal());
    }
  };

  return (
    <div>
      <div className="container mx-auto pt-8 dark:text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 px-4 font-karla">
          <div className="space-y-2">
            {product.images[0] ? (
              <img src={product.images[0]} alt="selected" className="h-80" />
            ) : (
              <p>No Image Available</p>
            )}
            <div className="flex space-x-1 items-center">
              {product.images.map((_img, index) => (
                <img
                  src={_img}
                  key={_img}
                  alt="thumb"
                  className={`w-12 cursor-pointer hover:border-2 hover:border-black ${index === 0 ? "border-2 border-black" : ""}`}
                />
              ))}
            </div>
          </div>
          <div className="px-2">
            <h2 className="text-2xl">{product?.title}</h2>
            {product?.rating && <RatingStar rating={product?.rating} />}
            <div className="mt-1">
              <div className="leading-3">
                <h2 className="font-medium text-blue-500 text-xl">
                  ${(product.price * (1 - product.discountPercentage / 100)).toFixed(2)}
                </h2>
                <span className="mr-2 text-sm line-through opacity-70 dark:text-white">
                  ${product.price}
                </span>
                <span className="text-sm font-semibold dark:text-white">
                  -{product.discountPercentage}%
                </span>
              </div>
            </div>
            <table className="mt-2">
              <tbody>
                <tr>
                  <td className="pr-2 font-bold">Brand</td>
                  <td>{product?.brand}</td>
                </tr>
                <tr>
                  <td className="pr-2 font-bold">Category</td>
                  <td>{product?.category}</td>
                </tr>
                <tr>
                  <td className="pr-2 font-bold">Stock</td>
                  <td>{product?.stock}</td>
                </tr>
              </tbody>
            </table>
            <div className="mt-2">
              <h2 className="font-bold">About the product</h2>
              <p className="leading-5">
                {product?.description} {lorem}
              </p>
            </div>
            <div className="flex flex-wrap items-center mt-4 mb-2 space-x-2">
              <button

                type="button"
                className="flex items-center space-x-1 mb-2 hover:bg-pink-700 text-white p-2 rounded bg-pink-500"
                onClick={addtocart} // Gọi addtocart khi nhấn nút
              >
                <AiOutlineShoppingCart />
                <span>ADD TO CART</span>
              </button>
              <button
                type="button"
                className="flex items-center space-x-1 mb-2 bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
              >
                <FaHandHoldingDollar />
                <span>BUY NOW</span>
              </button>
              <button
                type="button"
                className="flex items-center space-x-1 mb-2 bg-yellow-500 text-white p-2 rounded hover:bg-yellow-700"
              >
                <MdFavoriteBorder />
                <span>ADD TO WISHLIST</span>
              </button>
            </div>
          </div>
          {product && <Reviews />}
        </div>
        <hr className="mt-4" />
        <SimilarProduct originProduct={product} />
        <br />
      </div>
    </div>
  );
};

export default ProductDetail;

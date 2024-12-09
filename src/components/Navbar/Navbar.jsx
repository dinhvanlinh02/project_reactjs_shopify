import React from 'react'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { Link, useNavigate } from 'react-router-dom';
import AccountDropdown from '../AccountDropdown/AccountDropDown';
import { useDispatch, useSelector } from 'react-redux';
import { openLoginModal, toggleOpenCart } from '../../store/slices/commonSlice';
import { initialState } from '../../store/slices/authSlice';

const Navbar = () => {
    const isLoginIs = useSelector((state) => state.authSlice.isLoggedIn)
    const isModalOpen = useSelector((state) => state.commonSlice.isModalLoginOpen);
    const cartItem = useSelector((state) => state.cartSlice.items);
    const islogin = initialState.isLoggedIn

    console.log(cartItem);

    let total = 0;
    for (let i = 0; i < cartItem.length; i++) {
        total += cartItem[i].quantity
    }
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const HandleOpenLogin = () => {
        dispatch(openLoginModal())
    }
    const HanhdleOpenCart = () => {
        dispatch(toggleOpenCart())
    }

    return (
        <div className="py-4 bg-white dark:bg-slate-800 top-0 sticky z-10 shadow-lg font-karla">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center">
                    < Link to={"/"}
                        className="text-4xl font-bold dark:text-white"
                        data-test="main-logo"
                    >
                        Shopify
                    </Link>
                    <div className="lg:flex hidden w-full max-w-[500px]">
                        <input
                            type="text"
                            placeholder="Search for a product..."
                            className="border-2 border-blue-500 px-6 py-2 w-full dark:text-white dark:bg-slate-800"
                        />
                        <div className="bg-blue-500 text-white text-[26px] grid place-items-center px-4">
                            <BsSearch />
                        </div>
                    </div>
                    <div className="flex gap-4 md:gap-8 items-center dark:text-white">
                        <Link to={"/products"} className="text-xl font-bold" data-test="main-products">
                            Products
                        </Link>
                        <a onClick={() => {
                            navigate("categories")
                        }}
                            className="text-xl font-bold cursor-pointer" data-test="main-categories">
                            Categories
                        </a>
                        <div className="flex items-center gap-2">
                            {isLoginIs ? (<>  <img
                                src="https://robohash.org/Terry.png?set=set4"
                                alt="avatar"
                                className="w-6"
                            />
                                <AccountDropdown />    <FaUser className="text-gray-500 text-2xl dark:text-white" />
                                <div className="text-gray-500 text-2xl">
                                    <span
                                        onClick={HandleOpenLogin}
                                        className="cursor-pointer hover:opacity-85 dark:text-white"
                                        data-test="login-btn"
                                    >
                                        {islogin ? "Login" : ""}
                                    </span>
                                </div></>) : (<></>)}



                        </div>
                        <div
                            onClick={HanhdleOpenCart}
                            className="text-gray-500 text-[32px] relative hover:cursor-pointer hover:opacity-80"
                            data-test="cart-btn"
                        >
                            <AiOutlineShoppingCart className="dark:text-white" />
                            <div
                                className="absolute top-[-15px] right-[-10px] bg-red-600 w-[25px] h-[25px] rounded-full text-white text-[14px] grid place-items-center"
                                data-test="cart-item-count"
                            >
                                {total}
                            </div>
                        </div>
                        <div className="flex">
                            <MdOutlineLightMode className="cursor-pointer" size={30} />
                            <MdOutlineDarkMode className="cursor-pointer" size={30} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default Navbar;

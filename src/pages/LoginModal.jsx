import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { FaUnlock, FaUser } from "react-icons/fa";
import { GiArchiveRegister } from "react-icons/gi";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { RiLockPasswordFill, RiUser3Fill } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const LoginModal = () => {
  const isOpenLogin = false;
  if (isOpenLogin) {
    return (



      <div className="bg-[#0000007d] w-full min-h-screen fixed inset-0 z-30 flex items-center justify-center font-karla">
        <div
          className="relative border shadow rounded p-8 bg-white max-w-md w-full z-40 dark:bg-slate-800 dark:text-white"
          data-test="login-container"
        >
          <RxCross1 className="absolute cursor-pointer right-5 top-5 hover:opacity-85" />
          <div className="flex mb-2 space-x-2 justify-center items-center">
            <GiArchiveRegister />
            <h3 className="font-bold text-center text-xl">Register</h3>
            <GiArchiveRegister />
          </div>
          <p className="leading-4">
            This is a hobby project for development purpose only. No well suited
            backend has been used here. Please use <b>atuny0</b> as username &{" "}
            <b>9uQFF1Lh</b> as password. You can find these credentials in the
            placeholder also.{" "}
            <span className="text-blue-500 cursor-pointer hover:underline">
              Go to login
            </span>
          </p>
          <div className="flex mb-2 space-x-2 justify-center items-center">
            <FaUnlock />
            <h3 className="font-bold text-center text-2xl">Login</h3>
            <FaUnlock />
          </div>
          <form className="flex flex-col space-y-3">
            <div className="relative">
              <input
                data-test="input-username"
                type="text"
                placeholder="Your username here... (atuny0)"
                className="border w-full border-black py-2 px-8 rounded dark:bg-slate-600"
              />
              <RiUser3Fill className="absolute top-3 left-2 text-lg" />
            </div>
            <div className="relative">
              <input
                data-test="input-password"
                type="password"
                placeholder="Your password here... (9uQFF1Lh)"
                className="border w-full border-black py-2 px-8 rounded dark:bg-slate-600"
              />
              <RiLockPasswordFill className="absolute top-3 left-2 text-lg" />
            </div>
            <input
              data-test="input-submit"
              type="submit"
              value="Submit"
              className="bg-blue-500 text-white rounded p-2 hover:bg-blue-700 cursor-pointer"
            />
          </form>
          <p className="text-center mt-1">
            No Account?{" "}
            <span className="text-blue-500 cursor-pointer">Register</span>
          </p>
        </div>
      </div>


    );
  }
  return null;
};

export default LoginModal;

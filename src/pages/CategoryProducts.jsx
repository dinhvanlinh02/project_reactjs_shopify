import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import RatingStar from "../components/RatingStart";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Product from "../components/Product";

const CategoryProducts = () => {
  return (
    <div>


      <div className="container mx-auto min-h-[83vh] p-4 font-karla">
        <div className="flex items-center space-x-2 text-lg dark:text-white">
          <span>Categories</span>
          <span> {">"} </span>
          <span className="font-bold">Beauty</span>
        </div>
        <div className="grid gap-4 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 my-2">
          {/* Single Product */}
          <Product />
        </div>
      </div>

    </div>
  );
};

export default CategoryProducts;

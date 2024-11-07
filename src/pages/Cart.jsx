import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import {
  IoIosAddCircleOutline,
  IoIosRemoveCircleOutline,
} from "react-icons/io";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { toggleOpenCart } from "../store/slices/commonSlice";
import { removeCartItem } from "../store/slices/cartSlice";

const Cart = () => {
  const isopenCart = useSelector((state) => state.commonSlice.isCartOpen
  );

  const dispatch = useDispatch();

  const HandleCloseCart = () => {
    dispatch(toggleOpenCart())
  }
  const cartItem = useSelector((state) => state.cartSlice.items);

  let totalprice = 0;
  for (let i = 0; i < cartItem.length; i++) {
    totalprice += cartItem[i].quantity * cartItem[i].price;
  }
  const removeitem = (id) => {
    dispatch(removeCartItem(id))
  }
  if (isopenCart) {
    return (



      <div className="bg-[#0000007d] w-full min-h-screen fixed left-0 top-0 z-20 overflow-y-auto">
        <div className="max-w-[400px] w-full min-h-full bg-white absolute right-0 top-0 p-6 font-karla dark:bg-slate-600 dark:text-black">
          <h1 className="font-bold text-xl mb-1">Checkout</h1>
          <p className="leading-4 mb-3 text-black">
            Welcome to the checkout section. This is being a development
            project, I haven&apos;t implemented any payment related task. If you
            click the cancel button you&apos;ll go back to the cart segment.
            Clicking confirm button will consider your order confirmed, payment
            done & also order delivered successfully. Another thing to mention,
            order history hasn&apos;t been developed due to not having a proper
            backend api.
          </p>

          <div className="flex items-center space-x-2">
            <span className="w-1/2 border border-gray-500 rounded cursor-pointer text-center py-1">
              Cancel
            </span>
            <span
              className="w-1/2 border border-gray-500 rounded cursor-pointer text-center py-1"
              data-test="confirm-order-btn"
            >
              Confirm
            </span>
          </div>
        </div>
        <div
          className="max-w-[400px] w-full min-h-full bg-white absolute right-0 top-0 p-6 font-karla dark:bg-slate-600 dark:text-white"
          data-test="cart-container"
        >
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-2xl">Your Cart</h3>
            <RxCross1
              onClick={HandleCloseCart}
              className="text-[24px] cursor-pointer hover:opacity-70"
              data-test="cart-close"
            />
          </div>
          <div className="mt-6 space-y-2">
            {cartItem.map((item) => {
              return ( // Đảm bảo return JSX từ hàm map()
                <div
                  key={item.id}
                  className="grid grid-cols-7 gap-3 border items-center"
                >
                  <img
                    src={
                      item.thumbnail
                    }
                    alt="thumbnail"
                    className="h-20 col-span-2"
                  />
                  <div className="col-span-3">
                    <h3 className="font-bold leading-4">{item.name}</h3>
                    <div className="flex space-x-2 items-center">
                      <h3 className="font-semibold">${item.price}</h3>
                      <span className="text-xs">-{item.discount}%</span>
                    </div>

                    <div className="flex items-center space-x-1">
                      <IoIosRemoveCircleOutline
                        className="cursor-pointer hover:opacity-80"
                        data-test="cart-reduce-btn"
                      />
                      <span data-test="cart-item-quantity">{item.quantity}</span>
                      <IoIosAddCircleOutline
                        className="cursor-pointer hover:opacity-80"
                        data-test="cart-increase-btn"
                      />
                    </div>
                  </div>
                  <div className="font-bold col-span-2">
                    <span data-test="cart-item-price">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                    <RiDeleteBin6Line
                      onClick={() => {
                        removeitem(item.id)
                      }}
                      className="text-red-500 cursor-pointer text-2xl hover:text-red-600"
                      data-test="cart-remove-btn"
                    />
                  </div>
                </div>
              );
            })}
          </div>


          <>
            <div className="flex items-center justify-between p-2">
              <h2 className="font-bold text-2xl">Total</h2>
              <h2 className="font-bold text-2xl">${totalprice.toFixed(2)}</h2>
            </div>
            <button
              type="button"
              data-test="checkout-btn"
              className="w-full text-center text-white bg-blue-500 py-2 my-4 rounded font-bold text-xl hover:bg-blue-700"
            >
              CHECKOUT
            </button>
          </>
        </div>
      </div>

    );
  }
  return null;
};

export default Cart;

import React, { useContext } from 'react'
import {Link} from "react-router-dom";
import { FiTrash2 } from "react-icons/fi";
import { IoMdArrowForward } from "react-icons/io";
import CartItem from "../components/CartItem";
import { SideBarContext } from '../contexts/SidebarContext';
import { CartContext } from '../contexts/CartContext';


const Sidebar = () => {
  const {isOpen, handleClose} = useContext(SideBarContext)
  const {cart, clearCart, total, itemAmount} = useContext(CartContext);
  return (
    <div className={`${isOpen ? "right-0" : "-right-full"} w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}>
      <div className="flex items-center justify-between py-6 border-b ">
        <div className="text-sm font-semibold uppercase">
          Shopping Bag ({itemAmount})
        </div>
        {/*Icons*/}
        <div
          onClick={handleClose}
          className="flex items-center justify-center w-8 h-8 cursor-pointer"
        >
          <IoMdArrowForward className="text-2xl" />
        </div>
      </div>
      <div className="flex flex-col gap-y-2 max-h-[55vh] lg:h-[640px] overflow-y-auto overflow-x-hidden border-b">
        {cart.map((item) => {
          return <CartItem item={item} key={item.id} />;
        })}
      </div>
      
      <div className="flex flex-col mt-4 gap-y-4">
        <div className="flex items-center justify-between w-full">
          {/*Total*/}
          <div className="font-semibold uppercase">
            <span className="mr-2 ">Total:</span>${" "}
            {parseFloat(total).toFixed(2)}
          </div>
          {/*Clear button*/}
          <div
            onClick={() => clearCart()}
            className="flex justify-center w-12 h-12 py-4 text-xl bg-red-700 cursor-pointer imtes-center"
          >
            <FiTrash2 />
          </div>
        </div>
        <Link
          to={"/"}
          className="flex items-center justify-center w-full p-4 font-medium bg-gray-400"
        >
          View cart
        </Link>
        <Link
          to={"/"}
          className="flex items-center justify-center w-full p-4 font-medium text-white bg-black"
        >
          Checkout
        </Link>
      </div>
    </div>
  );
}

export default Sidebar
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaPlus, FaEye } from "react-icons/fa";
import {CartContext} from "../contexts/CartContext"

const Product = ({ product }) => {
  const {addToCart} = useContext(CartContext);
  const { id, image, category, title, price } = product;

  return (
    <div>
      {/*Image product*/}
      <div className="border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition">
        <div className="flex items-center justify-center w-full h-full">
          <div className="w-[200px] mx-auto flex justify-center items-center">
            <img
              className="max-h-[160px] group-hover:scale-110 transition duration-300"
              src={image}
              alt=""
            />
          </div>
          <div className="absolute flex flex-col items-center justify-center p-2 transition-all duration-300 opacity-0 top-6 -right-11 group-hover:right-5 gap-y-2 group-hover:opacity-100">
            <button onClick={() => addToCart(product, id)}>
              <div className="flex items-center justify-center w-12 h-12 text-white bg-slate-400">
                <FaPlus className="" />
              </div>
            </button>
            <Link
              to={`/product/${id}`}
              className="flex items-center justify-center w-12 h-12 text-black bg-white drop-shadow-xl"
            >
              <FaEye />
            </Link>
          </div>
        </div>
      </div>

      {/*Details product*/}
      <div>
        <div className="text-sm text-gray-600 capitalize">{category}</div>
        <Link to={`/product/${id}`}>
          <h2 className="mb-1 font-semibold">{title}</h2>
        </Link>
        <div className="font-semibold">$ {price}</div>
      </div>

    </div>
  );
};

export default Product;

import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { IoMdAdd, IoMdClose, IoMdRemove } from 'react-icons/io' 
import {CartContext} from "../contexts/CartContext"

const CartItem = ({item}) => {
  const {removeFromCart, increaseAmount, decreaseAmount} = useContext(CartContext);
  {/*Destructure item*/}
  const {id, title, image, price, amount} = item
  return (
    <div className='flex w-full py-2 font-light text-gray-500 border-b border-gray-300 gap-x-4'>
      <div className="w-full min-h-[150px] flex items-center gap-x-4">
        {/*image*/}
        <Link to={`/product/${id}`}>
          <img className="max-w-[80px] " src={image} alt="" />
        </Link>
        <div className="flex flex-col w-full">
          {/*title & remove icon*/}
          <div onClick={() => removeFromCart(id)} className="flex justify-between mb-2 ">
            {/*Title*/}
            <Link
              to={`/product/${id}`}
              className="text-sm uppercase font.medium max-w-[240px] font-medium text-black hover:underline"
            >
              {title}
            </Link>
            {/*Remove*/}
            <div className="text-xl cursor-pointer">
              <IoMdClose className="text-gray-500 transition hover:text-red-700 " />
            </div>
          </div>
          <div className="flex  gap-x-2 h-[36px] text-sm">
            {/*quantity*/}
            <div className=" flex flex-1 max-w-[100px] items-center h-full border font-medium ">
              {/*minus icon*/}
              <div onClick={() => decreaseAmount(id)} className="flex items-center justify-center flex-1 h-full cursor-pointer">
                <IoMdRemove />
              </div>
              {/*amount*/}
              <div className="flex items-center justify-center h-full px-2">
                {amount}
              </div>
              {/*plus icon*/}
              <div onClick={() => increaseAmount(id)} className="flex items-center justify-center flex-1 h-full cursor-pointer">
                <IoMdAdd />
              </div>
            </div>
            {/*item-price*/}
            <div className="flex items-center justify-center flex-1 ">
              $ {price}
            </div>
            {/*final-price*/}
            <div className="flex items-center justify-end flex-1 font-medium">{`$ ${parseFloat(price * amount).toFixed(2)}`}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem
import React, { useContext, useEffect, useState } from 'react'
import { SideBarContext } from '../contexts/SidebarContext'
import { CartContext } from '../contexts/CartContext'
import {BsBag} from "react-icons/bs";
import { Link } from 'react-router-dom'
import Hanger from "../img/hanger.svg"

const Header = () => {
  //Header state
  const [isActive, setIsActive] = useState(false)

  const {isOpen, setIsOpen} = useContext(SideBarContext)
  const {itemAmount} = useContext(CartContext)
  //Event listener
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false)
    })
  })
  return (
    <header className={`${isActive ? "bg-white py-4 shadow-md" : "bg-none py-6"} fixed w-full z-10 transition-all`}>
      <div className="container flex items-center justify-between h-full px-4 mx-auto">
        {/*Logo*/}
        <Link to={"/E-commerce-prototype/"}>
          <div>
            <img className="w-[30px]" src={Hanger} alt="" />
          </div>
        </Link>
        {/*Cart*/}
        <div
          className="relative flex cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <BsBag className="text-2xl" />
          <div className=" bg-red-600 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center">
            {itemAmount}
          </div>
        </div>
      </div>
    </header>
  );
  
}

export default Header
import React from "react";
import Image from "next/image";
import {
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";

function Header() {
  return (
    <header>
      <div className="flex flex-grow items-center p-1 py-2 bg-amazon_blue">
        <div className="flex mt-2 flex-grow sm:flex-grow-0 items-center">
          <Image
            src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
            width={150}
            height={40}
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>
        <div
          className="hidden sm:flex items-center bg-yellow-400
         hover:bg-yellow-500 text-gray-800 h-10 rounded-md flex-grow cursor-pointer"
        >
          <input
            type="text"
            className="!outline-none p-2 flex-grow flex-shrink rounded-l-md"
          />
          <MagnifyingGlassIcon className="h-6 w-12" />
        </div>

        <div
          className="text-white flex space-x-4 text-xs items-center 
        font-semibold cursor-pointer ml-4"
        >
          <div className="link">
            <p className="cursor-pointer">Hello Lakshitha</p>
            <p className="font-extrabold cursor-pointer md:text-sm">
              Account & Lists
            </p>
          </div>
          <div className="link">
            <p className="cursor-pointer">Returns</p>
            <p className="font-extrabold cursor-pointer md:text-sm">& Orders</p>
          </div>
          <div className="flex items-center link relative">
            <span
              className="absolute top-0 right-0 md:right-10 
            bg-yellow-400 rounded-full h-4 w-4 text-center text-black font-bold z-50"
            >
              0
            </span>
            <ShoppingCartIcon className="h-10 cursor-pointer relative" />
            <p className=" hidden md:inline font-extrabold cursor-pointer md:text-sm mt-2">
              Basket
            </p>
          </div>
        </div>
      </div>
      <div className="flex bg-gray-700 h-14 items-center">
        <p
          className="flex text-lg text-white items-center cursor-pointer 
        rounded-sm hover:border-2 font-bold h-8 p-2 py-4"
        >
          <Bars3Icon className="h-8 mr-1" /> All
        </p>
        <p
          className="flex text-lg text-white items-center cursor-pointer 
        rounded-sm hover:border-2 p-2 h-8 font-semibold py-4"
        >
          Today's Deals
        </p>
        <p
          className="flex text-lg text-white items-center cursor-pointer 
        rounded-sm hover:border-2 p-2 h-8 font-semibold py-4"
        >
          Customer Service
        </p>
        <p
          className="flex text-lg text-white items-center cursor-pointer 
        rounded-sm hover:border-2 p-2 h-8 font-semibold py-4"
        >
          Registry
        </p>
        <p
          className="flex text-lg text-white items-center cursor-pointer 
        rounded-sm hover:border-2 p-2 h-8 font-semibold py-4"
        >
          Gift Cards
        </p>
        <p
          className="flex text-lg text-white items-center cursor-pointer 
        rounded-sm hover:border-2 p-2 h-8 py-4"
        >
          Sell
        </p>
      </div>
    </header>
  );
}

export default Header;

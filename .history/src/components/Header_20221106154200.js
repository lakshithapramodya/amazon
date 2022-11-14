import React from "react";
import Image from "next/image";
import {
  MagnifyingGlassIcon,
  ShoppingCartIcon,
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
            className="!outline-0 p-2 flex-grow flex-shrink rounded-l-md"
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
          <div className="flex items-center link">
            <div>
              <ShoppingCartIcon className="h-10 cursor-pointer relative" />
              <p className="absolute">0</p>
            </div>

            <p className="font-extrabold cursor-pointer md:text-sm">Basket</p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

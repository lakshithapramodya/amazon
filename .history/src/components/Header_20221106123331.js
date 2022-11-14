import React from "react";
import Image from "next/image";

function Header() {
  return (
    <header>
      <div className="flex items-center p-5 bg-amazon_blue">
        <div className=" flex sm:flex-grow-0 items-center">
          <Image
            src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
            width={97}
            height={50}
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>
        <div></div>
      </div>
    </header>
  );
}

export default Header;

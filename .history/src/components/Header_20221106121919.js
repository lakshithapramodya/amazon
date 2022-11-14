import React from "react";
import Image from "next/image";

function Header() {
  return (
    <header>
      <div className="flex items-center pt-3 pl-2 bg-amazon_blue">
        <div>
          <Image
            src="https://www.pngitem.com/pimgs/m/1-12080_amazon-logo-png-amazon-white-text-logo-transparent.png"
            width={100}
            height={40}
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>
      </div>

      <div></div>
    </header>
  );
}

export default Header;

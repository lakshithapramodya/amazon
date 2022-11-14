import React from "react";
import Image from "next/image";

function Header() {
  return (
    <header>
      <div className="flex items-center pt-3 pl-2 bg-gray-800">
        <div>
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png"
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

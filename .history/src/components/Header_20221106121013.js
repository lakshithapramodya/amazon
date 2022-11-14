import React from "react";
import Image from "next/image";

function Header() {
  return (
    <header>
      <div>
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png"
          width={150}
          height={40}
          objectFit="contain"
        />
      </div>
      <div></div>
    </header>
  );
}

export default Header;

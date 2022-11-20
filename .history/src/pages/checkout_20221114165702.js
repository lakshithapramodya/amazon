import React from "react";
import Header from "../components/Header";
import Image from "next/image";

function Checkout() {
  return (
    <div className="bg-gray-100">
      <Header />
      <main>
        <div>
          <Image
            src="https://www.junglescout.com/wp-content/uploads/2020/05/Prime-day-banner.png"
            objectFit="contain"
            className="w-full"
          />
        </div>
      </main>
    </div>
  );
}

export default Checkout;

import React from "react";
import Header from "../components/Header";
import Image from "next/image";

function Checkout() {
  return (
    <div className="bg-gray-100">
      <Header />
      <main className="lg:flex max-w-screen-2xl mx-auto">
        <div className="">
          <Image
            src="https://www.junglescout.com/wp-content/uploads/2020/05/Prime-day-banner.png"
            objectFit="contain"
            width={1020}
            height={250}
          />
        </div>
      </main>
    </div>
  );
}

export default Checkout;

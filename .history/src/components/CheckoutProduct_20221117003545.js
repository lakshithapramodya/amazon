import React from "react";
import Image from "next/image";
import Currency from "react-currency-formatter";

function CheckoutProduct({ title, price, description, category, image }) {
  return (
    <div>
      <Image src={image} objetFit="contain" layout="fill" className="h-10" />
    </div>
  );
}

export default CheckoutProduct;

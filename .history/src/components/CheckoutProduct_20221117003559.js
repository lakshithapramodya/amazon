import React from "react";
import Image from "next/image";
import Currency from "react-currency-formatter";

function CheckoutProduct({ title, price, description, category, image }) {
  return (
    <div>
      <Image src={image} objetFit="contain" width={160} height={200} />
    </div>
  );
}

export default CheckoutProduct;

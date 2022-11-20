import React from "react";
import Image from "next/image";

function CheckoutProduct({ title, price, description, category, image }) {
  return (
    <div>
      <Image src={image} objectFit="contain" />
      <h1>{title}</h1>
    </div>
  );
}

export default CheckoutProduct;

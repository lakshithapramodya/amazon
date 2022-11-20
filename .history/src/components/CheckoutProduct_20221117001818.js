import React from "react";
import Image from "next/image";

function CheckoutProduct({ title, price, description, category, image }) {
  return (
    <div>
      <Image src={image} objectFit="contain" height={150} width={50} />
      <h1>{title}</h1>
    </div>
  );
}

export default CheckoutProduct;

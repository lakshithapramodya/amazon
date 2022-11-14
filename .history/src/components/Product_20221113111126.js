import React from "react";
import Image from "next/image";

function Product({ title, price, description, category, image }) {
  return (
    <div className="p-10 h-96 w-72">
      <h3 className="pl-24 text-gray-500">{category}</h3>
      <Image src={image} width={150} height={300} objectFit="contain" />
      <h4>{title}</h4>
      <p>{description}</p>
      <p>{price}</p>
    </div>
  );
}

export default Product;

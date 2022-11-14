import React from "react";
import Image from "next/image";

function Product({ title, price, description, category, image }) {
  return (
    <div className="p-10 h-96 w-72">
      <h1 className="pl-24">{category}</h1>
      <Image src={image} width={150} height={300} objectFit="contain" />
    </div>
  );
}

export default Product;

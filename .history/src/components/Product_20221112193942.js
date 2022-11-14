import React from "react";
import Image from "next/image";

function Product({ title, price, description, category, image }) {
  return (
    <div className="p-10 mt-6 bg-red-600">
      <h1>{category}</h1>
      <Image src={image} width={150} height={300} objectFit="contain" />
    </div>
  );
}

export default Product;

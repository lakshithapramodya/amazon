import React from "react";
import Image from "next/image";

function Product({ title, price, description, category, image }) {
  return (
    <div className="">
      <h3 className="">{category}</h3>
      <Image src={image} width={200} height={200} objectFit="contain" />
      <h4>{title}</h4>
      <p>{description}</p>
      <p>{price}</p>
    </div>
  );
}

export default Product;

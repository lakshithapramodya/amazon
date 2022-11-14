import React from "react";
import Image from "next/image";

function Product({ title, price, description, category, image }) {
  return (
    <div className="">
      <h1>{category}</h1>
      <div className="h-16 w-16">
        <img src={image} alt="" />
      </div>
    </div>
  );
}

export default Product;

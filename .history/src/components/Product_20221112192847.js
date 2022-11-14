import React from "react";

function Product({ title, price, description, category, image }) {
  return (
    <div className="relative bg-white">
      <img className="h-16 w-16" src={image} alt="" />
    </div>
  );
}

export default Product;

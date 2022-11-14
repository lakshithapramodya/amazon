import React from "react";

function Product({ title, price, description, category, image }) {
  return (
    <div className="relative h-48 w-32 bg-white">
      <img src={image} alt="" />
    </div>
  );
}

export default Product;

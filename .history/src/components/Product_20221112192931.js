import React from "react";

function Product({ title, price, description, category, image }) {
  return (
    <div className="relative bg-white">
      <div className="h-16 w-16">
        <img src={image} alt="" />
      </div>
    </div>
  );
}

export default Product;

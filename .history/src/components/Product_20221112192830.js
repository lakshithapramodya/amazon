import React from "react";

function Product({ title, price, description, category, image }) {
  return (
    <div className="relative bg-white">
      <img src={image} alt="" />
    </div>
  );
}

export default Product;

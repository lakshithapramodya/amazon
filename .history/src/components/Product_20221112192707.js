import React from "react";

function Product({ title, price, description, category, image }) {
  return (
    <div className="relative">
      <h1>{title}</h1>
    </div>
  );
}

export default Product;

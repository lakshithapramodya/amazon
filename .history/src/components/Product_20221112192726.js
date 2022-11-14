import React from "react";

function Product({ title, price, description, category, image }) {
  return (
    <div className="relative h-48 w-32">
      <h1>{title}</h1>
    </div>
  );
}

export default Product;

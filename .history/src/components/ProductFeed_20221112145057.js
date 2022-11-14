import React from "react";

function ProductFeed({ products }) {
  return (
    <div>
      {products.map((product) => (
        <h1>{product?.title}</h1>
      ))}
    </div>
  );
}

export default ProductFeed;

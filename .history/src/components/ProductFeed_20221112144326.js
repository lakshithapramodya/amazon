import React from "react";

function ProductFeed({ Products }) {
  return (
    <div>
      {products.map((product) => (
        <h1>{product.title}</h1>
      ))}
    </div>
  );
}

export default ProductFeed;

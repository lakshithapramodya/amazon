import React from "react";

function ProductFeed({ products }) {
  return (
    <div>
      {products?.map(({ id, title, price, description, category, image }) => (
        <h1>{product.title}</h1>
      ))}
    </div>
  );
}

export default ProductFeed;

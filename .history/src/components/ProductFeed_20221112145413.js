import React from "react";
import Product from "./Product";

function ProductFeed({ products }) {
  return (
    <div>
      <Product products={products} />
    </div>
  );
}

export default ProductFeed;

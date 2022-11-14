import React from "react";
import Product from "./Product";

function ProductFeed({ products }) {
  return (
    <div>
      {products?.map(({ id, title, price, description, category, image }) => (
        <Product
          key={id}
          title={title}
          price={price}
          description={description}
        />
      ))}
    </div>
  );
}

export default ProductFeed;

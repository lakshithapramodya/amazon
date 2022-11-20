import React from "react";
import Image from "next/image";

function CheckoutProduct({ title, price, description, category, image }) {
  return (
    <div>
      {products
        ?.slice(4, products.length)
        .map(({ id, title, price, description, category, image }) => (
          <Product
            key={id}
            title={title}
            price={price}
            description={description}
            category={category}
            image={image}
          />
        ))}
    </div>
  );
}

export default CheckoutProduct;

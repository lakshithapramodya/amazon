import React, { useState } from "react";
import Image from "next/image";
import Currency from "react-currency-formatter";
import { StarIcon } from "@heroicons/react/24/solid";

function CheckoutProduct({ title, price, description, category, image }) {
  const [rating] = useState(Math.floor(Math.random() * 5) + 1);

  return (
    <div className="grid grid-cols-5">
      <Image src={image} objetFit="contain" width={200} height={200} />
      <h2>{title}</h2>
      <div className="flex text-yellow-500">
        {[...Array(rating)].map(() => (
          <StarIcon className="h-5" />
        ))}
      </div>
    </div>
  );
}

export default CheckoutProduct;

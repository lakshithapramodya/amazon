import React, { useState } from "react";
import Image from "next/image";
import Currency from "react-currency-formatter";
import { StarIcon } from "@heroicons/react/24/solid";

function CheckoutProduct({ title, price, description, category, image }) {
  const [rating] = useState(Math.floor(Math.random() * 5) + 1);
  const [hasPrime] = useState(Math.random() < 5);

  return (
    <div className="grid grid-cols-5 ">
      <Image src={image} objetFit="contain" width={200} height={200} />

      <div className="col-span-3 mx-5 space-y-2">
        <h2>{title}</h2>
        <div className="flex text-yellow-500">
          {[...Array(rating)].map(() => (
            <StarIcon className="h-5" />
          ))}
        </div>
        <p className="text-sm line-clamp-3">{description}</p>
        <div>
          <Currency quantity={price} currency="USD" />
        </div>
      </div>
      <div className="col-span-1">
        <h1>Total</h1>
      </div>
    </div>
  );
}

export default CheckoutProduct;

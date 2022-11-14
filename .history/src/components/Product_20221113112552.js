import React, { useState } from "react";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/24/solid";

function Product({ title, price, description, category, image }) {
  const [rating] = useState(Math.floor(Math.random() * 5) + 1);

  return (
    <div className="">
      <h3 className="">{category}</h3>
      <Image src={image} width={200} height={200} objectFit="contain" />
      <h4>{title}</h4>
      <div className="flex">
        {[...Array(rating)].map(() => (
          <StarIcon className="h-5" />
        ))}
      </div>
      <p className=" truncate">{description}</p>

      <p>{price}</p>
    </div>
  );
}

export default Product;

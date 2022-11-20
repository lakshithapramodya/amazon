import React, { useState } from "react";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/24/solid";
import Currency from "react-currency-formatter";
import { useDispatch } from "react-redux";
import { addToBasket } from "../slices/basketSlice";

function Product({ title, price, description, category, image }) {
  const dispatch = useDispatch();

  const [rating] = useState(Math.floor(Math.random() * 5) + 1);
  const [hasPrime] = useState(Math.random() < 0.5);

  const addItemToBasket = () => {
    const product = {
      title,
      price,
      description,
      category,
      image,
    };
  };

  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10">
      <h3 className="absolute top-2 right-2 text-xs text-gray-400 italic">
        {category}
      </h3>
      <Image src={image} width={200} height={200} objectFit="contain" />
      <h4 className="my-3 truncate">{title}</h4>
      <div className="flex">
        {[...Array(rating)].map(() => (
          <StarIcon className="h-5 text-yellow-500" />
        ))}
      </div>
      <p className="text-xs my-2 line-clamp-2">{description}</p>
      <div>
        <Currency quantity={price} currency="USD" />
      </div>
      {hasPrime && (
        <div className="flex items-center space-x-2 my-2 mb-4">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Amazon_Prime_Logo.svg/2560px-Amazon_Prime_Logo.svg.png"
            alt=""
            className="object-contain w-8 mt-2"
          />
          <p className="text-xs text-gray-500">FREE Next-Day Delivery</p>
        </div>
      )}
      <button className="mt-auto button">Add to cart</button>
    </div>
  );
}

export default Product;

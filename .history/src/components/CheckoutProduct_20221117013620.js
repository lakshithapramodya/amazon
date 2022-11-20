import React, { useState } from "react";
import Image from "next/image";
import Currency from "react-currency-formatter";
import { StarIcon } from "@heroicons/react/24/solid";
import { addToBasket, removeFromBasket } from "../slices/basketSlice";
import { useDispatch } from "react-redux";

function CheckoutProduct({ title, price, description, category, image }) {
  const [rating] = useState(Math.floor(Math.random() * 5) + 1);
  const [hasPrime] = useState(Math.random() < 5);

  const dispatch = useDispatch();

  const addItemToBasket = () => {
    const product = {
      title,
      price,
      description,
      category,
      image,
    };

    dispatch(addToBasket(product));
  };

  const removeItems = () => {
    const product = {
      title,
      price,
      description,
      category,
      image,
    };
    dispatch(removeFromBasket(product));
  };

  return (
    <div className="grid grid-cols-5 ">
      <Image src={image} objectFit="contain" width={200} height={200} />

      <div className="col-span-3 mx-5 space-y-2">
        <h2>{title}</h2>
        <div className="flex text-yellow-500">
          {[...Array(rating)].map(() => (
            <StarIcon className="h-5" />
          ))}
        </div>
        <p className="text-sm line-clamp-3">{description}</p>
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
        <div>
          <Currency quantity={price} currency="USD" />
        </div>
      </div>
      <div className="flex flex-col space-y-2 my-auto justify-self-end">
        <button onClick={addItemToBasket} className="button">
          Add to basket
        </button>
        <button onClick={removeItems} className="button">
          Remove from basket
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;

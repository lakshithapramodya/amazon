import React from "react";
import Image from "next/image";
import Currency from "react-currency-formatter";

function CheckoutProduct({ title, price, description, category, image }) {
  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10">
      <h3 className="absolute top-2 right-2 text-xs text-gray-400 italic">
        {category}
      </h3>
      <Image src={image} width={200} height={200} objectFit="contain" />
      <h4 className="my-3 truncate">{title}</h4>
      <p className="text-xs my-2 line-clamp-2">{description}</p>
      <div>
        <Currency quantity={price} currency="USD" />
      </div>
      <button className="mt-auto button">Removet</button>
    </div>
  );
}

export default CheckoutProduct;

import React from "react";
import Header from "../components/Header";
import Image from "next/image";
import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";
import CheckoutProduct from "../components/CheckoutProduct";
import Currency from "react-currency-formatter";
import { useSession } from "next-auth/react";

function Checkout() {
  const items = useSelector(selectItems);
  const { data: session } = useSession();

  return (
    <div className="bg-gray-100">
      <Header />

      <main className="lg:flex max-w-screen-2xl mx-auto">
        <div className="flex-grow m-5 shadow-sm mx-auto">
          <Image
            src="https://www.junglescout.com/wp-content/uploads/2020/05/Prime-day-banner.png"
            objectFit="contain"
            width={1020}
            height={250}
          />
          <div className="flex flex-col p-5 space-y-10 bg-white">
            <h1 className="text-3xl border-b pb-4">
              {items.length === 0
                ? "Your Amazon Basket is empty"
                : "Your Shopping Basket"}
            </h1>
            {items.map((item, i) => (
              <CheckoutProduct
                key={i}
                title={item.title}
                price={item.price}
                description={item.description}
                category={item.category}
                image={item.image}
                id={item.id}
              />
            ))}
          </div>
        </div>
        <div className="">
          {items.length > 0 && (
            <div>
              <h2 className="whitespace-nowrap">
                Subtotal ({items.length} items):
                <span className="font-bold">
                  {/* <Currency quantity={total} currency="USD" /> */}
                </span>
              </h2>
              <button>
                {!session ? "Sign in to checkout" : "Proceed checkout"}
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default Checkout;

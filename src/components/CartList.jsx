import React from "react";
import CartItem from "./CartItem";
import useCartStore from "../store/cartStore";

export default function CartList() {
  const cart = useCartStore((state) => state.cart);

  if (cart.length === 0)
    return <p className="text-gray-500 text-lg">Your cart is empty.</p>;

  return (
    <div className="flex flex-col gap-4">
      {cart.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
  );
}


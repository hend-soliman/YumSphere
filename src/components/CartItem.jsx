import React from "react";
import useCartStore from "../store/cartStore";

export default function CartItem({ item }) {
  const increaseQty = useCartStore((state) => state.increaseQty);
  const decreaseQty = useCartStore((state) => state.decreaseQty);
  const removeItem = useCartStore((state) => state.removeItem);

  return (
    <div className="flex justify-between items-center bg-white p-4 rounded-xl shadow">

      <div className="flex gap-4 items-center">
        <img src={item.img || item.image} alt={item.name} className="w-20 h-20 rounded-lg object-cover" />
        <div>
          <h3 className="font-semibold text-gray-800">{item.name}</h3>
          <p className="text-sm text-gray-500">{item.desc}</p>
          <p className="mt-1 font-semibold">${item.price}</p>
        </div>
      </div>

     
      <div className="flex flex-col items-end gap-2">
        <div className="flex items-center border rounded-lg">
          <button onClick={() => decreaseQty(item.id)} className="text-orange-500 px-2 py-1">−</button>
          <span className="px-3">{item.qty}</span>
          <button onClick={() => increaseQty(item.id)} className="text-orange-500 px-2 py-1">+</button>
        </div>
        <button
          onClick={() => removeItem(item.id)}
          className="text-orange-500 text-sm mt-1">
          Remove
        </button>
      </div>
    </div>
  );
}
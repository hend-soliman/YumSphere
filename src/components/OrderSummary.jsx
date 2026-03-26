import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useStore from "../store/CartStore";

export default function OrderSummary() {
  const cart = useStore((state) => state.cart);
  const navigate = useNavigate();
  const [coupon, setCoupon] = useState("");

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.qty, 0);
  const shipping = subtotal > 0 ? 5 : 0;
  const total = subtotal + shipping;

  return (
    <div className="bg-white shadow rounded-xl p-6 flex flex-col gap-4">
      <h3 className="font-semibold text-lg">Order Summary</h3>

      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Coupon Code"
          value={coupon}
          onChange={(e) => setCoupon(e.target.value)}
          className="flex-1 border rounded-lg px-3 py-2"/>
        <button className="text-orange-500 font-medium">Apply</button>
      </div>

      <div className="flex justify-between text-sm">
        <span>Subtotal</span>
        <span>${subtotal.toFixed(2)}</span>
      </div>

      <div className="flex justify-between text-sm">
        <span>Shipping</span>
        <span>${shipping.toFixed(2)}</span>
      </div>

      <div className="flex justify-between font-semibold text-lg border-t pt-2">
        <span>Total</span>
        <span>${total.toFixed(2)}</span>
      </div>

      <button onClick={() => navigate("/checkout")}
        className="w-full mt-4 bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition">
        Proceed to Checkout
      </button>
    </div>
  );
}
import React from "react";
import CartList from "../components/CartList";
import OrderSummary from "../components/OrderSummary";
import { useNavigate } from "react-router-dom";
import chburg from "../assets/chburg.jpg";

export default function CartPage() {
  const navigate = useNavigate();

  return (
    <div className="relative w-full min-h-screen p-5 bg-gray-50  text-[#748194]" >
      <h1 className="text-3xl font-bold mb-5 text-[#4d5969]">Your Cart</h1>

      <div className="flex flex-col md:flex-row gap-6">
       
        <div className="flex-1">
          <CartList />

          <div onClick={() => navigate("/menu")}
            className="flex items-center gap-2 text-orange-500 cursor-pointer mt-4 font-medium">
            ← Continue Shopping
          </div>
        </div>

       
        <div className="w-full md:w-96">
          <OrderSummary />
        </div>
      </div>

      <img src={chburg} alt="decorative"
        className="hidden md:block absolute bottom-0 right-0 w-72 md:w-80 opacity-90 pointer-events-none object-contain"/>
    </div>
  );
}
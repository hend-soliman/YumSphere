import React from "react";
import OrderSummary from "../components/OrderSummary";
import check from "../assets/check.jpg";
import toast, { Toaster } from "react-hot-toast";

export default function CheckoutPage() {

  const handleSubmit = (e) => {
    e.preventDefault();
    
    toast.custom(
      (t) => (
        <div
          className={`${t.visible ? 'animate-enter' : 'animate-leave'} max-w-sm w-full bg-white shadow-lg rounded-xl pointer-events-auto flex flex-col p-5 border-l-4 border-orange-400`}>
          <div className="flex items-center gap-3">
            <span className="text-[#ffc554] text-2xl">✅</span>
            <div className="flex-1 text-gray-700 font-semibold">
              Purchase Successful!
            </div>
          </div>
        </div>
      ),
      { duration: 4000, position: "top-center" }
    );
  };

  return (
    <div className="relative w-full min-h-screen bg-gray-50 p-5 text-[#748194]">
      <Toaster />
      <h1 className="text-3xl font-bold mb-6 text-center">Checkout</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
       
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-4">Billing & Shipping Information</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input type="text" placeholder="Full Name" className="w-full border rounded-lg px-3 py-2" />
            <input type="email" placeholder="Email Address" className="w-full border rounded-lg px-3 py-2" />
            <input type="text" placeholder="Phone Number" className="w-full border rounded-lg px-3 py-2" />
            <input type="text" placeholder="Address" className="w-full border rounded-lg px-3 py-2" />
            <input type="text" placeholder="City" className="w-full border rounded-lg px-3 py-2" />
            <input type="text" placeholder="Postal Code" className="w-full border rounded-lg px-3 py-2" />
            <input type="text" placeholder="Country" className="w-full border rounded-lg px-3 py-2" />

          
            <div className="mt-4">
              <h3 className="font-semibold mb-2">Payment Method</h3>
              <div className="flex flex-col gap-2">
                <label className="flex items-center gap-2">
                  <input type="radio" name="payment" /> Credit Card
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" name="payment" /> PayPal
                </label>
              </div>
            </div>

            <button type="submit"
              className="mt-6 w-full bg-[#ffc554] text-white py-2 rounded-lg hover:bg-orange-500 transition-colors">
              Place Order
            </button>
          </form>
        </div>

        <div className="bg-white p-6 rounded-xl shadow relative">
          <OrderSummary />

          <img src={check} alt="decorative"
            className="hidden md:block absolute bottom-0 right-0 w-60 opacity-90 pointer-events-none object-contain"/>
        </div>
      </div>
    </div>
  );
}
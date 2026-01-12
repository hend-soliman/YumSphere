import React, { useEffect } from "react";
import { FaRegClock, FaCalendarAlt, FaChevronDown } from "react-icons/fa";
import "animate.css";
import meal from "../assets/meal.png";   

export default function Reservations({ isOpen, onClose }) {

 
  useEffect(() => {
    function handleEsc(el) {
      if (el.key === "Escape") onClose();
    }

    if (isOpen) document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

 
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">

      {/* Overlay */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal */}
      <div className="relative w-[820px] max-w-[95%] bg-white rounded-xl overflow-hidden animate__animated animate__fadeInDown">

        {/* Header */}
        <div className="flex">
          <div className="flex-1 p-8">
            <div className="flex items-start gap-4">
              <div className="w-1 h-14 bg-[#FFB84C]" />
              <h2 className="text-3xl font-bold text-[#0b1727] leading-snug">
                Make A <br /> Reservation
              </h2>
            </div>
          </div>

          <img
            src={meal}
            alt="meal"
            className="w-[320px] object-cover"
          />
        </div>

        {/* Form */}
        <div className="grid grid-cols-2 gap-5 p-8">

          {/* Time */}
          <div className="relative">
            <FaRegClock className="absolute left-4 top-4 text-gray-400" />
            <select className="w-full border border-[#d6e0f0] rounded-md pl-10 pr-10 py-3 text-[#9aa5b1]">
              <option>Time</option>
              <option>12:00 PM</option>
              <option>1:00 PM</option>
              <option>7:00 PM</option>
            </select>
            <FaChevronDown className="absolute right-4 top-4 text-gray-400" />
          </div>

          {/* Date */}
          <div className="relative">
            <FaCalendarAlt className="absolute left-4 top-4 text-gray-400" />
            <input
              type="date"
              className="w-full border border-[#d6e0f0] rounded-md pl-10 pr-4 py-3 text-[#9aa5b1]"
            />
          </div>

          <input
            className="border border-[#d6e0f0] rounded-md p-3 text-[#9aa5b1]"
            placeholder="Name"
          />

          <input
            className="border border-[#d6e0f0] rounded-md p-3 text-[#9aa5b1]"
            placeholder="Phone"
          />

          {/* Person */}
          <div className="relative col-span-2">
            <select className="w-full border border-[#d6e0f0] rounded-md px-4 py-3 text-[#9aa5b1]">
              <option>Person</option>
              <option>1 Person</option>
              <option>2 People</option>
              <option>4 People</option>
            </select>
            <FaChevronDown className="absolute right-4 top-4 text-gray-400" />
          </div>

          <input
            className="border border-[#d6e0f0] rounded-md p-3 col-span-2 text-[#9aa5b1]"
            placeholder="Email"
          />
        </div>

        {/* Bottom */}
        <div className="bg-[#FFB84C] p-8 text-center">
          <p className="text-sm text-[#0b1727] leading-7 mb-6">
            Apparently we had reached a great height in the atmos, for the sky was a dead black,
            and the stars had twinkle. By which lifts the light.
          </p>

          <button className="bg-white text-[#0b1727] font-semibold py-3 px-20 rounded-md hover:bg-gray-100 transition">
            SUBMIT
          </button>
        </div>

      </div>
    </div>
  );
}

import React, { useState } from "react";


import green from "../assets/green.png";
import dish from "../assets/dish.png";
import Reservations from "./Reservations";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { FaMap } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";

export default function LocationTiming() {




  const [openReservation, setOpenReservation] = useState(false);

  return (
    <>

      <section id="location-timing" className="relative py-44 bg-[#f9fafd]">
        <img
          src={green}
          className="absolute -left-50 top-1/2 md:top-1/2 w-96 md:w-100 lg:w-125 -translate-y-1/2 z-0 pointer-events-none animate__animated animate__fadeInLeft"
        />


        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-24">
            <p className="animate__animated animate__fadeInUp text-2xl text-[#0b1727] font-bold uppercase mb-4">
              Location & Timing
            </p>
            <h2 className="animate__animated animate__fadeInUp text-[44px] font-bold text-[#0b1727]">
              Contact with us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

            {/* Location */}
            <div className="bg-white h-60 rounded-md shadow-sm p-10">
              <div className="space-y-2 text-sm text-[#748194]">
                <p className="flex gap-2 items-center">
                  <FaMap className="text-xl text-[#FF806E]" />
                  Av. Paz Soldán 290, San Isidro, Lima 27 - Peru
                </p>
                <p className="flex gap-2 items-center">
                  <FaPhone className="text-[#FF806E]" /> +511 442-2777
                </p>
                <p className="flex gap-2 items-center">

                  <FaEnvelope className="text-[#FF806E]" /> mail@restaurantpro.com
                </p>
              </div>
            </div>


            {/* Hours */}
            <div className="bg-white h-60 rounded-md shadow-sm p-10">
              <h4 className="text-[#FF806E] text-sm font-semibold mb-4">
                Hours of service
              </h4>

              <p className="text-sm text-[#0b1727]">Monday to Saturday</p>
              <p className="mt-4 text-sm text-[#748194]">
                1:00 pm - 3:00 pm <br />
                7:00 pm - 11:00 pm
              </p>



              <p className="mt-4 text-sm text-[#0b1727]">Sunday</p>
              <p className="text-sm text-[#748194]">
                12:30 pm - 3:30 pm
              </p>
            </div>


            {/* Telephone & Reservation */}
            <div className="bg-white h-60 rounded-md shadow-sm p-10 flex flex-col justify-between relative">
              <img
                src={dish}
                className="absolute top-2 right-2 w-24 md:w-32 animate__animated animate__fadeInTopRight"
              />
              <div>
                <h4 className="text-[#FF806E] text-sm font-semibold mb-4">
                  Telephone support:
                </h4>
                <p className="text-sm text-[#748194] mb-8">
                  Monday to Saturday from <br />
                  9:00 am to 9:00 pm
                </p>
                <button
                  onClick={() => setOpenReservation(true)}
                  className="btn bg-[#FF806E] text-white px-8 py-2 rounded-md border-0"
                >
                  MAKE A RESERVATION
                </button>
              </div>

            </div>
          </div>
        </div>
      </section>


      <Reservations

        isOpen={openReservation}
        onClose={() => setOpenReservation(false)}
      />
    </>

  )

}

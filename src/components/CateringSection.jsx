import React, { useRef } from 'react'
import cateringImg from "../assets/pancake_PNG94.png";

export default function CateringSection() {


    
  return (
     <section className="py-32 ">
      <div className="container mx-auto px-4 max-w-3xl text-center ">
        <span className=" text-2xl font-bold text-[#4d5969] ">
          Catering
        </span>

        <h2 className="text-4xl md:text-5xl   mt-4 text-[#0b1727] animate__animated animate__fadeInUp">
          We Manage Your Events
        </h2>

        <p className="text-[#748194] mt-6 md:text-lg animate__animated animate__zoomIn ">
          Allow our Chef to deliver the perfect private dinner or cocktail party
          experience in your home; or let us simply add a little extra flavor to
          your next office meeting, boat trip, or beach picnic.
        </p>
      </div>


      <div className="container  mt-6 animate__animated animate__bounceIn animate__delay-1s">
        <div className="rounded-2xl shadow-2xl   flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
          
    
          <div className="flex-1 flex justify-center md:justify-end animate__animated animate__heartBeat">
            <img
              src={cateringImg}
              alt="Delicious catering service"
              className=" object-cover"
            />
          </div>

        
          <div className="text-center align-center md:text-left flex-1 gap-5 space-y-2 md:space-y-4">
            <h4 className="text-lg md:text-xl text-[#748194]">
              We Cater in Weddings, <br /> Corporate Functions and Events
            </h4>

            <button className="btn bg-[#ffc554] text-[#0b1727] border-none hover:bg-[#ffc554] transition-all duration-300 shadow-md hover:shadow-lg px-6 py-3 text-lg md:text-xl">
              Hire Us Now
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}

  

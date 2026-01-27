import React, { useRef, useEffect } from "react";
import cateringImg from "../assets/pancake_PNG94.png";

export default function CateringSection() {
  const scrollToLocation = () => {
    const section = document.getElementById("location-timing");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const titleRef = useRef(null);
  const paragraphRef = useRef(null);
  const imgWrapperRef = useRef(null);

  useEffect(() => {
    const elements = [
      { ref: titleRef, className: "animate__fadeInUp" },
      { ref: paragraphRef, className: "animate__zoomIn" },
      { ref: imgWrapperRef, className: "animate__bounceIn animate__heartBeat animate__delay-1s" },
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elData = elements.find((el) => el.ref.current === entry.target);
            if (elData) {
              entry.target.classList.add("animate__animated", ...elData.className.split(" "));
              entry.target.classList.remove("opacity-0");
              observer.unobserve(entry.target); 
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach((el) => {
      if (el.ref.current) observer.observe(el.ref.current);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-32 bg-[#f9fafd]">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <span className="text-2xl font-bold text-[#4d5969]">Catering</span>

        <h2 ref={titleRef} className="text-4xl md:text-5xl mt-4 text-[#0b1727] opacity-0">
          We Manage Your Events
        </h2>

        <p ref={paragraphRef} className="text-[#748194] mt-6 md:text-lg opacity-0">
          Allow our Chef to deliver the perfect private dinner or cocktail party
          experience in your home; or let us simply add a little extra flavor to
          your next office meeting, boat trip, or beach picnic.
        </p>
      </div>

      <div ref={imgWrapperRef} className="container mt-14 opacity-0">
        <div className="mx-auto max-w-200 rounded-2xl shadow-2xl flex flex-col md:flex-row items-center gap-6 md:gap-8 px-6 md:px-12 py-10 md:py-12">
          <div className="flex justify-center md:justify-end">
            <img src={cateringImg} className="w-65 md:w-75 lg:w-85 object-cover" />
          </div>

          <div className="flex flex-col justify-between items-center text-center md:text-left gap-6 h-full">
            <h3 className="font-bold text-[18px] md:text-[22px] text-[#748194]">
              We Cater in Weddings, <br /> Corporate Functions <br /> and Events
            </h3>

            <button onClick={scrollToLocation}
              className="btn bg-[#ffc554] font-bold text-[#4d5969] border-none hover:bg-[#ffc554] shadow-md hover:shadow-lg px-8 py-3 text-[16px] md:text-[18px]">
              HIRE US NOW
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}



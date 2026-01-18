import React from 'react'

import { useEffect, useRef, useState } from "react";
import { useNavigate } from 'react-router-dom';
import "animate.css";
import forkImage from "../assets/pastafork.png"; 

import { FaFacebookSquare } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaGooglePlusSquare } from "react-icons/fa";


export default function Footer() {
  const footerRef = useRef(null);
  const [showFork, setShowFork] = useState(false);
  const navigate = useNavigate();
  const openLink = (url)=>{
    window.open(url, "_blank", "noopener,noreferrer");
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowFork(true);
          observer.disconnect(); 
        }
      },
      { threshold: 0.3 }
    );

    if (footerRef.current) observer.observe(footerRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <footer ref={footerRef} className="w-full relative bg-[#0e1a2b] text-white pt-16 pb-8">
      <img
        src={forkImage}
        className={`absolute right-40 bottom-0 w-28 pointer-events-none
          ${showFork ? "animate__animated animate__fadeInUp" : "opacity-0"}`}
        style={{ animationDuration: "1s", animationTimingFunction: "ease-out" }}/>

      <div className=" text-start md:text-left max-w-7xl mx-auto px-2 grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="flex flex-col items-start text-start relative z-10">
          <h1 className="text-3xl font-bold mb-4">Logo</h1>
          <p className="text-xl mb-4">Want To Taste Our Food?</p>
          <button onClick={()=> navigate("/menu")} className="bg-yellow-400 text-[#0e1a2b] px-6 py-2 rounded font-semibold cursor-pointer">
            ORDER ONLINE
          </button>
        </div>

        <div className="text-left">
          <h4 className="font-semibold mb-2">ABOUT</h4>
          <ul className="text-gray-400 space-y-1">
            <li>About</li>
            <li>Services</li>
            <li>Careers</li>
            <li>Hire Us</li>
          </ul>
        </div>

        <div className="text-left">
          <h4 className="font-semibold mb-2">RESOURCES</h4>
          <ul className="text-gray-400 space-y-1 mb-4">
            <li>Terms</li>
            <li>Help</li>
            <li>Privacy</li>
          </ul>
          <div className="flex space-x-4 text-gray-400 text-lg">
            <FaFacebookSquare onClick={() => openLink("https://www.facebook.com")} className="cursor-pointer hover:text-yellow-400 transition" />
            <RiInstagramFill onClick={() => openLink("https://www.instagram.com")} className="cursor-pointer hover:text-yellow-400 transition" />
            <FaGooglePlusSquare onClick={() => openLink("https://plus.google.com")} className="cursor-pointer hover:text-yellow-400 transition" />
          </div>
        </div>
      </div>

      <div className="text-center text-gray-500 mt-8 text-sm">
        Made With <span className="text-yellow-400">♥</span> By Kareem & Hend
      </div>
    </footer>
  );
}
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { HiMenu } from "react-icons/hi";
import { FiShoppingCart, FiLogIn } from "react-icons/fi";
import logo from '../assets/logo.png';

export default function NavBar() {

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Menu", path: "/menu" },
    { name: "Contact", path: "/contact" },
  ];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="h-20 w-full bg-black">
      <div className="container mx-auto max-w-6xl">

        <div className="flex items-center justify-between relative h-20 px-4">

          <button
            className="md:hidden text-white hover:text-[#ffc554] order-1"
            onClick={() => setIsOpen(!isOpen)}>
            <HiMenu size={28} />
          </button>

          <Link to="/"
            className="absolute left-1/2 transform -translate-x-1/2 md:static md:transform-none">
            <img
              src={logo}
              alt="YumSphere Logo"
              className="h-14 md:h-full max-h-25 w-auto object-contain transition-transform duration-300 hover:scale-105"/>
          </Link>

          <ul className="hidden md:flex gap-6 absolute left-1/2 transform -translate-x-1/2">
            {links.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>`transition transform duration-200 ${
                      isActive
                        ? "text-[#ffc554] scale-105"
                        : "text-[#748194] hover:text-[#ffc554] hover:scale-105"}`}>
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="flex items-center order-3 ml-4">
            <Link to="/cart" className="text-white hover:text-[#ffc554]">
              <FiShoppingCart size={28} />
            </Link>

            <Link
              to="/login"
              className="text-white hover:text-[#ffc554] ml-4">
              <FiLogIn size={26} />
            </Link>
          </div>

        </div>

        {isOpen && (
          <ul className="md:hidden absolute top-20 left-0 w-full bg-black flex flex-col gap-4 py-4 px-6 z-50 border-t border-gray-800">
            {links.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `block transition transform duration-200 ${
                      isActive
                        ? "text-[#ffc554] scale-105"
                        : "text-[#748194] hover:text-[#ffc554] hover:scale-105"}`}>
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        )}

      </div>
    </nav>
  );
}
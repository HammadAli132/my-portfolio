"use client";

import { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";

function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Hamburger Menu Button - Visible on mobile */}
      <button className="md:hidden text-3xl focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FiX /> : <FiMenu />}
      </button>

      {/* Mobile Sidebar */}
      <div className={`fixed top-0 left-0 h-screen w-9/12 bg-navbar shadow-lg transform transition-transform duration-300 z-50 
                       ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="flex justify-between items-center p-4 border-b border-gray-700">
          <span className="text-2xl font-semibold text-primary">Menu</span>
        </div>
        <nav className="mt-6">
          <ul className="flex flex-col space-y-6 px-6">
            <li><Link href="/" className="navbar-li text-white" onClick={() => setIsOpen(false)}>Home</Link></li>
            <li><Link href="#about" className="navbar-li text-white" onClick={() => setIsOpen(false)}>About</Link></li>
            <li><Link href="#projects" className="navbar-li text-white" onClick={() => setIsOpen(false)}>Projects</Link></li>
            <li><Link href="#skills" className="navbar-li text-white" onClick={() => setIsOpen(false)}>Skills</Link></li>
            <li><Link href="#technologies" className="navbar-li text-white" onClick={() => setIsOpen(false)}>Technologies</Link></li>
            <li><Link href="#contact" className="navbar-li text-white" onClick={() => setIsOpen(false)}>Contact</Link></li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default MobileMenu;

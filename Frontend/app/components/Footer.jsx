import React from "react";
import Link from "next/link";
import { FaInstagram, FaLinkedin, FaGithub, FaFacebook, FaPhone, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="px-4 py-6 mt-auto">
      {/* Upper part with three sections */}
      <div className="flex flex-col md:flex-row justify-between items-start gap-6 md:gap-12 lg:max-w-4/6 mx-auto border-b border-gray-700 pb-6">
        {/* Section 1: Name, description, and social media */}
        <div className="flex flex-col items-start md:gap-4 gap-2 text-center md:text-left">
          <h1 className="text-2xl font-bold text-primary">Hammad Ali</h1>
          <p className="text-sm text-gray-400">Get your dream website built with Hammad</p>
          <div className="flex gap-4">
            <a href="https://www.instagram.com/hammad_ali_132/?next=%2F" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={24} className="hover:text-primary transition" />
            </a>
            <a href="https://www.linkedin.com/in/hammad-ali-a28bb2243/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={24} className="hover:text-primary transition" />
            </a>
            <a href="https://github.com/HammadAli132" target="_blank" rel="noopener noreferrer">
              <FaGithub size={24} className="hover:text-primary transition" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=100027453249106" target="_blank" rel="noopener noreferrer">
              <FaFacebook size={24} className="hover:text-primary transition" />
            </a>
          </div>
        </div>

        {/* Section 2: Navigation Links */}
        <div className="flex flex-col md:text-left gap-2">
          <h2 className="text-md font-semibold">QUICK LINKS</h2>
          <Link href="/" className="text-gray-400 hover:text-white transition">Home</Link>
          <Link href="/#about" className="text-gray-400 hover:text-white transition">About</Link>
          <Link href="/#projects" className="text-gray-400 hover:text-white transition">Projects</Link>
          <Link href="/#skills" className="text-gray-400 hover:text-white transition">Skills</Link>
          <Link href="/#technologies" className="text-gray-400 hover:text-white transition">Technologies</Link>
          <Link href="/#contact" className="text-gray-400 hover:text-white transition">Contact</Link>
        </div>

        {/* Section 3: Contact Information */}
        <div className="flex flex-col md:text-left gap-2">
          <h2 className="text-md font-semibold">CONTACT</h2>
          <div className="flex items-center gap-2">
            <FaPhone size={16} />
            <a href="tel:+923049496641" className="text-gray-400">+92 304 9496641</a>
          </div>
          <div className="flex items-center gap-2">
            <FaEnvelope size={16} />
            <a href="mailto:alihammad132@outlook.com" className="text-gray-400">alihammad132@outlook.com</a>
          </div>
        </div>
      </div>

      {/* Lower part with copyright */}
      <div className="mt-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Hammad Ali. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;

import React from "react";
import { FiMail, FiMapPin, FiClock } from "react-icons/fi";
import { FaInstagram, FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";

function ContactSection() {
  return (
    <section id="contact" className="px-4 py-20 relative bg-[#1d2735]">
      <div className="flex flex-col justify-between items-center gap-12 lg:max-w-4/6 mx-auto">
        {/* Heading & Intro */}
        <div className="text-center flex flex-col gap-4">
          <h1 className="text-2xl md:text-3xl font-extrabold leading-tight">
            Get In <span className="text-primary">Touch</span>
          </h1>
          <p className="text-lg md:max-w-5/6 mx-auto text-gray-300">
            Interested in collaborating or have a question? I’m always open to discussing new
            projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </div>

        {/* Main Content: Contact Info & Form */}
        <div className="flex md:flex-row flex-col gap-8 w-full">
          {/* Contact Information */}
          <div className="md:w-1/2 flex flex-col gap-8 p-6">
            <div>
              <h2 className="text-xl font-semibold text-white mb-2">Contact Information</h2>
              <ul className="flex flex-col gap-4">
                <li className="flex items-start gap-2">
                  <FiMail className="mt-1 text-primary" />
                  <div>
                    <p className="font-bold text-white">Email</p>
                    <a href="mailto:alihammad132@outlook.com" className="text-sm">alihammad132@outlook.com</a>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <FiMapPin className="mt-1 text-primary" />
                  <div>
                    <p className="font-bold text-white">Location</p>
                    <p className="text-sm">Islamabad, Pakistan</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <FiClock className="mt-1 text-primary" />
                  <div>
                    <p className="font-bold text-white">Working Hours</p>
                    <p className="text-sm">Mon - Fri: Anytime</p>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-white mb-2">Follow Me</h2>
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
          </div>

          {/* Contact Form */}
          <form
            action="#"
            method="post"
            className="md:w-1/2 flex flex-col gap-4 p-6 bg-[#111827] rounded-lg"
          >
            <h2 className="text-xl font-semibold text-white">Send a Message</h2>
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="p-3 rounded-md bg-[#1d2735] focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="John Doe"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="p-3 rounded-md bg-[#1d2735] focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="john@example.com"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="subject" className="text-sm">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="p-3 rounded-md bg-[#1d2735] focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Subject or project name"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="p-3 rounded-md bg-[#1d2735] focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Type your message here..."
                required
              />
            </div>
            <button
              type="submit"
              className="mt-4 py-3 px-6 bg-secondary rounded-md text-white font-bold hover:bg-tertiary cursor-pointer transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;

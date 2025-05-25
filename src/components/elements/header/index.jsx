import React from "react";
import Typewriter from "../typewriter";

const index = () => {
  return (
    <header className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-16 px-6 md:px-20 flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-20">
      <img
        alt="Vincent Sandrya"
        className="w-48 h-48 object-cover rounded-full mr-6 
    animate-[slideIn_1s_ease-in-out]"
        height="400"
        loading="lazy"
        src="/public/assets/images/profil.jpg"
        width="400"
      />
      <div className="max-w-xl flex flex-col justify-center text-left">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-2 drop-shadow-md">
          Vincent Sandrya
        </h1>
        <p className="text-lg md:text-xl font-semibold mb-4 opacity-90 drop-shadow-sm">
          <Typewriter />
        </p>
        <p className="mb-6 text-indigo-100 leading-relaxed drop-shadow-sm">
          I am passionate about creating software solutions that are tailored to
          meet specific business needs and am always willing to learn and grow
          in this ever-evolving industry.
        </p>
        <a
          className="inline-flex items-center bg-white text-indigo-700 font-semibold px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-shadow hover:bg-indigo-50 focus:outline-none focus:ring-4 focus:ring-indigo-300"
          href="https://linkedin.com/in/vincentsandrya"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i className="fab fa-linkedin mr-3 text-xl"></i>
          Connect on LinkedIn
        </a>
      </div>
    </header>
  );
};

export default index;

import React from "react";

const index = () => {
  return (
    <section className="text-center">
      <h2 className="text-3xl font-bold mb-8 border-b-4 border-purple-600 inline-block pb-2">
        Connect with Me
      </h2>
      <div className="flex justify-center space-x-10 text-indigo-700 text-3xl">
        <a
          aria-label="LinkedIn"
          className="hover:text-indigo-900 transition-colors"
          href="https://linkedin.com/in/vincentsandrya"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i className="fab fa-linkedin"></i>
        </a>
        <a
          aria-label="GitHub"
          className="hover:text-indigo-900 transition-colors"
          href="https://github.com/vincentsandrya"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          aria-label="Whatsapp"
          className="hover:text-indigo-900 transition-colors"
          href="https://api.whatsapp.com/send?phone=081411015564"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i className="fab fa-whatsapp"></i>
        </a>
        <a
          aria-label="Email"
          className="hover:text-indigo-900 transition-colors"
          href="mailto:vincentsandrya2000@gmail.com"
        >
          <i className="fas fa-envelope"></i>
        </a>
      </div>
    </section>
  );
};

export default index;

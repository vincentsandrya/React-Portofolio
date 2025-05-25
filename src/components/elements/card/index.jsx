import React from "react";

const index = ({
  title,
  description,
  link,
  image,
}) => {

  return (
    <article
      className="flex-shrink-0 mx-auto  w-72 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow cursor-pointer snap-center"
      tabIndex="0"
    >
      <img
        alt="Screenshot of Project 1 user interface with colorful dashboard"
        className="rounded-t-2xl w-full h-40 object-cover"
        height="160"
        loading="lazy"
        src={image}
        width="288"
      />
      <div className="p-5">
        <h3 className="text-xl font-semibold mb-2 text-indigo-700">
          {title}
        </h3>
        <p className="text-gray-600 mb-4 text-sm leading-relaxed">
          {description}
        </p>
        <a
          className="inline-block text-pink-600 font-semibold hover:underline"
          href={link}
        >
          View Details →
        </a>
      </div>
    </article>
  );
};

export default index;

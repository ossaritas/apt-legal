import React from 'react';

const Card = ({ image, title, description, buttonLabel, onClick }) => {
  return (
    <div className="overflow-hidden rounded-md bg-yellow-400 shadow-md">
      {/* <img className="h-64 w-full object-cover" src={image} alt={title} /> */}
      <div className="p-4">
        <h2 className="mb-2 text-xl font-bold">{title}</h2>
        <p className="mb-4 text-base text-gray-700">{description}</p>
        <button
          className="rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-600"
          onClick={onClick}
        >
          {buttonLabel}
        </button>
      </div>
    </div>
  );
};

export default Card;

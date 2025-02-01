import React from "react";

const Hero = () => {
  return (
    <div className="h-[75vh] flex">
      <div className="w-3/6 flex flex-col">
        <h1 className="text-6xl font-semibold text-yellow-100">
          Discover Your Next Great Read
        </h1>
        <p className="mt-4 text-xl text-zinc-300">
          Uncover captivating stories, enriching knowledge , and endless
          inspiration in our curated collection of books
        </p>
        <div className="mt-8">
          <button
            className="text-yellow-100
          text-2xl
          font-semibold
          border
          border-yellow-100
          px-10
          py-2
          hover:bg-zinc-800
          rounded-full"
          >
            Discover Books
          </button>
        </div>
      </div>
      <div className="w-3/6"></div>
    </div>
  );
};

export default Hero;

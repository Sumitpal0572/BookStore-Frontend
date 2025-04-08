import axios from "axios";
import React, { useEffect, useState } from "react";
import BookCard from "../Bookcard/bookcard";

const Favourites = () => {
  const [FavouritesBooks, setFavouritesBooks] = useState();
  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`,
  };
  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get(
        "http://localhost:2000/api/v1/get-favourite-books",
        { headers }
      );
      setFavouritesBooks(response.data.data);
    };
    fetch();
  }, [FavouritesBooks]);

  return (
    <>
      {FavouritesBooks && FavouritesBooks.length === 0 && (
        <div className="text=5xl h-[100%] font-semibold text-zinc-500 flex items-center flex-col   justify-center w-full">
          No Favourites Books Available
          <img
            src="https://img.freepik.com/free-vector/premium-quality-banner-design-vector_53876-64085.jpg?ga=GA1.1.1811378810.1716549643&semt=ais_hybrid&w=740"
            alt="/star image"
            className="h-[20vh] my-8"
          />
        </div>
      )}

      <div className="grid grid-cols-4 gap-4">
        {FavouritesBooks &&
          FavouritesBooks.map((items, i) => (
            <div key={i}>
              <BookCard data={items} favourite={true} />
            </div>
          ))}
      </div>
    </>
  );
};

export default Favourites;

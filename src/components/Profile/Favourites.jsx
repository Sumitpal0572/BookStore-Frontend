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
      {FavouritesBooks.length === 0 && (
        <div className="text=5xl font-semibold text-zinc-500 flex items-center justify-center w-full">
          No Favourites Books Available
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

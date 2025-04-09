import React, { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../Loader/Loader";
import { useNavigate, useParams } from "react-router-dom";
import { GrLanguage } from "react-icons/gr";
import { FaHeart, FaShoppingCart, FaEdit } from "react-icons/fa";
import { useSelector } from "react-redux";
import { MdOutlineDelete } from "react-icons/md";

const ViewBookDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [Data, setData] = useState();
  const isloggedIn = useSelector((state) => state.auth.isLoggedIn);
  const role = useSelector((state) => state.auth.role);
  console.log(isloggedIn);
  console.log(role);

  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get(
        `http://localhost:2000/api/v1/get-book-by-id/${id}`
      );
      setData(response.data.data);
    };
    fetch();
  }, []);
  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`,
    bookid: id,
  };
  const handleFavourites = async () => {
    const response = await axios.put(
      "http://localhost:2000/api/v1/add-book-to-fav",
      {},
      { headers }
    );
    alert(response.data.message);
  };

  const handleCart = async () => {
    const response = await axios.put(
      "http://localhost:2000/api/v1/add-to-cart",
      {},
      { headers }
    );
    alert(response.data.message);
  };

  const deleteBook = async () => {
    const response = await axios.delete(
      "http://localhost:2000/api/v1/delete-book",
      { headers }
    );
    alert(response.data.message);
    navigate("/all-books");
  };

  return (
    <>
      {Data && (
        <div className=" px-4 md:px-12 py-8 bg-zinc-900 flex flex-col lg:flex-row gap-8">
          <div className=" rounded  w-full lg:w-3/6 ">
            <div className="flex flex-col lg:flex-row justify-around bg-zinc-800 p-12 rounded">
              {" "}
              <img
                src={Data.url}
                className="h-[50vh] md:h-[60vh] lg:h-[70vh] rounded"
              />
              {isloggedIn === true && role === "user" && (
                <div className="flex  flex-col md:flex-row lg:flex-col items-center justify-between lg:justify-start mt-4 lg:mt-0">
                  <button
                    className="bg-white rounded lg:rounded-full text-3xl p-2 text-red-500 flex  items-center justify-center"
                    onClick={handleFavourites}
                  >
                    <FaHeart />{" "}
                    <span className="ms-4 block lg:hidden">Favourties</span>
                  </button>
                  <button
                    className="text-white rounded mt-8 md:mt-0 lg:rounded-full text-4xl lg:text-3xl p-2  lg:mt-8 bg-blue-500 flexitems-center justify-center "
                    onClick={handleCart}
                  >
                    <FaShoppingCart />{" "}
                    <span className="ms-4 block lg:hidden">Add to cart</span>
                  </button>
                </div>
              )}
              {/* for admin */}
              {isloggedIn === true && role === "admin" && (
                <div className="flex  flex-col md:flex-row lg:flex-col items-center justify-between lg:justify-start mt-4 lg:mt-0">
                  <button className="bg-white rounded lg:rounded-full text-3xl p-2 text-red-500 flex  items-center justify-center  ">
                    <FaEdit />{" "}
                    <span className="ms-4 block lg:hidden">Edit</span>
                  </button>
                  <button
                    className="text-red-500 rounded mt-8 md:mt-0 lg:rounded-full text-3xl p-2  lg:mt-8 bg:white flexitems-center justify-center "
                    onClick={deleteBook}
                  >
                    <MdOutlineDelete />
                    <span className="ms-4 block lg:hidden">Delete Book</span>
                  </button>
                </div>
              )}
            </div>
          </div>
          <div className="p-4 w-full lg:w-3/6">
            <h1 className="text-4xl text-zinc-300 font-semibold">
              {Data.title}
            </h1>
            <p className="text-zinc-400 mt-1">by {Data.author}</p>
            <p className="text-zinc-500 mt-4 tetx-xl">{Data.desc}</p>
            <p className="flex mt-4 items-center justify-start text-zinc-400">
              <GrLanguage className="me-3" /> {Data.language}
            </p>
            <p className="mt-4 text-zinc-100 text-xl font-semibold">
              price : rupees {Data.price}
            </p>
          </div>
        </div>
      )}
      {!Data && (
        <div className="h-screen bg-zinc-900 flex items-center justify-center">
          <Loader />
        </div>
      )}
    </>
  );
};

export default ViewBookDetail;

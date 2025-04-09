import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import Loader from "../components/Loader/Loader";
import { FaUserLarge } from "react-icons/fa6";
const Allorders = () => {
  const [AllOrders, setAllOrders] = useState();
  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`,
  };
  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get(
        "http://localhost:2000/api/v1/get-all-orders",
        { headers }
      );
      setAllOrders(response.data.data);
    };
    fetch();
  }, []);

  return (
    <>
      {!AllOrders && (
        <div className="h-[100%] flex items-center justify-center">
          <Loader />
        </div>
      )}
      {AllOrders && AllOrders.length > 0 && (
        <div className="h-[80vh] p-4 text-zinc-900">
          <h1 className="text-5xl font-semibold text-zinc-400 mb-8">
            No Order History
          </h1>
          <div className="mt-4 w-full text-zinc-500 rounded py-2 px-4 flex gap-2">
            <div className="w-[3%]">
              <h1 className="text-center">Sr.</h1>
            </div>
            <div className="w-[22%]">
              <h1 className="">Books</h1>
            </div>
            <div className="w-[45%]">
              <h1 className="text-center">Description</h1>
            </div>
            <div className="w-[9%]">
              <h1 className="">Price</h1>
            </div>
            <div className="w-[16%]">
              <h1 className="">Status</h1>
            </div>
            <div className="w-none md:w-[5%] hidden md:block">
              <h1 className="">
                <FaUserLarge />
              </h1>
            </div>
          </div>
          {AllOrders.map((items, i) => (
            <div>hello</div>
          ))}
        </div>
      )}
    </>
  );
};

export default Allorders;

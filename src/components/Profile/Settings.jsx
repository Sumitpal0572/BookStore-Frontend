import React, { useState, useEffect } from "react";
import axios from "axios";
import Loader from "../Loader/Loader";
const Settings = () => {
  const [Value, setValue] = useState({ address: "" });
  const [ProfileData, setProfileData] = useState();
  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`,
  };

  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get(
        "http://localhost:2000/api/v1/get-user-information",
        {
          headers,
        }
      );
      setProfileData(response.data);
      setValue({ address: response.data.data });
    };
    fetch();
  }, []);
  return <div>Settings</div>;
};

export default Settings;

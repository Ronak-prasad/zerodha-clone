import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

import Dashboard from "./Dashboard";
import TopBar from "./TopBar";

const Home = () => {
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const verifyCookie = async () => {
      if (!cookies.token) {
        navigate("/login"); // Use internal route
        return;
      }
      try {
        const { data } = await axios.post(
          "http://localhost:3002", // Replace with your real backend URL
          {},
          { withCredentials: true }
        );

        const { status, user } = data;
        setUsername(user);

        if (!status) {
          removeCookie("token");
          navigate("/login");
        } else {
          toast.success(`Hello ${user}`, { position: "top-right" });
        }
      } catch (err) {
        console.log(err);
        navigate("/login");
      }
    };

    verifyCookie();
  }, [cookies, navigate, removeCookie]);

  return (
    <>
      <TopBar />
      <Dashboard />
      <ToastContainer />
    </>
  );
};

export default Home;

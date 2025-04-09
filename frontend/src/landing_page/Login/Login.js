import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

function Login() {
  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });

  const { email, password} = inputValue;

  const handleOnChange = (e) => {
    const {name, value} = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  }
  
  const handleError = (err) => {
    toast.error(err,{position: "bottom-left"})
  };

  const handleSuccess = (msg) => {
    toast.success(msg,{position: "bottom-right"})
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } =await axios.post(
        `${process.env.BACKEND_URL|| "http://localhost:3002"}/login`,
        {
          ...inputValue,
        },
        {withCredentials: true}
      );
      console.log(data);

      const { success, message } = data;

    if (success) {
      handleSuccess(message);

      const redirectURL = window.location.hostname === "localhost"
        ? "http://localhost:3000"
        : "https://zerodhaa-clone-dashboard.vercel.app/";

      setTimeout(() => {
        window.location.href = redirectURL;
      }, 1000);
    } else {
      handleError(message);
    }
    }catch (error) {
      console.log(error);
    }
    setInputValue({
      ...inputValue,
      email:"",
      password:"",

    })
  }

  return (
    <div className="d-flex justify-content-center m-5">
      <form className="border border-4 w-50 rounded p-4" onSubmit={handleSubmit}>
        <h3 className="text-center mt-3">Login Account</h3>

        <div className="form-floating mb-3 mx-5">
          <input 
            type="email" 
            className="form-control" 
            // id="floatingInput" 
            placeholder="Enter your email"
            value={email}
            name="email"
            onChange={handleOnChange}
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>

        <div className="form-floating mx-5">
          <input 
            type="password" 
            className="form-control" 
            // id="floatingPassword" 
            placeholder="Password"
            value={password}
            name="password"
            onChange={handleOnChange}
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>

        <div className="d-flex justify-content-center">
          <button type="submit" className="btn btn-primary mt-3">Submit</button>
        </div>
        <br/>
        <span>
          Don't have an account? <Link to="/signup">Signup</Link>
        </span>
      </form>
      <ToastContainer />
    </div>
  );
}

export default Login;

import React, { useState } from "react";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents page reload
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="d-flex justify-content-center m-5">
      <form className="border border-4 w-50 rounded p-4" onSubmit={handleSubmit}>
        <h3 className="text-center mt-3">Sign Up</h3>

        <div className="form-floating mb-3 mx-5">
          <input 
            type="email" 
            className="form-control" 
            id="floatingInput" 
            placeholder="name@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>

        <div className="form-floating mx-5">
          <input 
            type="password" 
            className="form-control" 
            id="floatingPassword" 
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>

        <div className="d-flex justify-content-center">
          <button type="submit" className="btn btn-primary mt-3">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Signup;

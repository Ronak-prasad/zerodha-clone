import React from "react";

function Hero() {
  return (
    <div className="container mt-5 border-bottom ">
      <div className="text-center">
        <h1>Zerodha Products</h1>
        <h3 className="text-muted mt-3 fs-4">
          Sleek, modern, and intuitive trading platforms
        </h3>
        <p className="mt-3 mb-5">
          Check out our{" "}
          <a href="#" style={{ textDecoration: "none" }}>
            investment offerings →
          </a>
        </p>
      </div>
    </div>
  );
}

export default Hero;

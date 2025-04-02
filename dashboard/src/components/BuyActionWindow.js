import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import "./BuyActionWindow.css"; // ✅ Ensure styles are applied

const BuyActionWindow = ({ uid, refreshOrders }) => {
  const { closeBuyWindow } = useContext(GeneralContext);
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    console.log("BuyActionWindow Rendered!"); // Debugging log
  }, []);

  const handleBuyClick = async () => {
    setIsSubmitting(true);
    try {
      await axios.post("https://zerodha-clone-backend-z8u8.onrender.com/newOrder", {
        name: uid,
        qty: stockQuantity,
        price: stockPrice,
        mode: "BUY",
      });

      refreshOrders(); // ✅ Fetch new orders after placing order
      closeBuyWindow(); // ✅ Ensure state update
    } catch (error) {
      console.error("Error placing order:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="buy-container"> {/* ✅ Changed class for CSS targeting */}
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              value={stockQuantity}
              onChange={(e) => setStockQuantity(Number(e.target.value))}
              disabled={isSubmitting} // ✅ Disable during submission
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              value={stockPrice}
              onChange={(e) => setStockPrice(Number(e.target.value))}
              disabled={isSubmitting} // ✅ Disable during submission
            />
          </fieldset>
        </div>
      </div>
      <div className="buttons">
        <button className="btn btn-blue" onClick={handleBuyClick} disabled={isSubmitting}>
          {isSubmitting ? "Processing..." : "Buy"}
        </button>
        <button className="btn btn-grey" onClick={closeBuyWindow} disabled={isSubmitting}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default BuyActionWindow;

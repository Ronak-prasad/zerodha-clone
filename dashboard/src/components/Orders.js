import React, { useState, useEffect } from "react";
import axios from "axios";

const Orders = () => {
  const [allOrders, setAllOrders] = useState([]);

  const fetchOrders = async () => {
    try {
      const res = await axios.get("https://zerodha-clone-backend-z8u8.onrender.com/newOrder");
      setAllOrders(res.data);
    } catch (err) {
      console.error("Error fetching orders:", err);
    }
  };

  useEffect(() => {
    fetchOrders();
    const interval = setInterval(fetchOrders, 5000); // Fetch every 5s for real-time updates
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="order-table">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Qty</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {allOrders.map((order, index) => (
            <tr key={index}>
              <td>{order.name}</td>
              <td>{order.qty}</td>
              <td>{order.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;

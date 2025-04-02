import React, { useState, useEffect } from "react";
import axios, { all } from "axios";


const Orders = () => {

  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    axios.get("https://zerodha-clone-backend-z8u8.onrender.com/newOrder").then((res) => {
      // console.log(res.data);
      setAllOrders(res.data);
    });
  }, []);
  
  return (
    <div className="order-table">
      <table>
        <tr>
          <th>name</th>
          <th>qty</th>  
          <th>price</th>
        </tr>
        {allOrders.map( (order, index) => {
            return (
              <tr key={index}>
                <td>{order.name}</td>
                <td>{order.qty}</td>
                <td>{order.price}</td>
              </tr>
            );
          })}

      </table>
    </div>
  );
};

export default Orders;

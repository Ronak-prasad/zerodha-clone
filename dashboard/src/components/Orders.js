import React, { useState, useEffect } from "react";
import axios, { all } from "axios";



const order = [
  {
    "name": "iPhone 14 Pro",
    "qty": 2,
    "price": 1099.99,
    "model": "A2890"
  },
  {
    "name": "MacBook Air M2",
    "qty": 1,
    "price": 1299.00,
    "model": "M2-256GB"
  },
  {
    "name": "Samsung Galaxy S23",
    "qty": 3,
    "price": 999.50,
    "model": "SM-S911B"
  },
  {
    "name": "Sony WH-1000XM5",
    "qty": 4,
    "price": 399.99,
    "model": "WH1000XM5"
  },
  {
    "name": "Dell XPS 13",
    "qty": 1,
    "price": 1499.99,
    "model": "9310"
  }
];

const Orders = () => {

  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3002/newOrder").then((res) => {
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
        {allOrders.map( order => {
            return (
              <tr>
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

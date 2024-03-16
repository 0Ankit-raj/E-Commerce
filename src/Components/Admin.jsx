import React, { useState, useEffect } from 'react';
import "./css/Admin.css"; // Import CSS file for styling

function OrdersList() {
  const [orders, setOrders] = useState([]);

  // Mock data (replace with actual data fetching)
  useEffect(() => {
    const fetchOrders = async () => {
      // Example data - replace with your database query
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();

      // Transform data into orders format (replace with actual data transformation)
      const ordersData = data.map(user => ({
        id: user.id,
        customerName: user.name,
        email: user.email,
        address: user.address.street + ', ' + user.address.city + ', ' + user.address.zipcode
      }));

      setOrders(ordersData);
    };

    fetchOrders();
  }, []);

  return (
    <div className="orders-list-container"> {/* Apply CSS class for centering */}
      <h1>Orders List</h1>
      <table className="orders-table"> {/* Apply CSS class for styling */}
        <thead>
          <tr>
            <th>ID</th>
            <th>Customer Name</th>
            <th>Email</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.customerName}</td>
              <td>{order.email}</td>
              <td>{order.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default OrdersList;

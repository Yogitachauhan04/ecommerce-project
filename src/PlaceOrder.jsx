import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./placeorder.css";

const PlaceOrder = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const orderData = location.state; 

  return (
    <div className="place-order-container">
      <h2>Order Placed Successfully!</h2>
     <img src="/success.png" alt="Order Success" className="success-img" />

      <p>Thank you, {orderData?.name || "Customer"}. Your order will be delivered soon.</p>
      <button onClick={() => navigate("/")}>Back to Home</button>
    </div>
  );
};

export default PlaceOrder;

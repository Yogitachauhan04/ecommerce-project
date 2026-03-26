import "./Checkout.css";
import { useSelector } from "react-redux";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.items);
  const addresses = useSelector((state) => state.address.list);

  const [checkoutItems, setCheckoutItems] = useState(cartItems);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    type: "Home",
  });
  const user = JSON.parse(localStorage.getItem("user"));
  const handlePlaceOrder = () => {
  if (!user) {
    alert("Please login first");
    return;
  }

  if (checkoutItems.length === 0) {
    alert("No items in checkout");
    return;
  }

  const orders = JSON.parse(localStorage.getItem("orders")) || [];

  const newOrder = {
    id: Date.now(),
    userEmail: user.email,
    items: checkoutItems,
    address: formData,
    total: subtotal,
    status: "placed",
    date: new Date().toLocaleDateString(),
  };

  orders.push(newOrder);
  localStorage.setItem("orders", JSON.stringify(orders));

  navigate("/Placeorder", {
    state: { orderId: newOrder.id },
  });
};

  useEffect(() => {
    const defaultAddr = addresses.find((a) => a.isDefault);
    if (defaultAddr) {
      setFormData((prev) => ({
        ...prev,
        name: defaultAddr.name || "",
        phone: defaultAddr.phone || "",
        address: defaultAddr.address || "",
        type: defaultAddr.type || "Home",
      }));
    }
  }, [addresses]);

  const handleRemove = (id) => {
    setCheckoutItems(checkoutItems.filter((item) => item.id !== id));
  };

  const subtotal = checkoutItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  return (
    <div className="checkout-wrapper">

      {/* BILLING FORM */}
      <div className="billing">
        <h2>Billing Details</h2>
        <input
          type="text"
          placeholder="Name *"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Phone *"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        />
        <input
          type="text"
          placeholder="Address *"
          value={formData.address}
          onChange={(e) =>
            setFormData({ ...formData, address: e.target.value })
          }
        />
        <select
          value={formData.type}
          onChange={(e) => setFormData({ ...formData, type: e.target.value })}
        >
          <option value="Home">Home</option>
          <option value="Work">Work</option>
        </select>
      </div>

      {/* ORDER SUMMARY */}
      <div className="order-summary">
       
        {checkoutItems.length === 0 && <p>No items in checkout.</p>}
        {checkoutItems.map((item) => (
          <div key={item.id} className="checkout-item">
            <div className="item-left">
              <img
                src={item.images[0]}
                alt={item.name}
                onClick={() => navigate(`/product/${item.id}`)}
              />
              <div className="item-info">
                <p onClick={() => navigate(`/product/${item.id}`)}>
                  {item.name}
                </p>
                <small>Qty: {item.qty}</small>
              </div>
            </div>
            <div className="item-right">
              <span>${item.price * item.qty}</span>
              <button onClick={() => handleRemove(item.id)}>✖</button>
            </div>
          </div>
        ))}

        {/* SUMMARY */}
        <div className="summary">
          <div>
            <span>Subtotal:</span>
            <span>${subtotal}</span>
          </div>
          <div>
            <span>Shipping:</span>
            <span>Free</span>
          </div>
          <div className="total">
            <span>Total:</span>
            <span>${subtotal}</span>
          </div>
        </div>

    <button className="place-order" onClick={handlePlaceOrder}>
  Place Order
</button>

      </div>
    </div>
  );
};

export default Checkout;



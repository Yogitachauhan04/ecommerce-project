import { useParams } from "react-router-dom";
import "./Orders.css";

const OrderDetail = () => {
  const { id } = useParams();
  const orders = JSON.parse(localStorage.getItem("orders")) || [];

  const order = orders.find(
    (o) => o.id.toString() === id
  );

  if (!order) return <p>Order not found</p>;

  return (
    <div className="orders-page">
      <h2>Order Details</h2>

      <p><b>Order ID:</b> {order.id}</p>
      <p><b>Status:</b> {order.status}</p>
      <p><b>Date:</b> {order.date}</p>
      <p><b>Total:</b> ₹{order.total}</p>

      <h3>Items</h3>

      {order.items.map((item) => (
        <div key={item.id} className="order-body">
          <img src={item.images[0]} alt={item.name} />
          <div>
            <h4>{item.name}</h4>
            <p>Qty: {item.qty}</p>
            <p>Price: ₹{item.price}</p>
          </div>
        </div>
      ))}

      <h3>Delivery Address</h3>
      <p>{order.address.name}</p>
      <p>{order.address.phone}</p>
      <p>{order.address.address}</p>
    </div>
  );
};

export default OrderDetail;


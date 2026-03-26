import "./Orders.css";
import { useNavigate } from "react-router-dom";

const MyOrders = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const orders = JSON.parse(localStorage.getItem("orders")) || [];

  const myOrders = orders.filter(
    (o) => o.userEmail === user?.email
  );

  const handleCancelItem = (orderId, item) => {
    let updatedOrders = [...orders];

    // find order
    const orderIndex = updatedOrders.findIndex(o => o.id === orderId);
    if (orderIndex === -1) return;

    // remove item from order
    updatedOrders[orderIndex].items =
      updatedOrders[orderIndex].items.filter(i => i.id !== item.id);

    // if no items left → remove order
    if (updatedOrders[orderIndex].items.length === 0) {
      updatedOrders.splice(orderIndex, 1);
    }

    localStorage.setItem("orders", JSON.stringify(updatedOrders));

    // save cancellation
    const cancellations =
      JSON.parse(localStorage.getItem("cancellations")) || [];

    cancellations.push({
      id: orderId,
      userEmail: user.email,
      items: [item],
      total: item.price * item.qty,
      cancelledDate: new Date().toLocaleDateString(),
    });

    localStorage.setItem("cancellations", JSON.stringify(cancellations));

    window.location.reload();
  };

  return (
    <div className="orders-page">
      <h2>My Orders</h2>

      {myOrders.length === 0 ? (
        <p>No orders yet</p>
      ) : (
        myOrders.map((o) => (
          <div key={o.id} className="order-card">

            {/* TOP */}
            <div className="order-top">
              <span>Order ID: #{o.id}</span>
              <span className="status placed">Placed</span>
            </div>

            {/* ITEMS */}
            {o.items.map((item) => (
              <div key={item.id} className="order-body">
                <img src={item.images[0]} alt={item.name} />

                <div className="order-info">
                  <h4>{item.name}</h4>
                  <p>Qty: {item.qty}</p>
                  <p>₹{item.price * item.qty}</p>
                  <p className="date">Ordered on: {o.date}</p>

                  <div className="item-actions">
                    <button
                      className="view-btn1"
                      onClick={() =>
                        navigate(`/account/orders/${o.id}`)
                      }
                    >
                      View Details
                    </button>

                    <button
                      className="cancel-btn"
                      onClick={() =>
                        handleCancelItem(o.id, item)
                      }
                    >
                      Cancel Item
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))
      )}
    </div>
  );
};

export default MyOrders;





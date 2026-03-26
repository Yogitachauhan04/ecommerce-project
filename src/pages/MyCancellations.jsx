import "./Orders.css";

const MyCancellations = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const cancellations =
    JSON.parse(localStorage.getItem("cancellations")) || [];

  const myCancellations = cancellations.filter(
    (o) => o.userEmail === user?.email
  );

  return (
    <div className="orders-page">
      <h2>Cancelled Orders</h2>

      {myCancellations.length === 0 ? (
        <p>No cancelled orders</p>
      ) : (
        myCancellations.map((order) => (
          <div key={order.id} className="order-card cancelled">
            
            {/* TOP */}
            <div className="order-top">
              <span>Order ID: #{order.id}</span>
              <span className="status cancelled">Cancelled</span>
            </div>

            {/* ITEMS */}
            {order.items.map((item) => (
              <div key={item.id} className="order-body">
                <img
                  src={item.images[0]}
                  alt={item.name}
                />

                <div className="order-info">
                  <h4>{item.name}</h4>
                  <p>Qty: {item.qty}</p>
                  <p>Total: ₹{item.price * item.qty}</p>
                  <p className="date">
                    Cancelled on: {order.cancelledDate}
                  </p>
                </div>
              </div>
            ))}

            {/* REFUND INFO */}
            <p className="refund-text">
              Refund will be processed within 3–5 working days
            </p>
          </div>
        ))
      )}
    </div>
  );
};

export default MyCancellations;



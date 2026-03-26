import { useState } from "react";
import "./AddressPayment.css";

const Paymentoption = () => {
  const [methods, setMethods] = useState([
    {
      id: 1,
      type: "Card",
      cardName: "Visa",
      last4: "4556",
      isDefault: true,
    },
    {
      id: 2,
      type: "UPI",
      upi: "yogita@upi",
      isDefault: false,
    },
  ]);

  return (
    <div className="pay-wrapper">
      <div className="pay-header">
        <h2>Payment Options</h2>
        <button className="primary-btn">Add Payment Method</button>
      </div>

      <div className="pay-grid">
        {methods.map((m) => (
          <div className="pay-card" key={m.id}>
            <div className="pay-top">
              <span className="tag">{m.isDefault ? "Default" : "Saved"}</span>

              <div className="actions">
                <button>Edit</button>
                <button className="danger">Remove</button>
              </div>
            </div>

            {m.type === "Card" && (
              <>
                <p className="title">{m.cardName} Card</p>
                <p>**** **** **** {m.last4}</p>
              </>
            )}

            {m.type === "UPI" && (
              <>
                <p className="title">UPI</p>
                <p>{m.upi}</p>
              </>
            )}

            <button className="outline-btn1">
              Set as Default
            </button>
          </div>
        ))}

        {/* Cash on Delivery */}
        <div className="pay-card cod-card">
          <p className="title">Cash on Delivery (COD)</p>
          <p className="sub">
            Pay when your order is delivered.
          </p>
          <button className="primary-btn small">Select COD</button>
        </div>
      </div>
    </div>
  );
};

export default Paymentoption;

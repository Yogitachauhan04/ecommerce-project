import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, updateQuantity } from "./store/cartSlice";
import "./Addtocart.css";
import { useNavigate } from "react-router-dom";

const AddToCart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const cart = useSelector((state) => state.cart.items);

  const updateQty = (id, value) => {
    const qty = Number(value);
    if (qty > 0) {
      dispatch(updateQuantity({ id, quantity: qty }));
    }
  };

  const removeItem = (id) => {
    dispatch(removeFromCart(id));
  };

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="cart-page">
      <div className="cart-content">
        {/* LEFT SIDE */}
        <div className="cart-left">
          <div className="cart-header">
            <span>Product</span>
            <span>Price</span>
            <span>Quantity</span>
            <span>Subtotal</span>
          </div>

          {cart.map((item) => (
            <div className="cart-item" key={item.id}>
              <div className="product">
                <button
                  className="remove"
                  onClick={() => removeItem(item.id)}
                >
                  ✕
                </button>
                <img src={item.images[0]} alt="" />
                <span>{item.name}</span>
              </div>

              <span>${item.price}</span>

              <input
                type="number"
                min="1"
                value={item.qty}
                onChange={(e) => updateQty(item.id, e.target.value)}
              />

              <span>${item.price * item.qty}</span>
            </div>
          ))}

          <div className="cart-actions">
            <button className="outline-btn" onClick={() => navigate("/")}>
              Return To Shop
            </button>
            <button className="outline-btn">Update Cart</button>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="cart-right">
          {/* Coupon */}
          <div className="coupon coupon-box">
            <input type="text" placeholder="Coupon Code" />
            <button className="red-btn">Apply Coupon</button>
          </div>

          {/* Cart Total */}
          <div className="cart-total">
            <h3>Cart Total</h3>
            <div>
              <span>Subtotal:</span>
              <span>${subtotal}</span>
            </div>
            <div>
              <span>Shipping:</span>
              <span>Free</span>
            </div>
            <hr />
            <div className="total">
              <span>Total:</span>
              <span>${subtotal}</span>
            </div>
         <button className="red-btn-full" disabled={cart.length === 0}
         onClick={() => navigate("/checkout")}>
            Proceed to checkout
           </button>

          {cart.length === 0 && (
          <p className="empty-cart-text">
               🛒 No items in cart
              </p>
                  )}

          </div>
        </div>
      </div>
    </div>
  );
};

export default AddToCart;

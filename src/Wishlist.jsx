import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "./store/cartSlice";
import { addToWishlist, removeFromWishlist } from "./store/wishlistSlice";
import "./Addtocart.css";
import { toast } from "react-toastify";

const Wishlist = () => {
  const dispatch = useDispatch();
  const wishlist = useSelector(state => state.wishlist.items);
  const cartItems = useSelector(state => state.cart.items);

  const handleDelete = (id) => {
    dispatch(removeFromWishlist(id));
  };
  const moveAllToBag = () => {
    wishlist.forEach(item => {
      const existing = cartItems.find(c => c.id === item.id);

      dispatch(
        addToCart({
          ...item,
          qty: existing ? existing.qty + 1 : 1
        })
      );
    });

    toast.success("🛒 All wishlist items moved to cart!");
  };
  return (
    <div className="wishlist-page">
      <div className="wishlist-top">
        <h2>Wishlist ({wishlist.length})</h2>
        <button className="outline-btn" onClick={moveAllToBag}>
        Move All To Bag
      </button>
      </div>

      <div className="wishlist-grid">
        {wishlist.map((item) => (
          <div className="wishlist-card" key={item.id}>
            {item.discount && <span className="badge">{item.discount}</span>}

            <button className="delete-btn" onClick={() => handleDelete(item.id)}>✖</button>

            <img src={item.images[0]} alt={item.name} />

          <button className="add-cart-btn1" onClick={() => {   dispatch(  addToCart({
           id: item.id,
          name: item.name,
          price: item.price,
          images: ["/" + item.image],
          qty: 1
          })
           );
           toast.success("🛒 Add to Cart Successfully!");
         }}> 🛒 Add To Cart</button>
            <h4>{item.name}</h4>

            <div className="price">
              <span className="new">${item.price}</span>
              {item.oldprice && <span className="old">${item.oldprice}</span>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;





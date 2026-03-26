import { useParams, useNavigate, useLocation } from "react-router-dom";
import {
  FaHeart,
  FaEye,
  FaShoppingCart,
  FaStar,
  FaRegStar
} from "react-icons/fa";

import products from "../data/products";
import "./shop.css";

import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../store/cartSlice";
import { addToWishlist, removeFromWishlist } from "../store/wishlistSlice";
import { toast } from "react-toastify";

const Shop = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const isLogin = useSelector((state) => state.auth.isLogin);
  const wishlist = useSelector((state) => state.wishlist.items);

  const { category } = useParams();

  // 🔍 SEARCH QUERY (URL se)
  const searchQuery =
    category === "search"
      ? new URLSearchParams(location.search).get("query")
      : "";

  // ❤️ Wishlist handler
  const handleHeartClick = (product) => {
    if (!isLogin) {
      toast.error("Please login to use wishlist ❤️");
      navigate("/login");
      return;
    }

    const exists = wishlist.find((i) => i.id === product.id);

    if (exists) {
      dispatch(removeFromWishlist(product.id));
      toast.info("Removed from wishlist");
    } else {
      dispatch(addToWishlist(product));
      toast.success("Added to wishlist ❤️");
    }
  };

  // 🧠 FILTER LOGIC (CATEGORY + SEARCH)
  let filteredProducts = [];

  if (searchQuery) {
    // SEARCH MODE
   filteredProducts = products.filter((item) => {
  const query = searchQuery.toLowerCase();

  return (
    item.name?.toLowerCase().includes(query) ||
    item.category?.toLowerCase().includes(query)
  );
});

  } else if (category === "all") {
    filteredProducts = products;
  } else {
    filteredProducts = products.filter(
      (item) => item.category === category
    );
  }
 
  return (
    <div className="shop1">
      {/* Back Home */}
      <button className="back-home" onClick={() => navigate("/")}>
        ← Back Home
      </button>

      <h2 className="shop-title">
        {searchQuery
          ? `Search Results for "${searchQuery}"`
          : category.toUpperCase()}
      </h2>

      <div className="product-grid1">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((item) => (
            <div key={item.id} className="product-card1">
              {/* Discount */}
              {item.discount && (
                <span className="discount-badge">{item.discount}</span>
              )}

              {/* Icons */}
              <div className="iconn-box">
                <button
                  className={`heart-btn ${
                    wishlist.find((i) => i.id === item.id) ? "active" : ""
                  }`}
                  onClick={() => handleHeartClick(item)}
                >
                  <FaHeart />
                </button>

                <FaEye
                  className="iconn"
                  onClick={() => navigate(`/product/${item.id}`)}
                />
              </div>

              <img src={item.images[0]} alt={item.name} />

              <h4>{item.name}</h4>

              <div className="price">
                ₹{item.price}
                {item.oldprice && <span>₹{item.oldprice}</span>}
              </div>

              {/* ⭐ Rating */}
              <div className="rating">
                {[...Array(5)].map((_, i) =>
                  i < Math.round(item.rating) ? (
                    <FaStar key={i} className="star filled" />
                  ) : (
                    <FaRegStar key={i} className="star" />
                  )
                )}
              </div>

              <button
                className="addbtn"
                onClick={() => {
                  if (!isLogin) {
                    toast.error("Please login to add product 🛒");
                    navigate("/login");
                    return;
                  }
                  dispatch(addToCart(item));
                  toast.success("🛒 Add to Cart Successfully!");
                }}
              >
                <FaShoppingCart /> Add to Cart
              </button>
            </div>
          ))
        ) : (
          <p className="no-result">No products found 😔</p>
        )}
      </div>
    </div>
  );
};

export default Shop;



import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import bestSelling from "./Bestselling.json";
import ourProduct from "./Ourproduct.json";
import flashSale from "./flashsale.json";
import { FaStar, FaShoppingCart, FaHeart } from "react-icons/fa";
import "./Productdetail.css";
import products from "./data/products.js";
import { useDispatch } from "react-redux";
import { addToCart } from "./store/cartSlice";
import {  useSelector } from "react-redux";
import { addToWishlist, removeFromWishlist } from "./store/wishlistSlice";
import { toast } from "react-toastify";



const ProductDetail = () => {
  const dispatch = useDispatch();
  const [qty, setQty] = useState(1);

   const isLogin = useSelector((state) => state.auth.isLogin);
   const wishlist = useSelector(state => state.wishlist.items);
 const handleHeartClick = (product) => {

  if (!isLogin) {
    toast.error("Please login to use wishlist ❤️");
    navigate("/login");
    return;
  }

  const exists = wishlist.find(i => i.id === product.id);

  if (exists) {
    dispatch(removeFromWishlist(product.id));
    toast.info("Removed from wishlist");
  } else {
    dispatch(addToWishlist(product));
    toast.success("Added to wishlist ❤️");
  }
};


  const { id } = useParams();
  const navigate = useNavigate();

  const allProducts = [...bestSelling, ...ourProduct, ...flashSale, ...products];
  const product = allProducts.find(p => p.id === Number(id));

  if (!product) return <h2>Product not found</h2>;

  const images = Array.isArray(product.images)
    ? product.images
    : [product.images];

  const [mainImg, setMainImg] = useState(images[0]);

  useEffect(() => {
    setMainImg(images[0]);
  }, [id]);

  return (
    <div className="product-detail-wrapper1">

      <button className="back-btn1" onClick={() => navigate(-1)}>
        ← Back to Home
      </button>

      <div className="product-detail1">

        {/* LEFT IMAGE SECTION */}
        <div className="detail-left1">
          <div className="thumbs1">
            {images.map((img, i) => (
              <img key={i} src={img} onClick={() => setMainImg(img)} />
            ))}
          </div>

          <img className="main-img1" src={mainImg} alt={product.name} />
        </div>

        {/* RIGHT DETAILS */}
        <div className="detail-right1">

          <h2>{product.name}</h2>

          <div className="rating1">
            {[...Array(5)].map((_, i) => <FaStar key={i} />)}
            <span>({product.rating})</span>
          </div>

          <p className="price1">
            ${product.price}
            <span className="oldprice1">₹{product.oldprice}</span>
          </p>

          <p className="desc1">{product.description}</p>

          {/* OFFERS */}
          <div className="offers1">
            <h4>Available Offers</h4>
            <ul>
              <li>🏷️ Bank Offer: 10% off on Cards</li>
              <li>🏷️ Special Price: Extra ₹500 off</li>
              <li>🏷️ No Cost EMI Available</li>
            </ul>
          </div>

          {/* WARRANTY */}
          <p className="warranty1">✔ 1 Year Manufacturer Warranty</p>

          {/* DELIVERY */}
          <div className="delivery1">
            <h4>Delivery</h4>
            <div className="pincode-box1">
              <input type="text" placeholder="Enter Pincode" />
              <button>Check</button>
            </div>
            <p className="delivery-info1">🚚 Free delivery in 2–4 days</p>
          </div>

          {/* COLORS */}
          <div className="colors1">
            {product.colors?.map((c, i) => (
              <span key={i} style={{ background: c }} />
            ))}
          </div>

          {/* SIZES */}
          <div className="sizes1">
            {product.sizes?.map(s => (
              <button key={s}>{s}</button>
            ))}
          </div>
          <div className="quantity-selector">
         <button onClick={() => setQty(qty > 1 ? qty - 1 : 1)}>-</button>
        <span>{qty}</span>
        <button onClick={() => setQty(qty + 1)}>+</button>
          </div>

          {/* ACTIONS */}
          <div className="actions1">
            <button className="cart-btn2"onClick={() => {

        if (!isLogin) {
      toast.error("Please login to add product 🛒");
      navigate("/login");
      return;
    }
       dispatch(
         addToCart({
         id: product.id,
         name: product.name,
         price: product.price,
          images: images,
         qty: 1
             })
           );

           toast.success("🛒 Add to Cart Successfully!");
            }}>
          <FaShoppingCart /> Add to Cart
        </button>

          <button
            className={`wish-btn1 ${wishlist.find(i => i.id === product.id) ? 'active' : ''}`}
            onClick={() => handleHeartClick(product)}>
          <FaHeart /></button>

        </div>
        <button className="buy-btn1" onClick={() => {
            if (!isLogin) {
         toast.error("Please login to continue ⚡");
          navigate("/login");
         return;
         }
       dispatch(
        addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        images: images,
        qty: qty
        })
        );
       navigate("/checkout");  }}>
         ⚡ Buy Now
        </button>

          {/* SELLER */}
          <div className="seller1">
            <p><strong>Seller:</strong> RetailNet</p>
            <p>✔ 7 Days Replacement</p>
            <p>✔ Cash on Delivery</p>
          </div>

          {/* PAYMENTS */}
          <div className="payments1">
            <span>💳 Visa</span>
            <span>📱 UPI</span>
            <span>🚚 COD</span>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProductDetail;





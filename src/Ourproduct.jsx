import React, { useState, useEffect, useRef} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import data from "./Ourproduct.json";
import { FaHeart, FaEye, FaShoppingCart, FaStar,FaRegStar } from "react-icons/fa";
import "./Ourproduct.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./store/cartSlice";
import { addToWishlist, removeFromWishlist } from "./store/wishlistSlice";
import { toast } from "react-toastify";

const Ourproduct = () => {
  const dispatch = useDispatch();
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
  const navigate = useNavigate();
  const [showAll, setShowAll] = useState(false);
  const [product, setProduct] = useState([]);
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  useEffect(() => {
    setProduct(data);
  }, []);
 
  return (
    <div className="ourproduct">
                <div className="ourproduct-header">
                    <p className="label">Our products</p>
                    <h2>Explore Our Product</h2>
                </div>
          
            <div className={`ourproduct-container ${showAll ? "hidden" : "visible"}`}>
        <Slider ref={sliderRef}{...settings}>
          {product.map((item) => (
            <div key={item.id} className="ourproduct-slide">
              <div className="ourproduct-card">
              <div className="productimage-container">
                <span className="discount">{item.discount}</span>

                <div className="icons">
                 <button  className={`heart-btn ${wishlist.find(i => i.id === item.id) ? 'active' : ''}`}
                 onClick={() => handleHeartClick(item)}> <FaHeart />
                </button>
                
                <i className="fa-regular fa-eye"
                onClick={() => navigate(`/product/${item.id}`)} ></i>

                </div>
                 <Link to={`/product/${item.id}`}>
                    <img src={item.images[0] || item.image} alt={item.name} className="ourproduct-image"/>
                 </Link>
             </div>
               <div className="ourproduct-content">
              <h3>{item.name}</h3>
              <p>
                ${item.price}{" "}
                <span className="oldprice">${item.oldprice}</span>
              </p>
                  <div className="rating">
                               {[...Array(5)].map((_, i) =>
                                    i < Math.round(item.rating) ? (
                                        <FaStar key={i} className="star filled" />
                                      ) : (
                                   <FaRegStar key={i} className="star" />
                                     ) )}
                                </div>
            
           <button className="addbtn" onClick={() => {
          
    if (!isLogin) {
      toast.error("Please login to add product 🛒");
      navigate("/login");
      return;
     }
         dispatch(addToCart(item));
         toast.success("🛒 Add to Cart Successfully!");
          }}> <FaShoppingCart/>Add to Cart</button>
             
              </div>
              </div>
               </div>
             ))}
           </Slider>
        
           {!showAll &&(
            <div className="view-btn">
              <button onClick={()=> setShowAll(true)}>
                view All 
              </button>
            </div>
          
           )}
             <div className="section1"></div>
           </div> 
           
           
             <div className={`showall-wrapper ${showAll ? "visible" : "hidden"}`}>
            <button className="close-button" onClick={() => setShowAll(false)}>
               ✖
            </button>
            <div className="ourproduct-grid">
            {product.map((item) => (
            <div key={item.id} className="ourproduct-slide">
              <div className="ourproduct-card">
              <div className="productimage-container">
                <span className="discount">{item.discount}</span>

                <div className="icons">
                 <button className={`heart-btn ${wishlist.find(i => i.id === item.id) ? 'active' : ''}`}
                 onClick={() => handleHeartClick(item)}>
                 <FaHeart />
                </button>

                 <i
                className="fa-regular fa-eye"
                onClick={() => navigate(`/product/${item.id}`)}></i>
                 
                </div>
                 <Link to={`/product/${item.id}`}>
              <img src={item.images[0] || item.image} alt={item.name} className="ourproduct-image"/>
              </Link>
             </div>
               <div className="ourproduct-content">
              <h3>{item.name}</h3>
              <p>
                ${item.price}{" "}
                <span className="oldprice">${item.oldprice}</span>
              </p>
                   <div className="rating">
                                {[...Array(5)].map((_, i) =>
                                     i < Math.round(item.rating) ? (
                                         <FaStar key={i} className="star filled" />
                                       ) : (
                                    <FaRegStar key={i} className="star" />
                                      ) )}
                                 </div>
              <button className="addbtn"onClick={() => {
           
             if (!isLogin) {
              toast.error("Please login to add product 🛒");
             navigate("/login");
              return;
              }
               dispatch(addToCart(item));
              toast.success("🛒 Add to Cart Successfully!");
                }}>

                <FaShoppingCart/>Add to Cart</button>
              </div>
              </div>
              </div>
              
          ))}
          </div>
          </div>
        </div>
    );
};


export default Ourproduct;


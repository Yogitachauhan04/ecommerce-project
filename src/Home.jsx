import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import flashsale from "./flashsale.json"; 
import "./Flashsale.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Categories from "./Categories";
import Bestselling from "./Bestselling.jsx";
import { FaShoppingCart, FaStar ,FaHeart,FaRegStar } from "react-icons/fa";
import './index.css';
import Ourproduct from "./Ourproduct.jsx";
import Newarrival from "./Newarrival.jsx";
import { useNavigate } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { addToCart} from "./store/cartSlice";
import { addToWishlist, removeFromWishlist } from "./store/wishlistSlice";
import { toast } from "react-toastify";


function Home() {
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
 const bannerImages = [
      "/Banner2.svg",
      "/beauty1.svg.png",
      "/kids.png",
      "/women.png"
    ];
 
  const bannerSetting ={
      dots:true,
      infinite:true,
      speed:800,
      slidesToScroll: 1,
      slidesToShow: 1,
      autoplay: true,
      autoplaySpeed: 2500,
      arrows: false,
      pauseOnHover: false,
       responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 1} },
      { breakpoint: 480, settings: { slidesToShow: 1 } }
    ]
  };
  const [time, setTime] = useState({
    days: 3,
    hours: 23,
    minutes: 19,
    seconds: 56
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(prev => {
        let { days, hours, minutes, seconds } = prev;

        if (seconds > 0) seconds--;
        else {
          seconds = 59;
          if (minutes > 0) minutes--;
          else {
            minutes = 59;
            if (hours > 0) hours--;
            else {
              hours = 23;
              if (days > 0) days--;
            }
          }
        }
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const [showAll, setShowAll] = useState(false);
  const [product, setProduct] = useState([]);
  
  const sliderRef = useRef(null);

  useEffect(() => {
    setProduct(flashsale);
  }, []);

    const settings = {
    dots: true,
     infinite: true,
     speed: 500,
     slidesToShow: 4,
     slidesToScroll: 1,
      arrows:true,
      responsive: [
      { breakpoint: 1000, settings: { slidesToShow: 3, arrows: true} },
      { breakpoint: 768, settings: { slidesToShow: 2 ,arrows: false} },
      { breakpoint: 480, settings: { slidesToShow: 1 ,arrows: false} }
    ]
  };
  
  return (
    <>
      {/* ---------------- HOME + SIDEBAR ---------------- */}
      <div className="homecontainer">
        <div className="sidebar">
  <ul>
    <li>
      <Link to="/shop/women" className="side-link">
        <i className="fa-solid fa-person-dress"></i>
        <span>Women's Fashion</span>
      </Link>
    </li>

    <li>
      <Link to="/shop/men" className="side-link">
        <i className="fa-solid fa-person"></i>
        <span>Men's Fashion</span>
      </Link>
    </li>

    <li>
      <Link to="/shop/electronic" className="side-link">
        <i className="fa-solid fa-mobile-screen"></i>
        <span>Electronics</span>
      </Link>
    </li>

    <li>
      <Link to="/shop/lifestyle" className="side-link">
        <i className="fa-solid fa-couch"></i>
        <span>Home & Lifestyle</span>
      </Link>
    </li>

    <li>
      <Link to="/shop/medicine" className="side-link">
        <i className="fa-solid fa-capsules"></i>
        <span>Medicine</span>
      </Link>
    </li>

    <li>
      <Link to="/shop/sports" className="side-link">
        <i className="fa-solid fa-football"></i>
        <span>Sports & Outdoor</span>
      </Link>
    </li>

    <li>
      <Link to="/shop/babytoy" className="side-link">
        <i className="fa-solid fa-baby"></i>
        <span>Baby & Toys</span>
      </Link>
    </li>

    <li>
      <Link to="/shop/groceries" className="side-link">
        <i className="fa-solid fa-basket-shopping"></i>
        <span>Groceries & Pets</span>
      </Link>
    </li>

    <li>
      <Link to="/shop/health" className="side-link">
        <i className="fa-solid fa-heart-pulse"></i>
        <span>Health & Beauty</span>
      </Link>
    </li>
    <li>
       <Link to="/shop/all" className="side-link">
        <i className="fa-solid fa-heart-pulse"></i>
        <span>All</span>
           </Link>
    </li>
  </ul>
</div>
        <div className="mainbox">
          <div className="banner-container1">
          <Slider {...bannerSetting}>

  {/* Slide 1 — Main Banner */}
  <div className="banner-slide">
    <img src="/Banner2.svg" className="banner-image" />
    <div className="banner-text">
      <h1>Get Upto 10% OFF</h1>
      <p>Use Code: SHOP10</p>
      <button>Shop Now</button>
    </div>
  </div>

  {/* Slide 2 — Women Gown */}
  <div className="banner-slide">
    <img src="/women.png" className="banner-image" />
    <div className="banner-text">
      <h1>New Arrival Gowns</h1>
      <p>Trendy • Stylish • Premium</p>
      <button>Explore Women's & Men's Fashion</button>
    </div>
  </div>

  {/* Slide 3 — beauty */}
  <div className="banner-slide">
    <img src="/beauty1.svg.png" className="banner-image" />
    <div className="banner-text">
      <h1>Beauty sale</h1>
      <p>Get up to 50% off on beauty product </p>
      <button>Shop Beauty Product</button>
    </div>
  </div>

  {/* Slide 4 — Kids */}
  <div className="banner-slide">
    <img src="/kids.png" className="banner-image" />
    <div className="banner-text">
      <h1>Kids Fashion 2025</h1>
      <p>Super Cute • Super Stylish</p>
      <button>Shop Kids</button>
    </div>
  </div>

</Slider>
          </div>
        </div>

      </div>
      {/* ---------------- HOME CLOSED ---------------- */}

      {/* ---------------- FLASH HEADER ---------------- */}
      <div className="flash-header">
        <div className="flashhead">
          <p className="label">Today's </p>
          <h2>Flash Sales</h2>
        </div>

        <div className="timer">
          <div className="timing">
          <p>Days</p>
          <span>{time.days}</span>
          </div>
          <div className="colon">:</div>
          <div className="timing">
          <p>Hours</p>
          <span>{time.hours}</span>
          </div>
          <div className="colon">:</div>
          <div className="timing">
          <p>Min</p>
          <span>{time.minutes}</span>
          </div>
           <div className="colon">:</div>
           <div className="timing">
          <p>sec</p>
          <span>{time.seconds}</span>
          </div>
        </div>
      </div>


      {/* ---------------- FLASH SLIDER ---------------- */}
      
        
        <div className={`flashsale-container ${showAll ? "hidden" : "visible"}`}>

          <Slider ref={sliderRef} {...settings}>
            {product.map(item => (
              <div key={item.id} className="flashsale-slide">
                 <div className="flashsale-card">

                <div className="image-container">
                  <span className="discount">{item.discount}</span>

                   <div className="icons">

                          <button
                          className={`heart-btn ${wishlist.find(i => i.id === item.id) ? 'active' : ''}`}
                   onClick={() => handleHeartClick(item)}
                 >
                   <FaHeart />
                 </button>

                  <i
                className="fa-regular fa-eye"
                onClick={() => navigate(`/product/${item.id}`)}
                 ></i>
                </div>

                <Link to={`/product/${item.id}`}>
                  <img src={item.images[0] || item.image} 
                  alt={item.name} className="flashsale-image" />
                </Link>
                </div>

                <div className="flashsale-content">
                  <h3>{item.name}</h3>

                  <p>
                    ${item.price}
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
            <button onClick={() => setShowAll(true)}>
              View All Products
            </button>
          </div>
      )}
          <div className="section1"></div>
        </div>
    
      {/* ---------------- GRID VIEW ---------------- */}
    
        <div className={`showall-wrapper ${showAll ? "visible" : "hidden"}`}>
            <button className="close-button" onClick={() => setShowAll(false)}>
               ✖
            </button>
        <div className="flashsale-grid">

          {product.map(item => (
            <div key={item.id} className="flashsale-slide">
               <div className="flashsale-card">

              <div className="image-container">
                <span className="discount">{item.discount}</span>

                 <div className="icons">

                        <button
                        className={`heart-btn ${wishlist.find(i => i.id === item.id) ? 'active' : ''}`}
                 onClick={() => handleHeartClick(item)}
               >
                 <FaHeart />
               </button>
                   
                  <i className="fa-regular fa-eye"
                onClick={() => navigate(`/product/${item.id}`)} ></i>

                </div>
                <Link to={`/product/${item.id}`}>
                <img src={item.images[0] || item.image} alt={item.name} className="flashsale-image" />
                </Link>
              </div>

              <div className="flashsale-content">
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

        </div>
        </div>

      {/* ---------------- CATEGORIES + BESTSELLING ---------------- */}
      <Categories />
      <Bestselling />
      <Ourproduct/>
      <Newarrival/>
    </>
  );
}

export default Home;
import { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate
} from 'react-router-dom';
import Apitest from './api/apitest.jsx';
import { Provider, useSelector, useDispatch } from "react-redux";
import store from "./store/store";
import { logout } from "./store/authSlice";
import Home from './Home.jsx';
import Contact from './Contact.jsx';
import About from './About.jsx';
import SignUp from './SignUp.jsx';
import Login from './Login.jsx';
import Footer from './Footer.jsx';
import Shop from './pages/Shop';
import Wishlist from './Wishlist.jsx';
import Addtocart from './Addtocart.jsx';
import ProductDetail from './ProductDetail.jsx';
import Checkout from './Checkout.jsx';

import AccountLayout from "./pages/AccountLayout";
import Account from "./pages/Account";
import MyOrders from "./pages/MyOrders";
import MyCancellations from "./pages/MyCancellations";
import Addressbook from './pages/Addressbook.jsx';
import Orderdetail from './pages/Orderdetail.jsx';
import Paymentoption from './pages/Paymentoption.jsx';
import Placeorder from  './PlaceOrder.jsx';

import './index.css';
import {
  FaHeart,
  FaSearch,
  FaUserCircle,
  FaShoppingCart
} from 'react-icons/fa';

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import PrivateRoute from "./components/PrivateRoute";
import flashsale from "./flashsale.json";
import ourproduct from "./Ourproduct.json";
import bestSelling from "./Bestselling.json";
import products from "./data/products.js";
import { clearWishlist } from "./store/wishlistSlice";
import { clearCart } from "./store/cartSlice";
import { setCart } from "./store/cartSlice";
import { setWishlist } from "./store/wishlistSlice";


const allProducts = [
  ...flashsale,
  ...ourproduct,
  ...bestSelling,
  ...products
];

function Show() {
  const [open, setOpen] = useState(false);
  const [language, setLanguage] = useState("English");
  const [showSearch, setshowSearch] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const user = useSelector((state) => state.auth.user);
const wishlist = useSelector((state) => state.wishlist.items);
const cart = useSelector((state) => state.cart.items);


  // 🔐 REDUX LOGIN STATE
  const isLogin = useSelector((state) => state.auth.isLogin);
  const dispatch = useDispatch();
  
  const navigate = useNavigate();
  useEffect(() => {
  if (isLogin && user?.email) {
    const savedCart =
      JSON.parse(localStorage.getItem(`cart_${user.email}`)) || [];

    const savedWishlist =
      JSON.parse(localStorage.getItem(`wishlist_${user.email}`)) || [];

    dispatch(setCart(savedCart));
    dispatch(setWishlist(savedWishlist));
  }
}, [isLogin, user, dispatch]);

  useEffect(() => {
  if (isLogin && user?.email) {
    localStorage.setItem(
      `wishlist_${user.email}`,
      JSON.stringify(wishlist)
    );
  }
}, [wishlist, isLogin, user]);

useEffect(() => {
  if (isLogin && user?.email) {
    localStorage.setItem(
      `cart_${user.email}`,
      JSON.stringify(cart)
    );
  }
}, [cart, isLogin, user]);


  const handleLogout = () => {
    dispatch(clearWishlist());
    dispatch(clearCart());
    dispatch(logout());
      toast.info("Logout successful 👋");
    setProfileOpen(false);
    navigate("/");
  };

  return (
    <>
      <ToastContainer position="bottom-right" autoClose={2000} />

      {/* TOP BAR */}
      <div className='top-bar'>
        <span>summer sale for all swim suits and free delivery-off 50%!</span>
        <a href=''>shop now</a>

        <div className='language-dropdown1'>
          <select
            className='select1'
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option>English</option>
            <option>Hindi</option>
          </select>
        </div>
      </div>

      {/* HEADER */}
      <div className="header">
        <nav className="navbar">

          {/* LOGO */}
          <div className="pic">
            <h2 className="text">Exclusive</h2>
          </div>

          {/* NAV LINKS */}
          <div className={`navi ${open ? 'open' : ''}`}>
            {open && (
              <span className="close-icon" onClick={() => setOpen(false)}>✖</span>
            )}
            <Link to="/" onClick={() => setOpen(false)}>Home</Link>
            <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
            <Link to="/about" onClick={() => setOpen(false)}>About</Link>
            {!isLogin && (
              <Link to="/signup" onClick={() => setOpen(false)}>Sign Up</Link>
            )}
          </div>

          {/* RIGHT SIDE */}
          <div className="nav-right">

            {/* SEARCH */}
            <div className={`search-box ${showSearch ? "active" : ""}`}>
              <input type="text" placeholder="Search products..."  value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
            <FaSearch
  onClick={() => {
    if (!showSearch) {
      setshowSearch(true); 
      return;
    }

    if (!searchTerm.trim()) {
      toast.error("Please enter something to search");
      return;
    }

    navigate(`/shop/search?query=${searchTerm}`);
    setshowSearch(false);
  }}
/>


            </div>

            {/* ICONS */}
             <Link to={isLogin ? "/wishlist" : "/login"}onClick={() => !isLogin && toast.error("Please login first")}><FaHeart className="icon" /></Link>
            <Link to={isLogin ? "/cart" : "/login"}onClick={() => !isLogin && toast.error("Please login first")}><FaShoppingCart className="icon" /></Link>

            {/* 🔐 PROFILE / LOGIN */}
            {!isLogin ? (
              <Link to="/login">
                <FaUserCircle className="icon" />
              </Link>
            ) : (
              <div className="profile">
                <FaUserCircle
                  className="icon"
                  onClick={() => setProfileOpen(!profileOpen)}
                />

                {profileOpen && (
                  <div className="profile-dropdown">
                    <Link to="/account" onClick={() => setProfileOpen(false)}>
                      <button>Manage My Account</button>
                    </Link>

                    <Link to="/account/orders" onClick={() => setProfileOpen(false)}>
                      <button>My Orders</button>
                    </Link>

                    <Link to="/account/cancellations" onClick={() => setProfileOpen(false)}>
                      <button>My Cancellations</button>
                    </Link>

                    <button>My Reviews</button>

                    <button className="logout" onClick={handleLogout}>
                      Logout
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* MENU ICON */}
            <span className="menu-icon" onClick={() => setOpen(!open)}>☰</span>

          </div>
        </nav>
      </div>

      {/* ROUTES */}
      <div className='mid'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          
          <Route path="/apitest" element={<Apitest />} />

          <Route path="/shop/:category" element={<Shop />} />
          <Route path="/product/:id" element={<ProductDetail />} />

          <Route path="/cart" element={<PrivateRoute><Addtocart /></PrivateRoute>} />
          <Route path="/wishlist" element={<PrivateRoute><Wishlist /></PrivateRoute>} />
          <Route path="/Placeorder" element={<Placeorder />} />

          <Route path="/checkout" element={<Checkout />} />

          <Route path="/account" element={<AccountLayout />}>
            <Route index element={<Account />} />
            <Route path="orders" element={<MyOrders />} />
            <Route path="cancellations" element={<MyCancellations />} />
            <Route path="addressbook" element={<Addressbook />} />
            <Route path="paymentoption" element={<Paymentoption />} />
            <Route path="orders/:id" element={<Orderdetail />} />
            <Route path="wishlist" element={<Wishlist />} />
  
          </Route>
        </Routes>
      </div>
    </>
  );
}

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <Show />
      <Footer />
    </BrowserRouter>
  </Provider>
);

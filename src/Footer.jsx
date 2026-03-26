import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-column">
          <h3>EXCLUSIVE</h3>
          <p>Subscribe to get updates & 10% off your first order</p>
          <button>Subscribe</button>
        </div>

        <div className="footer-column">
          <h3>Support</h3>
          <ul>
            <li>1st Floor, Suryabihar, Delhi</li>
            <li>Email: exclusive@gmail.com</li>
            <li>Phone: 9922334455</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Account</h3>
          <ul>
            <li><Link to="/account">My Account</Link></li>
            <li><Link to="/signup">Login / Register</Link></li>
            <li><Link to="/wishlist">Wishlist</Link></li>
            <li><Link to="/cart">Cart</Link></li>
            <li><Link to="/shop">Shop</Link></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/privacy">Privacy Policy</Link></li>
            <li><Link to="/terms">Terms of Use</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-column social-column">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://instagram.com" target="_blank"><FaInstagram /></a>
            <a href="https://facebook.com" target="_blank"><FaFacebook /></a>
            <a href="https://twitter.com" target="_blank"><FaTwitter /></a>
            <a href="https://linkedin.com" target="_blank"><FaLinkedin /></a>
            <a href="https://youtube.com" target="_blank"><FaYoutube /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2024 Exclusive. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;


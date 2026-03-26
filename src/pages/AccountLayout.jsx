import { Link, Outlet } from "react-router-dom";
import "./Account.css";

const AccountLayout = () => {
  return (
    <div className="account-wrapper">

      {/* SIDEBAR */}
      <div className="account-sidebar">
        <h4>Manage My Account</h4>
        <Link to="/account"><button className="side-btn">My Profile</button></Link>
        <Link to="/account/addressbook"><button className="side-btn">Address Book</button></Link>
       <Link to="/account/paymentoption"> <button className="side-btn">Payment Options</button></Link>

        <h4>My Orders</h4>
        <Link to="/account/orders">
          <button className="side-btn">My Orders</button>
        </Link>
        <Link to="/account/cancellations">
          <button className="side-btn">My Cancellations</button>
        </Link>

        <h4>My Wishlist</h4>
        <Link to="/account/wishlist">
          <button className="side-btn">Wishlist</button>
        </Link>
      </div>

      {/* RIGHT SIDE CONTENT */}
      <div className="account-content">
        <Outlet />
      </div>

    </div>
  );
};

export default AccountLayout;

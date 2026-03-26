import "./Account.css";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateProfile } from "../store/authSlice";
import { toast } from "react-toastify";



const Account = () => {
  const dispatch = useDispatch();
  const handleSave = (e) => {
  e.preventDefault();
  dispatch(updateProfile(formData));
  toast.success("Profile updated successfully 🎉");
};
  const user = useSelector((state) => state.auth.user);
  const [open, setOpen] = useState(null);

  const toggle = (section) => {
  setOpen(open === section ? null : section);
  };
  const [formData, setFormData] = useState({
  firstName: "",
  lastName: "",
  email: "",
  address: "",
});
  useEffect(() => {
  if (user) {
    setFormData({
      firstName: user.firstName || "",
      lastName: user.lastName || "",
      email: user.email || "",
      address: user.address || "",
    });
     
  }
}, [user]);


  return (
   
      <div className="account-content">
        <h2>Edit Your Profile</h2>

       <form className="profile-form" onSubmit={handleSave}>


          <div className="form-row">
            <div className="form-group">
              <label>First Name</label>
              <input type="text"value={formData.firstName}
             onChange={(e) =>
             setFormData({ ...formData, firstName: e.target.value })
             }/>

            </div>

            <div className="form-group">
              <label>Last Name</label>
             <input type="text"value={formData.lastName} onChange={(e) =>
           setFormData({ ...formData, lastName: e.target.value })  }/>

            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Email</label>
              <input  type="email" value={formData.email}disabled/>

            </div>

            <div className="form-group">
              <label>Address</label>
              <input type="text" value={formData.address} onChange={(e) =>
          setFormData({ ...formData, address: e.target.value }) }/>

            </div>
          </div>

          <h4>Password Changes</h4>

          <input type="password" placeholder="Current Password" />
          <input type="password" placeholder="New Password" />
          <input type="password" placeholder="Confirm New Password" />

          <div className="form-actions">
           <button type="button" className="cancel-btn" onClick={() => setFormData(user)}>
            Cancel</button>

            <button type="submit" className="save-btnn1">Save Changes</button>
          </div>

        </form>
      </div>

   
  );
};

export default Account;

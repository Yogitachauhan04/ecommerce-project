import { useState } from "react";
import "./AddressPayment.css";
import { useSelector, useDispatch } from "react-redux";
import { addAddress, updateAddress, deleteAddress, setDefaultAddress } from "../store/addressSlice";

const Addressbook = () => {
  const addresses = useSelector(state => state.address.list);
  const dispatch = useDispatch();

  const [showForm, setShowForm] = useState(false);
  const [editingAddress, setEditingAddress] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    type: "Home",
  });

  const handleAddNew = () => {
    setFormData({ name: "", phone: "", address: "", type: "Home" });
    setEditingAddress(null);
    setShowForm(true);
  };

  const handleEdit = (addr) => {
    setFormData({ ...addr });
    setEditingAddress(addr.id);
    setShowForm(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingAddress) {
      dispatch(updateAddress({ ...formData, id: editingAddress }));
    } else {
      const newId = addresses.length ? Math.max(...addresses.map(a => a.id)) + 1 : 1;
      dispatch(addAddress({ ...formData, id: newId }));
    }

    setShowForm(false);
  };

  return (
    <div className="address-page">
      <h2>Address Book</h2>

      <button className="add-btn" onClick={handleAddNew}>+ Add New Address</button>

      <div className="address-list">
        {addresses.map((a) => (
          <div key={a.id} className="address-card">
            <div className="address-top">
              <span className={`tag ${a.type.toLowerCase()}`}>{a.type}</span>
              {a.isDefault && <span className="default">Default</span>}
            </div>

            <p className="name">{a.name}</p>
            <p className="phone">📞 {a.phone}</p>
            <p className="full-address">{a.address}</p>

            <div className="address-actions">
              <button className="edit" onClick={() => handleEdit(a)}>Edit</button>
              <button className="delete" onClick={() => dispatch(deleteAddress(a.id))}>Delete</button>
              {!a.isDefault && <button className="set-default" onClick={() => dispatch(setDefaultAddress(a.id))}>Set as Default</button>}
            </div>
          </div>
        ))}
      </div>

      {showForm && (
        <div className="modal">
          <div className="modal-content">
            <h3>{editingAddress ? "Edit Address" : "Add New Address"}</h3>
            <form onSubmit={handleSubmit}>
              <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
              <input type="text" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} required />
              <textarea name="address" placeholder="Full Address" value={formData.address} onChange={handleChange} required />
              <select name="type" value={formData.type} onChange={handleChange}>
                <option value="Home">Home</option>
                <option value="Work">Work</option>
              </select>

              <div className="modal-actions">
                <button type="submit" className="red-btn2">{editingAddress ? "Update" : "Add"}</button>
                <button type="button" className="outline-btn3" onClick={() => setShowForm(false)}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Addressbook;

import { useState } from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import { v4 as uuid } from "uuid";
import NavBar from "../navBar/NavBar";
import "./Address.css"
export default function AddressInput({ onTaskCreate }) {
  const initialState = {
    id: "",
    name: "",
    phone: "",
    pin: "",
    address1: "",
    address2: "",
    address3: "",
    state: "",
    makeDefault:false,
    addType: ""
  };
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    let { name, value, type, checked } = e.target;

    const val = type === "checkbox" ? checked : value;

    setFormData({
      ...formData,
      [name]: val
    });
  };
  const handleSUbmit = (e) => {
  
    e.preventDefault();
    onTaskCreate && onTaskCreate(formData);
    setFormData("");
  };

  return (
    <div>
      
        <div>
        <div className="form_heading">
        <h2>Add a new Address</h2>
        </div>
      <form className="form_data">
      <div>
          <label>Country/Origin</label><br />
          <select
          className="form_dropdown"
            name="addType"
            value={formData.addType}
            onChange={handleChange}
          >
            <option value="" key="0">
              Select Country
            </option>
            <option value="India" key="India">
              India
            </option>
            <option value="Bangladesh" key="Bangladesh">
              Bangladesh
            </option>
            <option value="Sri Lanka" key="Sri Lanka">
              Sri Lanka
            </option>
            <option value="USA" key="USA">
              USA
            </option>
          </select>
        </div>
        <div>
          <label>Full Name</label>
          <input
          className="form_input"
            type="text"
            placeholder="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Phone:</label>
          <input
            type="number"
            placeholder="phone number"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Pin:</label>
          <input
            type="number"
            placeholder="pin"
            name="pin"
            value={formData.pin}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Address 1:</label>
          <input
            type="text"
            placeholder="Address"
            name="address1"
            value={formData.address1}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Address 2:</label>
          <input
            type="text"
            placeholder="Address"
            name="address2"
            value={formData.address2}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Address 3:</label>
          <input
            type="text"
            placeholder="Address"
            name="address3"
            value={formData.address3}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>State:</label>
          <input
            type="text"
            placeholder="State"
            name="state"
            value={formData.state}
            onChange={handleChange}
          />
        </div>
        <div className="form_some">
            <h4 >Add delivery instruction</h4>
            <p>Preference are used to plan your delivery.However,shipments can sometimes arrives early or later than planned</p>
        </div>
        <div>
          <label>Address Type</label>
          <select
          className="form_dropdown"
            name="addType"
            value={formData.addType}
            onChange={handleChange}
          >
            <option value="" key="0">
              Select a Address Type
            </option>
            <option value="home" key="home">
              Home
            </option>
            <option value="office" key="office">
              Office
            </option>
          </select>
        </div>
        <div>
            <button className="form_button" onClick={handleSUbmit} type="submit"><Link style={{textDecoration:"none"}} to="./address">Submit</Link> </button>   
        </div>
      </form>
        </div>
    </div>
  );
}

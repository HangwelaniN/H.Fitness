import React, { useState } from "react";
import "./Pricing.css";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: ""
  });

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(
      `Thank you for choosing us  ${formData.name}`
    );

    setFormData({
      name: "",
      surname: "",
      email: ""
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter Name"
          value={formData.name}
          onChange={handleInputChange}
          className="use"
        />
      </div>
      <div className="bound" >
        <input
          type="text"
          id="surname"
          name="surname"
          placeholder="Enter Surname"
          value={formData.surname}
          onChange={handleInputChange}
          className="use"
        />
      </div>
      <div>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter Email Adress"
          value={formData.email}
          onChange={handleInputChange}
          className="use"

        />
      </div>
      <button  className="used" type="submit">Submit</button>
    </form>
  );
};

export default Form;
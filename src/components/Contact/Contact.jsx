import './Contact.css'
import message_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'
import React, { useEffect, useState } from 'react'

const Contact = () => {
  const [result, setResult] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: ""
  });

  // Load stored data when the component mounts
  useEffect(() => {
    const storedData = localStorage.getItem("contactForm");
    if (storedData) {
      setFormData(JSON.parse(storedData));
    }
  }, []);

  // Handle input changes and update localStorage
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    const updatedFormData = { ...formData, [name]: value };
    setFormData(updatedFormData);
    localStorage.setItem("contactForm", JSON.stringify(updatedFormData));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");

    const formDataToSend = new FormData();
    formDataToSend.append("access_key", "19faf98e-41d8-42ea-8acf-0ff49e3043e4");
    formDataToSend.append("name", formData.name);
    formDataToSend.append("phone", formData.phone);
    formDataToSend.append("message", formData.message);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formDataToSend
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      setFormData({ name: "", phone: "", message: "" });
      localStorage.removeItem("contactForm");
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='contact'>
      <div className='contact-col'>
        <h3>
          Send us a message <img src={message_icon} alt='' />
        </h3>
        <p>
          Feel free to reach out through the contact form or find our contact
          information below.
        </p>
        <ul>
          <li>
            <img src={mail_icon} alt='' />
            INFO@PRAGATIITC.COM
          </li>
          <li>
            <img src={phone_icon} alt='' />
            +91-9983586734 , +91-9983778800
          </li>
          <li>
            <img src={location_icon} alt='' />
            DHANDHELA ROAD, PATAN, DISTT.- SIKAR
          </li>
        </ul>
      </div>
      <div className='contact-col'>
        <form onSubmit={onSubmit}>
          <label>Your Name</label>
          <input
            type='text'
            name='name'
            value={formData.name}
            onChange={handleInputChange}
            placeholder='Enter your name'
            required
          />
          <label>Phone Number</label>
          <input
            type='tel'
            name='phone'
            value={formData.phone}
            onChange={handleInputChange}
            placeholder='Enter your Mobile number'
            required
          />
          <label>Write your messages here</label>
          <textarea
            name='message'
            rows={6}
            value={formData.message}
            onChange={handleInputChange}
            placeholder='Enter your message'
            required
          ></textarea>
          <button type='submit' className='btn dark-btn'>
            Submit Now <img src={white_arrow} alt='' />
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact

import React from "react";
import "./Contact.css";
import { FiPhoneCall, FiMail } from "react-icons/fi";

export default function Contact() {
  return (
    <div className="contact-container">

      {/* LEFT SIDE */}
      <div className="contact-left">
        <div className="info-box">
          <div className="icon-circle1"><FiPhoneCall /></div>
          <h3>Call To Us</h3>
          <p>We are available 24/7, 7 days a week.</p>
          <p>Phone: +8801611112222</p>
          <hr />
        </div>

        <div className="info-box">
          <div className="icon-circle1"><FiMail /></div>
          <h3>Write To Us</h3>
          <p>Fill out our form and we will contact you within 24 hours.</p>
          <p>Emails: customer@exclusive.com</p>
          <p>Emails: support@exclusive.com</p>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="contact-right">
        <form>
          <div className="top-inputs">
            <input type="text" placeholder="Your Name *" />
            <input type="email" placeholder="Your Email *" />
            <input type="text" placeholder="Your Phone *" />
          </div>

          <textarea placeholder="Your Message"></textarea>

          <button type="submit" className="send-btn">Send Message</button>
        </form>
      </div>
    </div>
  );
}

import React, { useRef, useEffect } from "react";
import "./About.css";
import Slider from "react-slick";
import { FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { FaTruck,FaUndo,FaHeadset } from "react-icons/fa";

const teamData = [
  {
    name: "Tom Cruise",
    role: "Founder & Chairman",
    img: "/image46.png",
    instagram: "https://instagram.com/",
    twitter: "https://twitter.com/",
    linkedin: "https://linkedin.com/"
  },
  {
    name: "Emma Watson",
    role: "Managing Director",
    img: "/image47.png",
    instagram: "https://instagram.com/",
    twitter: "https://twitter.com/",
    linkedin: "https://linkedin.com/"
  },
  {
    name: "Will Smith",
    role: "Product Designer",
    img: "/image51.png",
    instagram: "https://instagram.com/",
    twitter: "https://twitter.com/",
    linkedin: "https://linkedin.com/"
  },
   {
    name: "Tom Cruise",
    role: "Founder & Chairman",
    img: "/image46.png",
    instagram: "https://instagram.com/",
    twitter: "https://twitter.com/",
    linkedin: "https://linkedin.com/"
  },
  {
    name: "Emma Watson",
    role: "Managing Director",
    img: "/image47.png",
    instagram: "https://instagram.com/",
    twitter: "https://twitter.com/",
    linkedin: "https://linkedin.com/"
  },
  {
    name: "Will Smith",
    role: "Product Designer",
    img: "/image51.png",
    instagram: "https://instagram.com/",
    twitter: "https://twitter.com/",
    linkedin: "https://linkedin.com/"
  }
];

const Team = () => {
  const sliderRef = useRef(null);
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 }},
      { breakpoint: 768, settings: { slidesToShow: 1 }}
    ]
  };
    useEffect(() => {
    const handleResize = () => {
      sliderRef.current?.slickGoTo(0); 
      window.dispatchEvent(new Event("resize")); 
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="team-container">
     <Slider ref={sliderRef} {...settings}>
        {teamData.map((person, index) => (
          <div className="team-card" key={index}>
            <img src={person.img} alt={person.name} />
            <h3>{person.name}</h3>
            <p>{person.role}</p>

            <div className="social-icons3">
              <a href={person.twitter} target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
              <a href={person.instagram} target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a href={person.linkedin} target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

const About = () => {
  return (
    <div className="about-container">

      {/* OUR STORY */}
      <div className="story-section">
        <div className="story-text">
          <h1>Our Story</h1>
          <br />
          <p>
            Launced in 2015, Exclusive is South Asia’s premier online shopping
            marketplace with an active presence in Bangladesh.<br></br> Supported by wide
            range of tailored marketing, data and service solutions, Exclusive
            has 10,500 sellers and 300 brands and serves 3 million customers.
          </p>

          <br />
          <p>
            Exclusive has more than 1 Million products to offer, growing at a
            very fast rate, offering diverse categories ranging from consumer
            goods to more unique items.
          </p>
        </div>

        <div className="story-image">
          <img src="/girls.png" alt="Shopping" />
        </div>
      </div>
      <div className="stats">
        <div className="stat-box">
          <div className="icon-circle">
            <img src="/icon_shop.png" alt="icon" />
          </div>
          <h3>10.5k</h3>
          <p>Sellers Active</p>
        </div>

        <div className="stat-box">
          <div className="icon-circle">
            <img src="/Icon-Moneybag.png" alt="icon" />
          </div>
          <h3>33k</h3>
          <p>Monthly Product Sale</p>
        </div>

        <div className="stat-box">
          <div className="icon-circle">
            <img src="/Icon-Sale.png" alt="icon" />
          </div>
          <h3>45.5k</h3>
          <p>Customers Active</p>
        </div>

        <div className="stat-box">
          <div className="icon-circle">
            <img src="/Icon-Shoppingbag.png" alt="icon" />
          </div>
          <h3>25k</h3>
          <p>Annual Gross Sales</p>
        </div>
      </div>
      
      <Team />

      <div className="features-section">
                  <div className="feature-box">
                    <FaTruck className="a"/>
                    <h3>FREE AND FAST DELEVERY</h3>
                    <p>free delivery for all orders over $140</p>
                  </div>
                  <div className="feature-box">
                    <FaHeadset className="a"/>
                    <h3>24/7 CUSTOMER SERVICES</h3>
                    <p>Friendly 24/7 customer supports</p>
                  </div>
                  <div className="feature-box">
                    <FaUndo className="a"/>
                    <h3>MONEY BACK GUARANTEE</h3>
                    <p>We return money in 30 days</p>
                  </div>
                 </div>  

    </div>
  );
};

export default About;

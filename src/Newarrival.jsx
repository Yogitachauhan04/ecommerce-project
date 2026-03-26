import { FaTruck,FaUndo,FaHeadset } from "react-icons/fa";
import "./Newarrival.css";

const Newarrival=()=>{
    return(
         <div className="newarrival-container">
                <div className="newarrival-header">
                    <p className="label">Featured</p>
                    <h2>New Arrival</h2>
                </div>
                <div className="newarrival-grid">
                {/* large left banner*/}
                <div className="bigbanner">
                   <img src="c1.jpg" alt="banner"/>
                   <div className="banner-text2">
                    <h3>playstation</h3>
                    <p>Best Gaming Console</p>
                    <button>show now</button>
                   </div>
                </div>
                {/* right top banner*/}
                 <div className="smallbanner">
                   <img src="c3.avif" alt="banner"/>
                   <div className="banner-text2">
                    <h3>Women's Collection</h3>
                    <p>Feature women collection that give yopu another vibe</p>
                    <button>show now</button>
                   </div>
                </div>
                <div className="bottom">
                {/* right bottom banner*/}
                 <div className="smallbanner">
                   <img src="c4.jpg" alt="banner"/>
                   <div className="banner-text2">
                    <h3>Speaker</h3>
                    <p>Amazon wireless speaker</p>
                    <button>show now</button>
                   </div>
                </div>
                {/* right bottom right*/}
                 <div className="smallbanner">
                   <img src="c5.webp" alt="banner"/>
                   <div className="banner-text2">
                    <h3>Perfume</h3>
                    <p>Gucci Intense OUD EDP</p>
                    <button>show now</button>
                   </div>
                </div>
                </div>
          </div>   
           <div className="section1"></div> 
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
}
export default Newarrival;
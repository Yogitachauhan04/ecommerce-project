import React, { useEffect } from "react";
import "./Flashsale.css";

function Categories(){
    const Categories=[
    {icon:" fa-solid fa-mobile-screen-button",name:"phones"},
     {icon:" fa-solid fa-computer",name:"Computers"},
     {icon:"fa-solid fa-clock",name:"smart watch"},
     {icon:"fa-solid fa-camera",name:"camera"},
     {icon:"fa-solid fa-headphones",name:"headphones"},
     {icon:"fa-solid fa-gamepad",name:"Gaming"},
    
    ];
    useEffect(()=>{
        const ScrollContainer=
        document.getElementById("cat-scroll");
        document.getElementById("left-arrow").onclick=()=>{
            ScrollContainer.scrollLeft-=150;
        };
        document.getElementById("right-arrow").onclick=()=>{
            ScrollContainer.scrollLeft+=150;
        };

    },[]);
    return(
        <div className="section">
        <div className="category-section">
            <div className="category-header">
                <div className="cc">
                    <p className="cat-label">Categories</p>
                    <h2>BrowseBy Category</h2>
                </div>
                <div className="arrow">
                    <button className="arrow-btn" id="left-arrow">
                        <i className="fa-solid fa-arrow-left"></i>
                    </button>
                    <button className="arrow-btn" id="right-arrow">
                        <i className="fa-solid fa-arrow-right"></i>
                    </button>
                </div>
            </div>

           <div className="category-container" id="cat-scroll">
             {Categories.map((cat,index)=>(
            <div
            key={index}
             className={`category-card $
             {cat.name ==="Camera" ? "active" : ""}`}
             >
            <i className={cat.icon}></i>
            <p>{cat.name}</p>    
            </div>
             ))}
           </div>
        </div>
        </div>
    );

}
export default Categories;
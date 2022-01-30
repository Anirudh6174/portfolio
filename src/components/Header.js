import React from "react";
import ReactTyped from "react-typed";

const Header = () => {
  return (
     <div id="home" className="header-wrapper">
         <div className="main-info">
             <h1>Web Development</h1>
             <ReactTyped className="typed-text"
             strings={["Web Development", "Web Design", "Content Writing"]} 
             typeSpeed={40}
             backSpeed={90}
             loop
             />
             <a href="#" className="btn-main-offer"> Contact Me </a>
         </div>
     </div>   
  )
}

export default Header;

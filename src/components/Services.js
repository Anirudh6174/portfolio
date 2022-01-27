import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faFileCode, faDesktop } from "@fortawesome/free-solid-svg-icons";

const Services = () => {
  return ( 
        <div className="services">
           <h1 className="py-5">my services</h1>
               <div className="container">
                   <div className="row">
                       <div className="col-md-3 col-sm-6">
                           <div className="box">
                               <div className="circle"><FontAwesomeIcon className="icon" icon={faDesktop} size="2x" /></div>
                               <h3>Web Design</h3>
                               <p>I approach each project individually and always focus on the end result</p>
                           </div>
                       </div>
                       {/* - */}
                       <div className="col-md-3 col-sm-6">
                           <div className="box">
                           <div className="circle"><FontAwesomeIcon className="icon" icon={faFileCode} size="2x" /></div>
                               <h3>Web Development</h3>
                               <p>Your website will be build with new and proven technologies</p>
                           </div>
                       </div>
                       {/* - */}
                       <div className="col-md-3 col-sm-6">
                           <div className="box">
                           <div className="circle"><FontAwesomeIcon className="icon" icon={faFacebook} size="2x" /></div>
                               <h3>Social Media Marketing</h3>
                               <p>Reach out to your potential clients instantly using social media</p>
                           </div>
                        </div>   
                        {/* - */}
                       <div className="col-md-3 col-sm-6">
                           <div className="box">
                           <div className="circle"><FontAwesomeIcon className="icon" icon={faGoogle} size="2x" /></div>
                               <h3>Google Ads</h3>
                               <p>Your services and products will appear at the top of related google searches</p>
                           </div>   
                       </div>
                   </div>
               </div>
            
       </div>
    )
};

export default Services;

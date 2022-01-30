import React from "react";
import Author from "../self.jpg";

const AboutMe = () => {
  return (
  <div id="aboutme" className="container py-5">
      <div className="row">
          <div className="col-lg-6 col-xm-12">
              <div className="photo-wrap mb-5">              
              <img className ="profile-img" src={Author} alt="author..."/>
            </div>  
          </div>
          <div className="col-lg-6 col-xm-12">
              <h1 className="about-heading">About Me</h1>
              <p>
                  Hello, I am Anirudh. I have a knack for developing websites and mobile applications.
                  The Technologies I am proficient with are MERN (MongoDB, Express, ReactJS and NodeJS).
                  The websites are well designed, efficient and compatible across desktops, smartphones and tablets.
                  The websites and applications are testable and scalable with test routines
                  for tracing crashes and network traffic.

              </p>
          </div>            
      </div>

  </div>
  )
}

export default AboutMe;

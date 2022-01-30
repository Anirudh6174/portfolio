import React from "react";
import {
    FacebookShareButton,
    FacebookIcon,
    TwitterShareButton,
    TwitterIcon,
    RedditShareButton,
    RedditIcon,
    LinkedinShareButton,
    LinkedinIcon
} from "react-share";

const Footer = () => {
  return (
   <div className="footer">
       <div className="container">
           <div className="row">
               <div className="col-lg-4 col-md-6 col-sm-6">
                   <div className="d-flex">
                       <p>Address</p>
                   </div>
                   <div className="d-flex">
                       <a href="tel:555-555-5555">+01(987)321-0684</a>
                   </div>
                   <div className="d-flex">
                       <p>anirudh0288@gmail.com</p>
                   </div>
               </div>
               <div className="col-lg-3 col-md-2 col-sm-6">
                   <div className="row">
                       <div className="col">
                           <a href="footer-nav">Home</a><br/>
                           <a href="footer-nav">About</a><br/>
                           <a href="footer-nav">Services</a><br/>
                       </div>
                       <div className="col">
                           <a href="footer-nav">Experience</a><br/>
                           <a href="footer-nav">Portfolio</a><br/>
                           <a href="footer-nav">Contact</a><br/>
                       </div>
                   </div>
               </div>
               <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
                   <div className="d-flex justify-content-center">
                      <FacebookShareButton
                          url={"https://github.com/Anirudh6174"}
                          quote={"Front-End Developer"}
                          hashtag="#react"
                          >
                          <FacebookIcon className="mx-3" size={36}/>    
                      </FacebookShareButton>
                      <TwitterShareButton
                          url={"https://github.com/Anirudh6174"}
                          quote={"Front-End Developer"}
                          hashtag="#react"
                          >
                          <TwitterIcon className="mx-3" size={36}/>    
                      </TwitterShareButton>
                      <RedditShareButton
                          url={"https://github.com/Anirudh6174"}
                          quote={"Front-End Developer"}
                          hashtag="#react"
                          >
                          <RedditIcon className="mx-3" size={36}/>    
                      </RedditShareButton> 
                      <LinkedinShareButton
                          url={"https://github.com/Anirudh6174"}
                          quote={"Front-End Developer"}
                          hashtag="#react"
                          >
                          <LinkedinIcon className="mx-3" size={36}/>    
                      </LinkedinShareButton>  
                   </div>
               </div>
           </div>
       </div>
   </div>
  )
};

export default Footer;

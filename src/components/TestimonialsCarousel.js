import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// Avatar Imports
import avatar1 from "../images/avatars/avatar-1.png";
import avatar2 from "../images/avatars/avatar-2.png";
import avatar3 from "../images/avatars/avatar-3.png";
import avatar4 from "../images/avatars/avatar-4.png";

const TestimonialsCarousel = () => {
  return ( 
  <Carousel
  showArrows={true}
  infiniteLoop={true}
  showThumbs={false}
  showStatus={false}
  autoPlay={true}
  interval={3000}
  >
      <>
      <img src={avatar1} alt="Alan Smithee"/>
      <div className="myCarousel">
      <h3>Alan Smithee</h3>
      <p>Lorem ipsum dolor sit amet consectetur elit. Debitis ratione
          sequi saepa dicta blanditiis, molestias eum excepturi quod fugiat
          veniam</p>
          </div>
      </>
      <>
      <img src={avatar2} alt="Jane Cho"/>
      <div className="myCarousel">
      <h3>Jane Cho</h3>
      <p>Lorem ipsum dolor sit amet consectetur elit. Debitis ratione
          sequi saepa dicta blanditiis, molestias eum excepturi quod fugiat
          veniam</p>
          </div>
      </>
      <>
      <img src={avatar3} alt="John Doe"/>
      <div className="myCarousel">
      <h3>John Doe</h3>
      <p>Lorem ipsum dolor sit amet consectetur elit. Debitis ratione
          sequi saepa dicta blanditiis, molestias eum excepturi quod fugiat
          veniam</p>
          </div>
      </>
      <>
      <img src={avatar4} alt="Amadeus"/>
      <div className="myCarousel">
      <h3>Amadeus</h3>
      <p>Lorem ipsum dolor sit amet consectetur elit. Debitis ratione
          sequi saepa dicta blanditiis, molestias eum excepturi quod fugiat
          veniam</p>
          </div>
      </>
  </Carousel>
  )
};

export default TestimonialsCarousel;

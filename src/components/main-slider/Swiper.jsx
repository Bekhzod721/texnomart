
import './swiper.css'
import Carousel from 'react-bootstrap/Carousel'; 
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/thumbs"
import { useState } from "react";



function UncontrolledExample() {


  // const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    

     <div className="slider">
        <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://texnomart.uz/_ipx/f_webp,q_100,s_1920x400/https://backend.texnomart.uz/uploads/slides/6648171920kr.webp"
          alt="First slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://texnomart.uz/_ipx/f_webp,q_100,s_1920x400/https://backend.texnomart.uz/uploads/slides/8794121920kr.webp"
          alt="Second slide"
        />
<Carousel.Caption>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://texnomart.uz/_ipx/f_webp,q_100,s_1920x400/https://backend.texnomart.uz/uploads/slides/5247261920kr.webp"
          alt="Third slide"/>    
<Carousel.Caption>
        </Carousel.Caption> 
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://texnomart.uz/_ipx/f_webp,q_100,s_1920x400/https://backend.texnomart.uz/uploads/slides/2617201920kr.webp"
          alt="Tourth slide"
        />    
<Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    <>
      
    </>
     </div>
  );
}



export default UncontrolledExample
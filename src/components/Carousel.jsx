import React, { useState, useEffect } from 'react';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel as CarouselContainer } from 'react-responsive-carousel';

const Carousel = ({ imagesArray }) => {
    const [sliderCellWidth, setSliderCellWidth] = useState(33);
    const [windowWidth , setwindowWidth ] = useState(window.innerWidth);
     
    window.addEventListener('resize', ()=>{
        setwindowWidth(window.innerWidth);
    })

    useEffect(()=>{
        if(windowWidth<600){
            setSliderCellWidth(90)
        }else{
            setSliderCellWidth(33)
        };
    }, [windowWidth])



  return (
        <div>
            <CarouselContainer width='100%' centerMode={true} centerSlidePercentage= {sliderCellWidth} showThumbs = {false} showArrows={ false } showStatus={false} showIndicators={false} autoPlay interval={2000} infiniteLoop stopOnHover swipeable emulateTouch>
                { imagesArray.map((image, key) =>(
                    <div key={image+key} style={{ width: '100%', height: '200px', backgroundImage: `url(${image})` , backgroundPosition: 'center', backgroundRepeat: 'no-repeat',backgroundSize:'cover' }} >   
                    </div>
                ))}
            </CarouselContainer>
        </div>
  )
}

export default Carousel





    

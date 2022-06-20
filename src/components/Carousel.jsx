import React, { useState, useEffect } from 'react';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel as CarouselContainer } from 'react-responsive-carousel';
import { Container } from '@mui/material';

const Carousel = ({ imagesArray }) => {
  return (
        <>
            <Container sx={{display: { xs:'none', sm:'block' }}}>
                <CarouselContainer width='100%' centerMode={true} centerSlidePercentage= {33} showThumbs = {false} showArrows={ false } showStatus={false} showIndicators={false} autoPlay interval={2000} infiniteLoop stopOnHover swipeable emulateTouch>
                    { imagesArray.map((image, key) =>(
                        <div key={image+key} style={{ width: '100%', height: '200px', backgroundImage: `url(${image})` , backgroundPosition: 'center', backgroundRepeat: 'no-repeat',backgroundSize:'cover' }} >   
                        </div>
                    ))}
                </CarouselContainer>
            </Container>
            <Container sx={{display: { xs:'block', sm:'none' }}}>
                <CarouselContainer width='100%' centerMode={true} centerSlidePercentage= {90} showThumbs = {false} showArrows={ false } showStatus={false} showIndicators={false} autoPlay interval={2000} infiniteLoop stopOnHover swipeable emulateTouch>
                    { imagesArray.map((image, key) =>(
                        <div key={image+key} style={{ width: '100%', height: '200px', backgroundImage: `url(${image})` , backgroundPosition: 'center', backgroundRepeat: 'no-repeat',backgroundSize:'cover' }} >   
                        </div>
                    ))}
                </CarouselContainer>
            </Container>
        </>
  )
}

export default Carousel





    

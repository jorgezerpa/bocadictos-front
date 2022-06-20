import React from 'react';
import { Header, Testimonies, History, Contact, Footer, CarouselCta } from '../layouts';
import { carouselOneImages, carouselTwoImages } from '../constants';

const Home = () => {
  return (
    <div>
      <Header />
      <CarouselCta text='some text' buttonText='tienda' imagesArray={carouselTwoImages} />
      <div id='clients'>
        <Testimonies  />
      </div>
      <div id='history'>
        <History />
      </div>
      <CarouselCta text='some text' buttonText='tienda' imagesArray={carouselOneImages} />
      <div id='contact'>
        <Contact />
      </div>
      <Footer />
    </div>
  )
}

export default Home
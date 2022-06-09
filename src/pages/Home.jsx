import React from 'react';
import { Header, Testimonies, History, Contact, Footer, CarouselCta } from '../layouts';
import { Fake } from '../assets';

const imagesArray = [Fake,Fake,Fake,Fake,Fake,Fake,Fake,Fake,Fake,Fake,Fake,Fake,Fake,Fake];

const Home = () => {
  return (
    <div>
      <Header />
      <CarouselCta text='some text' buttonText='tienda' imagesArray={imagesArray} />
      <div id='clients'>
        <Testimonies  />
      </div>
      <div id='history'>
        <History />
      </div>
      <CarouselCta text='some text' buttonText='tienda' imagesArray={imagesArray} />
      <div id='contact'>
        <Contact />
      </div>
      <Footer />
    </div>
  )
}

export default Home
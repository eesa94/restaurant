import React from 'react'
import Carousel from './Carousel'


const Home = () => {


  return (
    <div className="home-container">
      <Carousel />
      <div className="carousel-overlay">
        <h1 className="carousel-header kodchasan-7 text-white">Award-winning, authentic Korean cuisine</h1>
        <p className="carousel-text text-white kodchasan-5 mb3"><span className="kodchasan-7 carousel-text">Seoul Food.</span> is a warm, inviting establishment that brings the soul of Korean cuisine to the area, where you can tuck in to a wide range of hearty and fulfilling dishes from our wonderful corner of the globe.</p>
        <p className="carousel-text text-white kodchasan-3">Treat your tastebuds to our mouth-watering traditional favourites, or savour some of our innovative modern classics.</p>
      </div>
    </div>
  )
}

export default Home

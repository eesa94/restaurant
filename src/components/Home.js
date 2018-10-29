import React from 'react'
import Carousel from './Carousel'


const Home = () => {


  return (
    <div className="section-container home">
      <Carousel />
      <div className="carousel-overlay">
        <h1 className="carousel-header kodchasan-7 text-white">Award-winning, authentic, Korean cuisine</h1>
        <p className="carousel-text text-white kodchasan-3">Treat your tastebuds to our mouth-watering traditional favourites,</p>
        <p className="carousel-text text-white kodchasan-3">or savour some of our innovative modern classics.</p>
      </div>
    </div>
  )
}

export default Home

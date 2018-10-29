import React from 'react'
import { Link } from 'react-router-dom'
import cafe from '../img/cafe.jpg'


const Home = () => {

  const styles = {
    carouselBackground: {
      backgroundImage: `url(${cafe})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'cover'
    }
  };

  return (
        <div className="section-container home">
          <div id="homeCarousel" class="carousel slide" data-ride="false" data-interval="5000" data-pause="false">
            <ol class="carousel-indicators">
              <li data-target="#homeCarousel" data-slide-to="0" class="active"></li>
              <li data-target="#homeCarousel" data-slide-to="1"></li>
              <li data-target="#homeCarousel" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item active" id="slide-1" style={styles.carouselBackground}>
              </div>
              <div class="carousel-item" id="slide-2">
              </div>
              <div class="carousel-item" id="slide-3">
              </div>
            </div>
          </div>
        </div>
  )
}

export default Home

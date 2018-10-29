import React from 'react'
import { Link } from 'react-router-dom'
import cafe from '../img/cafe.jpg'
import office from '../img/office.jpg'
import night from '../img/night.jpg'


const Home = () => {

  const styles = {
    backgroundOne: {
      backgroundImage: `url(${cafe})`,
    },

    backgroundTwo: {
      backgroundImage: `url(${office})`,
    },

    backgroundThree: {
      backgroundImage: `url(${night})`,
    },

    backgroundProperties: {
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'cover'
    }
  };

  return (
        <div className="section-container home">
          <div id="homeCarousel" className="carousel slide carousel-fade" data-ride="carousel" data-interval="5000" data-pause="false">
            <ol className="carousel-indicators">
              <li data-target="#homeCarousel" data-slide-to="0" className="active"></li>
              <li data-target="#homeCarousel" data-slide-to="1"></li>
              <li data-target="#homeCarousel" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active" id="slide-1" style={{...styles.backgroundProperties, ...styles.backgroundOne}}>
              </div>
              <div className="carousel-item" id="slide-2" style={{...styles.backgroundProperties, ...styles.backgroundTwo}}>
              </div>
              <div className="carousel-item" id="slide-3" style={{...styles.backgroundProperties, ...styles.backgroundThree}}>
              </div>
            </div>
          </div>
        </div>
  )
}

export default Home

import React from 'react'
import restbar from '../img/restbar.jpg'
import counter from '../img/counter.jpg'
import gimbap from '../img/gimbap.jpg'


const Carousel = () => {

  const styles = {
    backgroundOne: {
      backgroundImage: `url(${restbar})`,
    },

    backgroundTwo: {
      backgroundImage: `url(${counter})`,
    },

    backgroundThree: {
      backgroundImage: `url(${gimbap})`,
    },

    backgroundProperties: {
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'cover'
    }
  };

  return (
          <div id="homeCarousel" className="carousel slide carousel-fade" data-ride="carousel" data-interval="8000" data-pause="false">
            <div className="carousel-inner">
              <div className="carousel-item active" id="slide-1" style={{...styles.backgroundProperties, ...styles.backgroundOne}}>
                <div className="carousel-tint h-100 w-100"></div>
              </div>
              <div className="carousel-item" id="slide-2" style={{...styles.backgroundProperties, ...styles.backgroundTwo}}>
              <div className="carousel-tint h-100 w-100"></div>
              </div>
              <div className="carousel-item" id="slide-3" style={{...styles.backgroundProperties, ...styles.backgroundThree}}>
              <div className="carousel-tint h-100 w-100"></div>
              </div>
            </div>
          </div>
  )
}

export default Carousel

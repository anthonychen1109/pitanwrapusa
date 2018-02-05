import React from 'react';

const Carousel = () => {
  return (
    <div className="carousel">
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner" role="listbox">
          <div className="carousel-item carousel-item-1 active">
          </div>
          <div className="carousel-item carousel-item-2">
          </div>
          <div className="carousel-item carousel-item-3">
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  )
}

export default Carousel;

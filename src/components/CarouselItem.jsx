import React from "react";
import '../styles/CarouselItem.css'
const CarouselItem = ({Img, Heading, Genre, customClassName}) => {
  return (
    <div className={customClassName}>
      <img src={Img} className='img-fluid' alt='Notebook' />
      <div className='carousel-caption'>
        <div style={{ width: "80%" }}>
          <h3>{Heading}</h3>
          <hr />
        </div>
        <div style={{ width: "80%" }}>
          <p>Genre: {Genre}</p>
          <hr />
        </div>
        <div className='carousel-action'>
          <button className='btn-primary'>Learn more</button>
        </div>
      </div>
    </div>
  );
};

export default CarouselItem;

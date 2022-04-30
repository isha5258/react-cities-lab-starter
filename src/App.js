import { useState } from 'react';
import React from "react";
import "./styles.css";
import imagesArr from "./imageData";


export default function App() {
  const [bigImage, setBigImage] = useState(imagesArr[0].img);

  function handleClick(imgURL) {
    setBigImage(imgURL)
  }

  const images = imagesArr.map((image, index) => {
    return (
      <img
        key={index}
        src={image.img}
        alt={image.city}
        className='thumb'
        onClick={() => handleClick(image.img)}
      />
    )
  })

  return (
    <div className="App">
      <h1>Cities Of The World</h1>
      <div id="wrapper">
        <div id="thumbnails">
        {images}
        </div>
        <img src={bigImage} id="bigimage" alt='bigImaage'/>
      </div>
    </div>
  );
}

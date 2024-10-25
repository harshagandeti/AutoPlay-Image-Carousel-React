import React, { useEffect, useState } from "react";
import "../styles/ImageCarousel.style.scss";

const ImageCarousel = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrevClick = () => {
    setActiveIndex(!activeIndex ? data.length - 1 : activeIndex - 1);
  };
  const handleNxtClick = () => {
    setActiveIndex(activeIndex >= data.length - 1 ? 0 : activeIndex + 1);

    console.log(activeIndex);
  };
  useEffect(() => {
    const timer = setTimeout(handleNxtClick, 2000);
    return () => {clearTimeout(timer)};
  }, [activeIndex]);

  return (
    <div className="image__Carousel--container">
      <button onClick={handlePrevClick}>Prev</button>
      {data.map((item, index) => {
        return (
          <img
            src={item}
            key={index}
            alt="image"
            className={activeIndex === index ? "active" : "hidden"}
          />
        );
      })}

      <button onClick={handleNxtClick}>Next</button>
    </div>
  );
};

export default ImageCarousel;

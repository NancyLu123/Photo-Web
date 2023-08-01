import React, { useRef } from "react";
import Before from "../img/before.png";
import Next from "../img/next.png";
import { Carousel } from "antd";
import "./CarouselPicture.sass";

const CarouselPicture = (data) => {
  const clickRef = useRef(null);
  const imgUrl = ["2563681", "3243090", "4356144", "1010657", "2104152"];
  return (
    <div>
      <Carousel autoplay ref={clickRef} className="carousel">
        {imgUrl.map((num) => {
          return (
            <img
              src={`https://images.pexels.com/photos/${num}/pexels-photo-${num}.jpeg?auto=compress&cs=tinysrgb&h=650&w=940`}
              alt=""
            />
          );
        })}
      </Carousel>
      <img
        className="carousel-left"
        src={Before}
        onClick={() => clickRef.current.prev()}
        alt=""
      />
      <img
        className="carousel-right"
        src={Next}
        onClick={() => clickRef.current.next()}
        alt=""
      />
    </div>
  );
};

export default CarouselPicture;

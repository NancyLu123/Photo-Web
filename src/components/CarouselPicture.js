import React, { useRef } from "react";
import Leftbutton from "../img/left-arrow.png";
import Rightbutton from "../img/right-arrow.png";
import { Carousel } from "antd";
import "./CarouselPicture.sass";

const CarouselPicture = (data) => {
  const clickRef = useRef(null);
  return (
    <div>
      <Carousel autoplay ref={clickRef} className="carousel">
        <div>
          <img
            src={
              "https://images.pexels.com/photos/2563681/pexels-photo-2563681.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            }
            alt=""
          />
        </div>
        <div>
          <img
            src={
              "https://images.pexels.com/photos/3243090/pexels-photo-3243090.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            }
            alt=""
          />
        </div>
        <div>
          <img
            src={
              "https://images.pexels.com/photos/4356144/pexels-photo-4356144.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            }
            alt=""
          />
        </div>
        <div>
          <img
            src={
              "https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            }
            alt=""
          />
        </div>
        <div>
          <img
            src={
              "https://images.pexels.com/photos/2104152/pexels-photo-2104152.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            }
            alt=""
          />
        </div>
      </Carousel>
      <img
        className="carousel-left"
        src={Leftbutton}
        onClick={() => clickRef.current.prev()}
        alt=""
      />
      <img
        className="carousel-right"
        src={Rightbutton}
        onClick={() => clickRef.current.next()}
        alt=""
      />
    </div>
  );
};

export default CarouselPicture;

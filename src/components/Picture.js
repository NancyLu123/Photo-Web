import React from "react";
import { Link } from "react-router-dom";

import "./Picture.sass";

const Picture = ({ data, width }) => {
  return (
    <Link
      to={{
        pathname: `/photo/${data.id}`,
      }}
    >
      <div
        className="picture"
        style={{
          width: width,
        }}
      >
        <div className="imageContainer">
          <img src={data.src.large} alt="" />
        </div>
      </div>
    </Link>
  );
};

export default Picture;

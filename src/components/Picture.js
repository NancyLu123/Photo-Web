import React from "react";
import "./Picture.sass";

const Picture = ({ data }) => {
  return (
    <div className="picture">
      <p>作者：{data.photographer}</p>
      <div className="imageContainer">
        <a target="_blank" href={data.src.large}>
          <img src={data.src.large} alt="" />
        </a>
      </div>
      <p>
        {/*新增頁面*/}
        <a target="_blank" href={data.src.large}></a>
      </p>
    </div>
  );
};

export default Picture;

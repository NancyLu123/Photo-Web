import React from "react";

const Picture = ({ data }) => {
  return (
    <div className="picture">
      <p>Author：{data.photographer}</p>
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

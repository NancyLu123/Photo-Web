import React, { useState, useEffect } from "react";
import CarouselPicture from "../components/CarouselPicture";
import Picture from "../components/Picture";
import { getPhoto } from "../api/photoApi";
import "./Homepage.sass";

const Homepage = () => {
  //State指所有圖片知訊
  let [data, setData] = useState([]);
  let [page, setPage] = useState(1);

  // 從 pexels api 獲取數據
  const getFeaturedPhoto = async () => {
    let dataFetch;
    dataFetch = await getPhoto(1);
    let parsedData = dataFetch.data.photos;
    setPage(2);
    setData(parsedData);
  };

  // 加載更多圖片
  const morepicture = async () => {
    let dataFetch;
    dataFetch = await getPhoto(page);
    let parsedData = dataFetch.data.photos;
    setPage(page + 1);
    setData(data.concat(parsedData));
  };

  // 頁面加載時獲取數據
  useEffect(() => {
    getFeaturedPhoto();
  }, []);

  return (
    <div>
      <div className="content">
        <CarouselPicture />
        <div>
          <p className="picture-title">精選相片</p>
          <div className="pictures">
            {data &&
              data.map((d) => {
                return <Picture data={d} />;
              })}
          </div>
        </div>
        {data.length !== 0 && (
          <div className="morePicture">
            <button onClick={morepicture}>Load More</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Homepage;

import React, { useState, useEffect } from "react";
import Nav from "../components/Nav";
import CarouselPicture from "../components/CarouselPicture";
import Picture from "../components/Picture";
import { getPhoto, getSearchPhoto } from "../api/photoApi";

const Homepage = () => {
  //State指所有圖片知訊
  let [data, setData] = useState(null);
  let [page, setPage] = useState(1);
  const [currentSearch, setCurrentSearch] = useState("");

  // 從 pexels api 獲取數據
  const search = async () => {
    let dataFetch;
    setPage(2);
    if (currentSearch === "") {
      dataFetch = await getPhoto(1);
    } else {
      dataFetch = await getSearchPhoto(currentSearch, 1);
    }
    //抓來的圖片
    let parsedData = dataFetch.data.photos;
    //在data顯示15張照片
    setData(parsedData);
  };

  // 加載更多圖片
  const morepicture = async () => {
    let dataFetch;
    if (currentSearch === "") {
      dataFetch = await getPhoto(page);
    } else {
      dataFetch = await getSearchPhoto(currentSearch, page);
    }
    setPage(page + 1);
    let parsedData = dataFetch.data.photos;
    setData(data.concat(parsedData));
  };

  // 頁面加載時獲取數據
  useEffect(() => {
    search();
  }, [currentSearch]);

  return (
    <div>
      <Nav setCurrentSearch={setCurrentSearch} />
      <div className="content">
        <CarouselPicture data={data} />
        <div>
          <p className="picture-title">
            {currentSearch === "" || undefined
              ? "Featured photos"
              : "Photos related to『" + currentSearch + "』"}
          </p>
          <div className="pictures">
            {data &&
              data.map((d) => {
                return <Picture data={d} />;
              })}
          </div>
        </div>

        <div className="morePicture">
          <button onClick={morepicture}>Load More</button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;

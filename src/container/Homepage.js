import React, { useState, useEffect } from "react";
import Nav from "../components/Nav";
import { Empty } from "antd";
import CarouselPicture from "../components/CarouselPicture";
import Picture from "../components/Picture";
import { getPhoto, getSearchPhoto } from "../api/photoApi";

const Homepage = () => {
  //State指所有圖片知訊
  let [data, setData] = useState([]);
  let [page, setPage] = useState(1);
  const [currentSearch, setCurrentSearch] = useState("");

  // 從 pexels api 獲取數據
  const search = async () => {
    let dataFetch;
    if (currentSearch === "") {
      dataFetch = await getPhoto(1);
    } else {
      dataFetch = await getSearchPhoto(currentSearch, 1);
    }
    let parsedData = dataFetch.data.photos;
    setPage(2);
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
    let parsedData = dataFetch.data.photos;
    setPage(page + 1);
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
        <CarouselPicture />
        <div>
          <p className="picture-title">
            {currentSearch === "" || undefined
              ? "Featured photos"
              : "Photos related to『" + currentSearch + "』"}
          </p>
          {data.length === 0 ? (
            <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
          ) : (
            <div className="pictures">
              {data &&
                data.map((d) => {
                  return <Picture data={d} />;
                })}
            </div>
          )}
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

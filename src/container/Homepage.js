import React, { useState, useEffect } from "react";
import Search from "../components/Search";
import Picture from "../components/Picture";
import { getPhoto, getSearchPhoto } from "../api/photoApi";

const Homepage = () => {
  const [input, setInput] = useState("");
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
      dataFetch = await getPhoto(1);
    } else {
      dataFetch = await getSearchPhoto(currentSearch, 1);
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
    <div style={{ minHeight: "100vh" }}>
      <Search
        search={() => {
          // JS Closure
          setCurrentSearch(input);
        }}
        setInput={setInput}
      />
      <div className="pictures">
        {data &&
          data.map((d) => {
            return <Picture data={d} />;
          })}
      </div>

      <div className="morePicture">
        <button onClick={morepicture}>Load More</button>
      </div>
    </div>
  );
};

export default Homepage;

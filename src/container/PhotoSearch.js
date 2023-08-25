import React, { useState, useEffect } from "react";
import { Empty } from "antd";
import Picture from "../components/Picture";
import { getSearchPhoto } from "../api/photoApi";
import Filiter from "../components/Filter";
import "./PhotoSearch.sass";

const PhotoSearch = () => {
  //State指所有圖片知訊
  let [data, setData] = useState([]);
  let [page, setPage] = useState(1);
  const [language, setLanguage] = useState("");
  let [filterValue, setFilterValue] = useState([]);
  const getUrlString = window.location.href;
  const query = decodeURI(getUrlString.split("/")[6]);
  // 從 pexels api 獲取數據
  const search = async (query, filterList) => {
    const chineseRegex = /[\u4e00-\u9fa5]/;
    let inputeLanguage;
    if (chineseRegex.test(query)) {
      inputeLanguage = "zh-TW";
      setLanguage("zh-TW");
    } else {
      inputeLanguage = "en-US";
      setLanguage("en-US");
    }

    let dataFetch = await getSearchPhoto(
      query,
      1,
      inputeLanguage,
      filterList[0],
      filterList[1],
      filterList[2]
    );
    let parsedData = dataFetch.data.photos;
    setPage(2);
    setData(parsedData);
  };

  // 加載更多圖片
  const morepicture = async () => {
    let dataFetch;
    if (query !== "") {
      dataFetch = await getSearchPhoto(
        query,
        page,
        language,
        filterValue[0],
        filterValue[1],
        filterValue[2]
      );
    }
    let parsedData = dataFetch.data.photos;
    setPage(page + 1);
    setData(data.concat(parsedData));
  };

  // 頁面加載時獲取數據
  useEffect(() => {
    query !== "" && search(query, filterValue);
  }, [query]);

  return (
    <div>
      <Filiter search={search} query={query} setFilterValue={setFilterValue} />
      <div className="content">
        <div>
          <p className="picture-title">{"與『" + query + "』相關的照片"}</p>
          {data.length === 0 ? (
            <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
          ) : (
            <div className="pictures">
              {data &&
                data.map((d) => {
                  return <Picture data={d} width={"300px"} />;
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

export default PhotoSearch;

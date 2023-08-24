import React, { useState, useEffect } from "react";
import { getPhoto, getSearchPhoto } from "../api/photoApi";
import Picture from "../components/Picture";
import FB from "../img/facebook.png";
import Linkedin from "../img/linkedin.png";
import Pinterest from "../img/pinterest.png";
import Twitter from "../img/twitter.png";
import { Link } from "react-router-dom";

import "./Detail.sass";

const Detail = () => {
  let [data, setData] = useState([]);
  let [photo, setPhoto] = useState({});
  let [photoData, setPhotoData] = useState({});
  let [describe, setDescribe] = useState("");
  const getUrlString = window.location.href;
  const id = decodeURI(getUrlString.split("/")[5]);
  const iconList = [
    { img: FB, url: "https://www.facebook.com/sharer.php?u=" },
    {
      img: Linkedin,
      url: "https://www.linkedin.com/sharing/share-offsite/?url=",
    },
    {
      img: Pinterest,
      url: "https://www.pinterest.com/pin/create/button/?url=",
    },
    { img: Twitter, url: "https://twitter.com/intent/tweet?url=" },
  ];
  const getPhotoDetail = async () => {
    let data = await getPhoto(id);
    const photoDescript = data.data.alt;
    setDescribe(photoDescript.charAt(0).toUpperCase() + photoDescript.slice(1));
    setPhotoData(data.data);
    setPhoto(data.data.src.large);
  };
  const getSearch = async (query, filterList) => {
    let dataFetch;
    dataFetch = await getSearchPhoto(describe);
    let parsedData = dataFetch.data.photos;
    setData(parsedData);
  };

  useEffect(() => {
    describe !== "" && getSearch(describe);
    id !== "" && getPhotoDetail(id);
  }, [id, describe]);

  return (
    <div className="content">
      <div className="photo-detail">
        <div className="right">
          <div className="photo">
            <a target="_blank" href={photo}>
              <img src={photo} alt="" />
            </a>
          </div>
        </div>
        <div className="left">
          <p className="photo-title">{describe !== "" && describe}</p>
          <p>作者:&nbsp;{photoData.photographer}</p>
          <p>圖片 ID:&nbsp;{photoData.id}</p>
          <p>
            圖片色系: &nbsp;
            <label
              style={{
                backgroundColor: photoData.avg_color,
                padding: "1px 11px",
              }}
            />
            &nbsp; {photoData.avg_color}
          </p>
          <hr />
          <p
            style={{
              paddingTop: "1.5rem",
              fontSize: "20px",
            }}
          >
            分享此圖片
          </p>

          {/* <div className="scrapbook">
            <div>{getUrlString}</div>
            <a href="navigator.clipboard.writeText(getUrlString)">複製</a>
          </div> */}
          <div className="icon">
            {iconList.map((e) => (
              <a target="_blank" href={e.url + photo}>
                <img src={e.img} alt="" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="text">
        <div className="related-pictures">
          <p className="otherPhoto">相關圖片</p>
          <Link
            to={{
              pathname: `/photo/search/${describe}`,
            }}
          >
            <p className="view">檢視全部</p>
          </Link>
        </div>
        <hr />
      </div>
      <div className="pictures">
        {data &&
          data.slice(0, 4).map((d) => {
            return <Picture data={d} width={"200px"} />;
          })}
      </div>
    </div>
  );
};

export default Detail;

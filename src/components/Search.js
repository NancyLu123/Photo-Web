import React from "react";
import "./Search.sass";
import { Input } from "antd";
import PATH from "../router/pathConstants";
const { Search } = Input;

const PhotoSearch = () => {
  const handelSearch = (value) => {
    if (value !== "") {
      window.location.assign(`/#/photo/search/${value}`);
    }
  };
  return (
    <div className="search">
      <Search
        placeholder="搜尋"
        allowClear
        onSearch={handelSearch}
        style={{
          width: 300,
        }}
      />
    </div>
  );
};

export default PhotoSearch;

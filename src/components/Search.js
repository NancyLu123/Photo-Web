import React from "react";
import "./Search.sass";
import { Input } from "antd";
const { Search } = Input;

const PhotoSearch = ({ setCurrentSearch }) => {
  return (
    <div className="search">
      <Search
        placeholder="搜尋"
        allowClear
        onSearch={(e) => {
          setCurrentSearch(e);
        }}
        style={{
          width: 300,
        }}
      />
    </div>
  );
};

export default PhotoSearch;

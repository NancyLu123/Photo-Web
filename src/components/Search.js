import React from "react";
import "./Search.sass";
import { Input, Space } from "antd";
const { Search } = Input;

const PhotoSearch = ({ search, setInput }) => {
  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="search">
      <input className="input" onChange={inputHandler} type="text" />
      <button onClick={search}>Search</button>
    </div>
  );
};

export default PhotoSearch;

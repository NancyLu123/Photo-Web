import { Photo } from "./Api";
const settings = {
  headers: {
    Accept: "application/json",
    Authorization: "563492ad6f91700001000001ac22187f3df749b5ac359637c75cb9b5",
  },
};

export const getPhoto = (num) =>
  Photo.get(`curated?page=${num}&per_page=15`, settings);

export const getSearchPhoto = (currentSearch, num) =>
  Photo.get(
    `search?query=${currentSearch}&per_page=15&page=${num}&locale=zh-TW`,
    settings
  );

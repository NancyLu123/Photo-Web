import { Photo } from "./api";
const settings = {
  headers: {
    Accept: "application/json",
    Authorization: "563492ad6f91700001000001ac22187f3df749b5ac359637c75cb9b5",
  },
};

export const getPhoto = (id) => Photo.get(`photos/${id}`, settings);

export const getCuratedPhotos = (num) =>
  Photo.get(`curated?page=${num}&per_page=15`, settings);

export const getSearchPhoto = (query, num, orientation, size, color) =>
  Photo.get(
    `search?query=${query}&orientation=${orientation}&size=${size}&color=${color}&per_page=15&page=${num}&locale=zh-TW`,
    settings
  );

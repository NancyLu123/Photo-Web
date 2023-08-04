import axios from "axios";

export const Photo = axios.create({
  baseURL: "https://api.pexels.com/v1/",
});

import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://vn-blog-app.herokuapp.com/api/",
});

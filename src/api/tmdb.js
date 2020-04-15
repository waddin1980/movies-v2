import axios from "axios";

export default axios.create({
  baseURL: "https://api.themoviedb.org/3/movie/now_playing?api_key=cc28bf2af89434d1706a5f06b40b8379"
});
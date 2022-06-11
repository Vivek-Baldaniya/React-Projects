import axios from "axios";

const KEY = "AIzaSyDCs5gozd_uhDXAFroRpsAEULc8--A8YKY";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResult: 5,
    key: KEY,
  },
});

import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: "Client-ID CkB7qEPmnkx2tj2ntfhqJLsePkXKHp72F3Jbj5J3tik",
  },
});

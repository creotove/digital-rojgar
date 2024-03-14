import axios from "axios";

export default axios.create({
  baseURL: "https://digital-rojgar-static.vercel.app/",
  headers: {
    "Content-type": "application/json",
  },
});

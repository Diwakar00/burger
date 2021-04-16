import axios from "axios";

const instance = axios.create({
  baseURL: "https://social-app-1aaab.firebaseio.com/",
});
export default instance;


import axios from "axios";

const movieAPI = axios.create({
  baseURL: "https://www.omdbapi.com",
});

export default movieAPI;
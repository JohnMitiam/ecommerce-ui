import axios from "axios";
import { api } from "src/config/apiEndpoints";

export default axios.create({
  baseURL: api.BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

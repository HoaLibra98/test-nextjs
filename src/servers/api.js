import axios from "axios";
import { baseUrl } from "./url";

const Api = axios.create({
  baseURL: baseUrl,
});

export default Api;

import axios from "axios";
import { VITE_BACKEND_URL } from "../config";

const API = axios.create({
  baseURL: VITE_BACKEND_URL, // ✅ must use REACT_APP_ prefix
  headers: {
    "Content-Type": "application/json",
  },
});

export default API;

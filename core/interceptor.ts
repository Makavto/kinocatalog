import axios from "axios";
import { API_KEY, API_KEY_2 } from "./constants";

export const http = axios.create();

http.interceptors.request.use(req => {
  req.headers = {
    'X-API-KEY': API_KEY,
    'Content-Type': 'application/json; charset=utf-8',
    Accept: 'application/json',
    'Accept-Encoding': 'identity'
  }
  return req
})
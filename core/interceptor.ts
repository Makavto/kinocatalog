import axios from "axios";
import { API_KEY, API_KEY_2, API_KEY_3 } from "./constants";

export const http = axios.create();

http.interceptors.request.use(req => {
  req.headers = {
    'X-API-KEY': API_KEY_3,
    'Content-Type': 'application/json; charset=utf-8',
    Accept: 'application/json',
    'Accept-Encoding': 'identity'
  }
  return req
})
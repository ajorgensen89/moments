import axios from "axios";

axios.defaults.baseURL = "https://drf-api-aj-f1a2d8abfd1f.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;
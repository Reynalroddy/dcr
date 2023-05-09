import axios from "axios";
const authFetch = axios.create({
  baseURL: "https://npc-api.dsaved.com/v0/",
});





authFetch.interceptors.request.use(
  function (req) {
    const token = localStorage.getItem("token-birth");
    // const token= "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VyX0lEIjozLCJMR0FfSUQiOjAsIlJlZ19DZW50ZXJfSUQiOjAsIlVzZXJOYW1lIjoiQm91bmNleSBCIiwiUm9sZV9JRCI6MSwiU3RhdGVfSUQiOjE0LCJFbWFpbCI6InN0YXRlQGVtYWlsLmNvbSIsImlhdCI6MTY3OTMwMTE0MSwiZXhwIjoxNjc5MzgzOTQxfQ.4RsZHEMFxhddZbUHV8sM9mWDMTt-iC_MsiNji81JA0c"
    if (token) {
      // const toks = localStorage.getItem("token");
      req.headers.authorization = `Bearer ${token}`;
      return req;
    }
    return req;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default authFetch;
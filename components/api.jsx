import axios from "axios";

export const api = axios
  .get("https://pokeapi.co/api/v2/pokemon")
  .then((response) => {
    console.log(response);
  });

// export const defaultsHeadersAxios = (token: string) => {
//   api.defaults.headers.common.Authorization = `Bearer ${token}`;
// };

// api.interceptors.response.use(
//   response => response,
//   error => {
//     if (error.response.status === 401) {
//       window.location.href = `https://www.cannect.life/login`
//       localStorage.clear()
//     }
//   }
// )

export default api;

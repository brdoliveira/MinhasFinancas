import axios from "axios";

const baseURL = process.env.REACT_APP_API_URL;

export const httpClient = axios.create({
  baseURL: baseURL,
  withCredentials: true,
});

class ApiService {
  constructor(apiUrl) {
    this.apiUrl = apiUrl;
  }

  static registrarToken(token) {
    if (token) {
      httpClient.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
  }

  post(url, objeto) {
    const requestUrl = `${this.apiUrl}${url}`;
    return httpClient.post(requestUrl, objeto);
  }

  put(url, objeto) {
    const requestUrl = `${this.apiUrl}${url}`;
    return httpClient.put(requestUrl, objeto);
  }

  delete(url) {
    const requestUrl = `${this.apiUrl}${url}`;
    return httpClient.delete(requestUrl);
  }

  get(url) {
    const requestUrl = `${this.apiUrl}${url}`;
    return httpClient.get(requestUrl);
  }
}

export default ApiService;

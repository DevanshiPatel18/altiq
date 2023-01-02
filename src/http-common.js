import axios from 'axios';

export default axios.create({
  baseURL: "http://63ac1dfa34c46cd7ae77dabf.mockapi.io/api/news",
  headers: {
    "Content-type": "application/json"
  }
});

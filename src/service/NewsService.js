import http from "../http-common";

class NewsService {
  getAll() {
    return http.get("/");
  }

  get(id) {
    return http.get(`/${id}`);
  }

  create(data) {
    return http.post("/", data);
  }

  update(id, data) {
    return http.put(`/${id}`, data);
  }

  delete(id) {
    return http.delete(`/${id}`);
  }
  findByTitle = title => {
    return http.get(`/news?title=${title}`);
}

}
export default new NewsService();

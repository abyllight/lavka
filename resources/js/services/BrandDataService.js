import http from "../http-common";

class BrandDataService {
    getAll(){
        return http.get('/brands-all')
    }
    get(id) {
        return http.get(`/brand/${id}`);
    }
}

export default new BrandDataService()

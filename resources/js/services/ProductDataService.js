import http from "../http-common";

class ProductDataService {
    getAll(){
        return http.get('/products-all')
    }
    get(id) {
        return http.get(`/product/${id}`);
    }
}

export default new ProductDataService()

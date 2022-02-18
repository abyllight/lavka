import axios from "axios";
export default axios.create({
    baseURL: 'https://back.eatandfit.kz/api',
    headers: {
        'Content-type': 'application/json'
    }
})

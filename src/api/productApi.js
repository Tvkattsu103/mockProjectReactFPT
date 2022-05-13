import axiosClient from "./axiosClient";
import axios from 'axios';

// api/productApi.js
const productApi = {
    getAll: (params) => {
        const url = 'http://localhost:1337/api/carts';
        return axiosClient.get(url, { params });
    },
    addToCartPage: (product) => {
        const url = `http://localhost:1337/api/carts`
        return axios.post(url, {product})
    }
}
export default productApi;
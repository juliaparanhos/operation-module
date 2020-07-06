import axios from "axios";
import {getToken} from "./auth";

const api = axios.create({
    baseURL: 'http://op.aurora.planoaeventos.com.br/api',
    responseType: 'json',
        headers: {
            'content-type': 'application/json',
            'Accept' : 'application/json',
            'X-Requested-With': 'XMLHttpRequest'
        }
})

api.interceptors.request.use(async config => {
    const token = getToken();
        if (token) {
            config.headers.authorization = `Bearer ${token}`;
        }
    return config;    
})

export default api;
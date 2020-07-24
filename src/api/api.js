import axios from "axios";


    var token = JSON.parse(localStorage.getItem('operation_token'))['access_token']
    const api = axios.create({
        baseURL: `http://op.aurora.planoaeventos.com.br/api`,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    });


 


export default api;
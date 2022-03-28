import axios from "axios";

const baseURL = process.env.NODE_ENV == 'development' ? 'http://localhost:5000' : 'https://blockchain-backend.vercel.app';

const $api = axios.create({
    baseURL: baseURL + '/api',
})
$api.defaults.timeout = 30_000;
$api.interceptors.request.use((config) => {
    // @ts-ignore
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config;
})

export default $api;

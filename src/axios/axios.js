// require('dotenv').config();
import axios from 'axios';

const axiosInstance = axios.create({
    // baseURL: process.env.SERVER_URL, // Your backend base URL
    baseURL: "https://server-order-2.vercel.app/",
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true,// If your backend uses cookies or authentication
});

export default axiosInstance;
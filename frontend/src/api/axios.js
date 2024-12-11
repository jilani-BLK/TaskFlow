import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:5001', // URL de base de l'API backend
    withCredentials: true, // Si tu utilises des cookies ou des sessions
});

export default instance;
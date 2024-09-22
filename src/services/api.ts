import axios from 'axios';

export const api = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params:{
        api_key: "c6bf13b3c6c9e14b9e34629ce875b48c",
        language: "pt-BR",
        include_adult: false,
    },
});
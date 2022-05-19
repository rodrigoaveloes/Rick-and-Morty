import axios from 'axios';
import { useState } from 'react';


const axiosInstance = axios.create({
    baseURL: 'https://rickandmortyapi.com',


});

export const [page, setPage] = useState(1)
export const Api = {

    getAllCharacters: async () =>{
        let response = await axiosInstance.get(`/api/character?page=${page}`);
        await response.data.results;
        return response.data;
    },
    getAllLocations: async () =>{
        let response = await axiosInstance.get('/api/locations');
        await response.data;
        return response.data;
    },

    getAllEpisode: async () =>{
        let response = await axiosInstance.get('/api/episode');
        await response.data;
        return response.data.results;
    }
    
}
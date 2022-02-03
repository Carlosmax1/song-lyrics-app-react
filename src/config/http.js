import axios from "axios";

const apiClient = axios.create({
    baseURL: 'https://api.lyrics.ovh',
});

export default apiClient;

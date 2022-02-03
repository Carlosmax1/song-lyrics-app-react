import apiClient from "./config/http";
import react from "react";

export default async function getSongs(term){
    const res = apiClient.get(`/suggest/${term}`)
    return res;
}
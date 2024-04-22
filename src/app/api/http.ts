import axios from "axios";

export const http = axios.create({
    baseURL: 'https://i5juvmriyb.execute-api.sa-east-1.amazonaws.com/prod/mss-hfx',
});
import axios from "axios";

const Instance = axios.create({
    baseURL: 'https://newsapi.org/v2'
})

export default Instance
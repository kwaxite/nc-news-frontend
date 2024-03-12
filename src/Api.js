import axios from 'axios';

const ncNewsApi = axios.create({
    baseURL:"https://nc-news-api-ty01.onrender.com/api",
})

export const fetchAllArticles = () =>{
    return ncNewsApi.get("/articles").then(({data}) => {
        return data.articles
    })
}
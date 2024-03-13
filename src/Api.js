import axios from 'axios';

const ncNewsApi = axios.create({
    baseURL: "https://nc-news-api-ty01.onrender.com/api",
})

export const fetchAllArticles = () => {
    return ncNewsApi.get("/articles").then(({ data }) => {
        return data.articles
    })
}


export const fetchArticleById = (article_id) => {
    return ncNewsApi.get(`/articles/${article_id}`).then(({ data }) => {
        return data.article
    })
}

export const fetchCommentsByArticleId = (article_id) =>{
    return ncNewsApi.get(`/articles/${article_id}/comments`).then(({ data }) => {
        console.log (data.comments)
        return data.comments
    })
}
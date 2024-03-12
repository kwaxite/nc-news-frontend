import { fetchAllArticles } from "../../Api"
import "../ArticlesList/ArticlesList.css"
import { useEffect } from "react";
import { useState } from "react";

// fetchAllArticles()
// .then((response) => {
//     console.log("from articles")
//     console.log(response);
//   })
//   .catch((err) => {
//     console.log(err);
//   })


export default function ArticlesList(){

    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchAllArticles()
        .then((articlesFromApi) => {
        setArticles(articlesFromApi);
          setIsLoading(false)
        });
      }, [])

      if (isLoading) return <p>Loading...</p>
 
    //   {author: 'tickle122', title: 'Agility Training Drills For Football Players', topic: 'football', article_id: 21, created_at: '2020-10-26T10:05:00.000Z', …}
    return (
        <>
        <div className="header-container">
        <div className="article-list-header">Articles Lists</div>
        </div>
        <ul className="articles-list">
            {articles.map((article, index) =>{
                return(<div className="article-card" key={index}>
                    <h3>Title: {article.title}</h3>
                    <img className="article-image" src={article.article_img_url}/>
                    <p> Author: {article.author}</p>
                    <p> topic: {article.topic}</p>
                    <p> Created at: {article.created_at}</p>
                    <p> Votes: {article.votes}</p>
                    <p> Comment count: {article.comment_count}</p>
                </div>)
            })}

        </ul>
        </>
    )
}


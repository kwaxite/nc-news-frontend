import { fetchAllArticles } from "../../Api";
import "../ArticlesList/ArticlesList.css";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function ArticlesList() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetchAllArticles().then((articlesFromApi) => {
      setArticles(articlesFromApi);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return <p>Loading...</p>;

  return (
    <>
      <div className="header-container">
        <div className="article-list-header">Articles Lists</div>
      </div>
      <ul className="articles-list">
        {articles.map((article, index) => {
          return (
            <div className="article-card" key={index}>
                <Link to= {`/articles/${article.article_id}`}> <h3>Title: {article.title}</h3> </Link>
              
              <img className="article-image" src={article.article_img_url} />
              <p> Author: {article.author}</p>
              <p> topic: {article.topic}</p>
              <p> Created at: {article.created_at}</p>
              <p> Votes: {article.votes}</p>
              <p> Comment count: {article.comment_count}</p>
            </div>
          );
        })}
      </ul>
    </>
  );
}

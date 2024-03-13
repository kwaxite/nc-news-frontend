import { Link, useParams } from "react-router-dom"
import { fetchArticleById } from "../../Api"
import { useState } from "react"
import { useEffect } from "react"
import "../SingleArticle/SingleArticle.css";
import { formatDateAndTime } from "../../Utils";




export default function SingleArticle() {
    const { article_id } = useParams()
    const [article, setArticle] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(true);
        fetchArticleById(article_id).then((articleFromApi) => {
            setArticle(articleFromApi);
            setIsLoading(false);
        });
    }, [article_id]);

    if (isLoading) return <p>Loading...</p>;
    return (
        <>
            <div className="single-article">
                <h1>{article.title}</h1>
                <h3>By {article.author}</h3>
                <img className="article-image" src={article.article_img_url} />
                <p>{article.body}</p>
                <p> Created: {formatDateAndTime(article.created_at)}</p>
                <p>Votes: {article.votes}</p>
                <p>Topic: {article.topic}</p>
                <Link to={`/articles/${article.article_id}/comments`}> <h3>Comments</h3> </Link>
            </div>
        </>
    )
}


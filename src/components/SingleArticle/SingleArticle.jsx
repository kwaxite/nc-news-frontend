import { useParams } from "react-router-dom"
import { fetchArticleById } from "../../Api"
import { useState } from "react"
import { useEffect } from "react"
export default function SingleArticle(){
    const {article_id} = useParams()
    const [article, setArticle] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(true);
        fetchArticleById(article_id).then((articleFromApi) => {
          setArticle(articleFromApi);
          setIsLoading(false);
        });
      }, []);
    
      if (isLoading) return <p>Loading...</p>;
    return (
        <>
        <h1>Single Article</h1>
        <h2>{article.title}</h2>

        </>
    )
}

// fetchArticleById(1)
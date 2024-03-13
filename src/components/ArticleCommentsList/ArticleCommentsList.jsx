import { fetchCommentsByArticleId } from "../../Api";
import "./ArticleCommentsList.css"
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import SingleArticle from "../SingleArticle/SingleArticle";

export default function ArticleCommentsList() {

    console.log("from useParams", useParams())
    const { article_id } = useParams()
    console.log("from article id", article_id)

    const [comments, setComments] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        fetchCommentsByArticleId(article_id).then((commentsFromApi) => {
            setComments(commentsFromApi);
            setIsLoading(false);
        });
    }, []);

    if (isLoading) return <p>Loading...</p>;

    return (
        <>
            <SingleArticle/>
            <div className="comments-header">
                <h1>Comments</h1>
            </div>
            <ul>
                {comments.map((comment, index) => {
                    return (
                        <div className="comment-detail" key={index}>
                            <p className="comment-body">{comment.body}</p>
                            <div className="author-time">
                            <p>{comment.author}</p>
                            <p>{comment.created_at}</p>
                            </div>
                        </div>
                    )
                })}

            </ul>


        </>
    )
}
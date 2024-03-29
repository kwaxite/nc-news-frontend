import { fetchCommentsByArticleId } from "../../Api";
import "./ArticleCommentsList.css"
import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import SingleArticle from "../SingleArticle/SingleArticle";
import { formatDateAndTime } from "../../Utils";
import CommentsAdder from "../CommentsAdder/CommentsAdder";
import UserContext from "../../contexts/UserContext";




export default function ArticleCommentsList() {
    


    const { article_id } = useParams()

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
            <CommentsAdder setComments={setComments}/>
            <ul>
                {comments.map((comment, index) => {
                    return (
                        <div className="comment-detail" key={index}>
                            <p className="comment-body">{comment.body}</p>
                            <div className="author-time">
                            <p>by {comment.author},</p>
                            <p>{" "}</p>
                            <p> {formatDateAndTime(comment.created_at)}</p>
                            </div>
                        </div>
                    )
                })}
            </ul>
        </>
    )
}
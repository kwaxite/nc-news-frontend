import { useParams } from "react-router-dom";
import { postComment } from "../../Api";
import UserContext from "../../contexts/UserContext";
import "./CommentsAdder.css"
import { useState } from "react"
import { useContext } from "react";


export default function CommentsAdder ({setComments})  {
 
    const { article_id } = useParams()
    const {loggedInUser} = useContext(UserContext)
    const [newCommment, setNewComment] = useState("");

    const handleSubmit = (event) =>{
        event.preventDefault();
        postComment(article_id, loggedInUser.username, newCommment).then((newCommentFromApi) =>{
            setNewComment("");
            setComments((currComments) => {
                return [newCommentFromApi,...currComments]
            })
        })
    }

    return(
        <form className="CommentAdder" onSubmit={handleSubmit}>
            <label htmlFor="newComment">Add a comment</label>
            <textarea
                id="newComment"
                multiline = "true"
                value={newCommment}
              
                onChange={(e)=> setNewComment(e.target.value)}
                >

            </textarea>
            <button>Add</button>
        </form>
    )
}
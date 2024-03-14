import "./CommentsAdder.css"
import { useState } from "react"


export default function CommentsAdder ()  {
    const [newCommment, setNewComment] = useState("");
    const handleSubmit = () =>{
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
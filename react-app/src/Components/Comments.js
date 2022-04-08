import {useState} from "react";
import axios from 'axios';

const Comments = ({content, postID}) => {
    const [comment, setComment] = useState();
    const onSubmit = () => {
        axios.post(`http://localhost:3002/post/${postId}/comment`, {comment})
        .then((res) => console.log(res))
        .catch((error) => console.log(error))
    }

    return (
        <div>
            <div>
                {content.map(cmt => (
                    <p>{cmt}</p>
                ))}
            </div>
            <input 
                type="text"
                placeholder="Leave a comment!"
                value={comment}
                onChange={e => setComment(e.target.value)} 
            />
            <div>
                <button onClick={onSubmit}>
                    Submit comment
                </button>
            </div>
        </div>
    )
}

export default Comments;
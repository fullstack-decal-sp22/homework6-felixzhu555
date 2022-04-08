import Comments from "./Comments"

const Post = ({ postID, title, body, comments }) => {
  return (
    <div style={{ textAlign: 'left', marginBottom: '12px'}}>
      <h3>{title}</h3>
      <p>{body}</p>
      <Comments content={comments} postID={postID}/>
    </div>
  )
}

export default Post;

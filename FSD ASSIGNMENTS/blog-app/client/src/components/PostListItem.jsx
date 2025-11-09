import { Link } from "react-router-dom";

export default function PostListItem({ post, onDelete }) {
  return (
    <div className="card">
      <h3><Link to={`/post/${post._id}`}>{post.title}</Link></h3>
      <p>{post.author} — {new Date(post.createdAt).toLocaleString()}</p>
      <Link to={`/edit/${post._id}`} className="btn">Edit</Link>
      <button className="btn" style={{background:'#d7263d'}} onClick={() => onDelete(post._id)}>Delete</button>
    </div>
  );
}

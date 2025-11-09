import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import api from "../services/api";

export default function ViewPost() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    api.get(`/posts/${id}`).then(({ data }) => setPost(data));
  }, [id]);

  if (!post) return <div className="card">Loading…</div>;

  return (
    <div className="card">
      <h2>{post.title}</h2>
      <p>{post.author}</p>
      <p>{new Date(post.createdAt).toLocaleString()}</p>
      <p>{post.content}</p>
      <Link to={`/edit/${post._id}`} className="btn">Edit</Link>
      <Link to="/" className="btn">Back</Link>
    </div>
  );
}

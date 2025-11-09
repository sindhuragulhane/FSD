import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../services/api";
import PostForm from "../components/PostForm";

export default function EditPost() {
  const { id } = useParams();
  const nav = useNavigate();
  const [post, setPost] = useState(null);

  useEffect(() => {
    api.get(`/posts/${id}`).then(({ data }) => setPost(data));
  }, [id]);

  const update = async (form) => {
    await api.put(`/posts/${id}`, form);
    nav(`/post/${id}`);
  };

  if (!post) return <div className="card">Loading…</div>;
  return <PostForm initial={post} onSubmit={update} />;
}

import { useNavigate } from "react-router-dom";
import api from "../services/api";
import PostForm from "../components/PostForm";

export default function NewPost() {
  const nav = useNavigate();
  const create = async (form) => {
    const { data } = await api.post("/posts", form);
    nav(`/post/${data._id}`);
  };
  return <PostForm onSubmit={create} />;
}

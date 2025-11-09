import PostForm from "../components/PostForm";
import { useNavigate } from "react-router-dom";

export default function NewPost() {
  const navigate = useNavigate();
  const handleSuccess = (post) => {
    navigate(`/post/${post._id}`);
  };

  return (
    <div className="container">
      <PostForm onSuccess={handleSuccess} />
    </div>
  );
}


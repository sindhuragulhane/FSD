import { useState } from "react";
import api from "../services/api";

export default function PostForm({ onSuccess }) {
  const [form, setForm] = useState({
    title: "",
    author: "",
    content: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.title.trim() || !form.content.trim()) {
      alert("Please fill in Title and Content");
      return;
    }
    try {
      setLoading(true);
      const res = await api.post("/posts", form);
      alert("✅ Post saved successfully!");
      setForm({ title: "", author: "", content: "" });
      if (onSuccess) onSuccess(res.data);
    } catch (err) {
      alert("❌ Failed to save post: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card form-card">
      <h2>Create New Post</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="title"
          placeholder="Post Title"
          value={form.title}
          onChange={handleChange}
          className="input"
        />
        <input
          name="author"
          placeholder="Author (optional)"
          value={form.author}
          onChange={handleChange}
          className="input"
        />
        <textarea
          name="content"
          placeholder="Write your post content here..."
          value={form.content}
          onChange={handleChange}
          className="textarea"
        />
        <button type="submit" className="btn" disabled={loading}>
          {loading ? "Saving..." : "Save Post"}
        </button>
      </form>
    </div>
  );
}

import { useState, useEffect } from "react";
import BlogList from "./bloglist";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "My Blog1", body: "Body of Blog1", author: "Cyrus", id: 1 },
    { title: "My Blog2", body: "Body of Blog2", author: "Zeus", id: 2 },
    { title: "My Blog3", body: "Body of Blog3", author: "Apollo", id: 3 }
  ]);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlogs);
  }

  useEffect(() => {
    console.log('use effect ran');
    console.log(blogs);
  }, [blogs]);

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete} />
    </div>
  );
}

export default Home;
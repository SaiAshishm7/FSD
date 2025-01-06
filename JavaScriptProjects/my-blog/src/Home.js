import { useState } from "react";
import BlogList from "./bloglist";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "My Blog1", body: "Body of Blog1", author: "Cyrus", id: 1 },
    { title: "My Blog2", body: "Body of Blog2", author: "Zeus", id: 2 },
    { title: "My Blog3", body: "Body of Blog3", author: "Cyrus", id: 3 }
  ]);

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs!" />
      <BlogList blogs={blogs.filter((blog) => blog.author === 'Cyrus')} title="Cyrus's blogs" />
    </div>
  );
}

export default Home;
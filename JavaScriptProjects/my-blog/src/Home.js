import { useState } from "react";

const Home = () => {
  const [blogs] = useState([
    { title: "My Blog1", body: "Body of Blog1", author: "Cyrus", id: 1 },
    { title: "My Blog2", body: "Body of Blog2", author: "Zeus", id: 2 },
    { title: "My Blog3", body: "Body of Blog3", author: "Apollo", id: 3 }
  ]);

  return (
    <div className="home">
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written by: {blog.author}</p>
        </div>
      ))}
    </div>
  );
}

export default Home;
import React, { useState, useEffect } from "react";

const BlogDisplay = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);

  // Simulated data for blogs
  const blogData = [
    {
      id: 1,
      title: "Blog 1",
      content:
        "Content for Blog 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imageUrl: "https://via.placeholder.com/10",
    },
    {
      id: 2,
      title: "Blog 2",
      content:
        "Content for Blog 2. Ut aliquet dui sed massa consequat efficitur.",
      imageUrl: "https://via.placeholder.com/100",
    },
    {
      id: 3,
      title: "Blog 3",
      content:
        "Content for Blog 3. Vivamus consequat justo vitae odio scelerisque, vel pellentesque arcu pellentesque.",
      imageUrl: "https://via.placeholder.com/10",
    },
  ];

  useEffect(() => {
    // Hide the blog content when a new blog is selected
    if (selectedBlog) {
      setSelectedBlog(null);
    }
  }, []);

  const handleClick = (blogId) => {
    const selected = blogData.find((blog) => blog.id === blogId);
    setSelectedBlog(selected);
  };

  const handleReadMoreClick = (event, blogId) => {
    // Stop event propagation to prevent the handleClick function from being triggered
    event.stopPropagation();
    handleClick(blogId);
  };

  return (
    <div>
      <h2>Select a Blog:</h2>
      <div className="card-container">
        {blogData.map((blog) => (
          <div
            key={blog.id}
            className="card"
            onClick={() => handleClick(blog.id)}
          >
            <h3>{blog.title}</h3>
            <img src={blog.imageUrl} alt={blog.title} />
            {selectedBlog && selectedBlog.id === blog.id && (
              <p>{blog.content}</p>
            )}
            <button onClick={(e) => handleReadMoreClick(e, blog.id)}>
              {selectedBlog && selectedBlog.id === blog.id
                ? "Show Less"
                : "Read More"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogDisplay;

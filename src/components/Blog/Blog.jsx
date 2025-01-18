import React, { useEffect, useState } from "react";
import "./blog.css";
import axios from "axios";
const Blog = () => {
  const [blogData, setBlogData] = useState([]);

  const fetchBlogs = async () => {
    try {
      const response = await axios.get(
        "https://sonicadminbackend.vercel.app/api/getblog"
      );
      setBlogData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const formatDate = (isoDate) => {
    const options = { year: "numeric", month: "long", day: "numeric" }; // E.g., January 18, 2025
    return new Date(isoDate).toLocaleDateString(undefined, options);
  };

  return (
    <div className="blog-section">
      <div className="container">
        <div className="d-flex justify-content-between">
          {blogData.length > 0 ? (
            blogData
              .filter((blog) => blog.category === "ankitkumarpanda") 
              .map((blog, index) => (
                <div key={index} className="card-blog">
                  <p className="">{blog.name}</p>
                  <p>{blog.desc}</p>
                  <p>{formatDate(blog.date)}</p>
                </div>
              ))
          ) : (
            <p>No blogs available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Blog;

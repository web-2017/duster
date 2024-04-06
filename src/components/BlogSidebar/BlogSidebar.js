import React from "react";
import { Link } from "react-router-dom";
import about from "../../assets/blog/about-widget.jpg";
import blogs from "../../api/blogs";

const SubmitHandler = (e) => {
  e.preventDefault();
};

const ClickHandler = () => {
  window.scrollTo(10, 0);
};

const BlogSidebar = (props) => {
  return (
    <div className={`col col-lg-4 col-12 ${props.blLeft}`}>
      <div className="blog-sidebar">
        <div className="widget about-widget">
          <h3>About us</h3>
          <div className="img-holder">
            <img src={about} alt="" />
          </div>
          <p>
            Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt.
            Duis leo. Sed fringilla mauris sit
          </p>
          <Link onClick={ClickHandler} to="/blog">
            More about us
          </Link>
        </div>
        <div className="widget search-widget">
          <h3>Search</h3>
          <form onSubmit={SubmitHandler}>
            <div>
              <input
                type="text"
                className="form-control"
                placeholder="Search Post.."
              />
              <button type="submit">
                <i className="ti-search"></i>
              </button>
            </div>
          </form>
        </div>
        <div className="widget category-widget">
          <h3>Categories</h3>
          <ul>
            <li>
              <Link onClick={ClickHandler} to="/blog">
                Car washing <span>(2)</span>
              </Link>
            </li>
            <li>
              <Link onClick={ClickHandler} to="/blog">
                House cleaning <span>(5)</span>
              </Link>
            </li>
            <li>
              <Link onClick={ClickHandler} to="/blog">
                Window cleaning <span>(8)</span>
              </Link>
            </li>
            <li>
              <Link onClick={ClickHandler} to="/blog">
                Renovation <span>(10)</span>
              </Link>
            </li>
            <li>
              <Link onClick={ClickHandler} to="/blog">
                Carpet cleaning <span>(8)</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="widget recent-post-widget">
          <h3>Recent posts</h3>
          <div className="posts">
            {blogs.map((blog, bl) => (
              <div className="post" key={bl}>
                <div className="img-holder">
                  <img src={blog.screens} alt="" />
                </div>
                <div className="details">
                  <h4>
                    <Link
                      onClick={ClickHandler}
                      to={`/blog-single/${blog.slug}`}
                    >
                      {blog.title}
                    </Link>
                  </h4>
                  <span className="date">
                    <i className="ti-timer"></i>
                    {blog.create_at}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="widget tag-widget">
          <h3>Tags</h3>
          <ul>
            <li>
              <Link onClick={ClickHandler} to="/blog">
                Cleaning
              </Link>
            </li>
            <li>
              <Link onClick={ClickHandler} to="/blog">
                Industry
              </Link>
            </li>
            <li>
              <Link onClick={ClickHandler} to="/blog">
                Window
              </Link>
            </li>
            <li>
              <Link onClick={ClickHandler} to="/blog">
                Carpet
              </Link>
            </li>
            <li>
              <Link onClick={ClickHandler} to="/blog">
                Car wash
              </Link>
            </li>
            <li>
              <Link onClick={ClickHandler} to="/blog">
                Renovation
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BlogSidebar;

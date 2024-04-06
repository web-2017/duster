import React from "react";
import { Link } from "react-router-dom";
import blog3 from "../../assets/blog-details/comments-author/img-1.jpg";
import blog4 from "../../assets/blog-details/comments-author/img-2.jpg";
import blog5 from "../../assets/blog-details/comments-author/img-3.jpg";
import blog6 from "../../assets/blog-details/author.jpg";
import blogs from "../../api/blogs";
import { useParams } from "react-router-dom";
import BlogSidebar from "../BlogSidebar/BlogSidebar.js";

const BlogSingle = (props) => {
  const { slug } = useParams();

  const BlogDetails = blogs.find((item) => item.slug === slug);

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <section className="blog-single-section section-padding">
      <div className="container">
        <div className="row">
          <div className={`col col-lg-8 col-12 ${props.blRight}`}>
            <div className="blog-content">
              <div className="post format-standard-image">
                <div className="entry-media">
                  <img src={BlogDetails.blogSingleImg} alt="" />
                </div>
                <ul className="entry-meta">
                  <li>
                    <Link to="/blog-single/Consulting-Success-is-the-most-comprehensive-learning">
                      {BlogDetails.author}
                    </Link>
                  </li>
                  <li>
                    <Link to="/blog-single/Consulting-Success-is-the-most-comprehensive-learning">
                      {BlogDetails.create_at}
                    </Link>
                  </li>
                  <li>
                    <Link to="/blog-single/Consulting-Success-is-the-most-comprehensive-learning">
                      {BlogDetails.comment} Comments
                    </Link>
                  </li>
                </ul>
                <h2>{BlogDetails.title}</h2>
                <p>
                  Above it there hung a picture that he had recently cut out of
                  an illustrated magazine and housed in a nice, gilded frame. It
                  showed a lady fitted out with a fur hat and fur boa who sat
                  upright, raising a heavy fur muff that covered the whole of
                  her lower{" "}
                </p>
                <p>
                  Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur
                  ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.
                  Maecenas tempus, tellus eget condimentum rhoncus, sem quam
                  semper libero, sit amet adipiscing sem neque sed ipsum. Nam
                  quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.
                  Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien
                  ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet
                  orci eget eros faucibus tincidunt. Duis leo. Sed fringilla
                  mauris sit amet nibh. Donec sodales sagittis magna. Sed
                  consequat, leo eget bibendum sodales, augue velit cursus
                  nunc,feugiat a, tellus. Phasellus viverra nulla ut metus
                  varius laoreet
                </p>
                <h3>
                  Cranky old comics genius. But here's the thing — given the way
                  Hollywood has treated his work
                </h3>
                <p>
                  Vivamus elementum semper nisi. Aenean vulputate eleifend
                  tellus. Aenean leo ligula, porttitor eu, consequat vitae,
                  eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra
                  quis, feugiat a, tellus. Phasellus viverra nulla ut metus
                  varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam
                  ultricies nisi vel augue. Curabitur ullamcorper ultricies
                  nisi.{" "}
                </p>
                <blockquote>
                  Nec odio et ante tincidunt tempus. Donec vitae sapien ut
                  libero venenatis faucibus. Nullam quis ante. Etiam sit amet
                  orci eget eros faucibus tincidunt. Duis leo. Sed fringilla
                  mauris sit amet nibh.
                  <span className="quoter">- Jhone dow</span>
                </blockquote>
              </div>

              <div className="tag-share clearfix">
                <div className="tag">
                  <span>Tags: </span>
                  <ul>
                    <li>
                      <Link to="/blog-single/Our-expert-service-provider-make-your-home-pest">
                        House cleaning
                      </Link>
                    </li>
                    <li>
                      <Link to="/blog-single/Our-expert-service-provider-make-your-home-pest">
                        Carpet cleaning
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="share">
                  <span>Share: </span>
                  <ul>
                    <li>
                      <Link to="/blog-single/Our-expert-service-provider-make-your-home-pest">
                        <i className="ti-facebook"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="/blog-single/Our-expert-service-provider-make-your-home-pest">
                        <i className="ti-twitter-alt"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="/blog-single/Our-expert-service-provider-make-your-home-pest">
                        <i className="ti-linkedin"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="/blog-single/Our-expert-service-provider-make-your-home-pest">
                        <i className="ti-instagram"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="author-box">
                <div className="author-avatar">
                  <Link
                    to="/blog-single/Consulting-Success-is-the-most-comprehensive-learning"
                    target="_blank"
                  >
                    <img src={blog6} alt="" />
                  </Link>
                </div>
                <div className="author-content">
                  <Link
                    to="/blog-single/Consulting-Success-is-the-most-comprehensive-learning"
                    className="author-name"
                  >
                    Author: Jenny Watson
                  </Link>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis.
                  </p>
                  <div className="socials">
                    <ul className="social-link">
                      <li>
                        <Link to="/blog-single/Consulting-Success-is-the-most-comprehensive-learning">
                          <i className="ti-facebook"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="/blog-single/Consulting-Success-is-the-most-comprehensive-learning">
                          <i className="ti-twitter-alt"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="/blog-single/Consulting-Success-is-the-most-comprehensive-learning">
                          <i className="ti-linkedin"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="/blog-single/Consulting-Success-is-the-most-comprehensive-learning">
                          <i className="ti-instagram"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="more-posts">
                <div className="previous-post">
                  <Link to="/blog-single/Consulting-Success-is-the-most-comprehensive-learning">
                    <span className="post-control-link">Previous Post</span>
                    <span className="post-name">
                      Sed consequat, leo eget bibendum sodales, augue velit
                      cursus nunc
                    </span>
                  </Link>
                </div>
                <div className="next-post">
                  <Link to="/blog-single/Consulting-Success-is-the-most-comprehensive-learning">
                    <span className="post-control-link">Next Post</span>
                    <span className="post-name">
                      {" "}
                      Sed fringilla mauris sit amet nibh donec sodales sagittis
                      magna.
                    </span>
                  </Link>
                </div>
              </div>

              <div className="comments-area">
                <div className="comments-section">
                  <h3 className="comments-title">Comments</h3>
                  <ol className="comments">
                    <li
                      className="comment even thread-even depth-1"
                      id="comment-1"
                    >
                      <div id="div-comment-1">
                        <div className="comment-theme">
                          <div className="comment-image">
                            <img src={blog3} alt="" />
                          </div>
                        </div>
                        <div className="comment-main-area">
                          <div className="comment-wrapper">
                            <div className="comments-meta">
                              <h4>
                                John Abraham{" "}
                                <span className="comments-date">
                                  January 12,2022 At 9.00am
                                </span>
                              </h4>
                            </div>
                            <div className="comment-area">
                              <p>
                                I will give you a complete account of the
                                system, and expound the actual teachings of the
                                great explorer of the truth,{" "}
                              </p>
                              <div className="comments-reply">
                                <Link
                                  className="comment-reply-link"
                                  to="/blog-single/Consulting-Success-is-the-most-comprehensive-learning"
                                >
                                  <span>Reply</span>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <ul className="children">
                        <li className="comment">
                          <div>
                            <div className="comment-theme">
                              <div className="comment-image">
                                <img src={blog4} alt="" />
                              </div>
                            </div>
                            <div className="comment-main-area">
                              <div className="comment-wrapper">
                                <div className="comments-meta">
                                  <h4>
                                    Lily Watson{" "}
                                    <span className="comments-date">
                                      January 12,2022 At 9.00am
                                    </span>
                                  </h4>
                                </div>
                                <div className="comment-area">
                                  <p>
                                    I will give you a complete account of the
                                    system, and expound the actual teachings of
                                    the great explorer of the truth,{" "}
                                  </p>
                                  <div className="comments-reply">
                                    <Link
                                      className="comment-reply-link"
                                      to="/blog-single/Consulting-Success-is-the-most-comprehensive-learning"
                                    >
                                      <span>Reply</span>
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <ul>
                            <li className="comment">
                              <div>
                                <div className="comment-theme">
                                  <div className="comment-image">
                                    <img src={blog5} alt="" />
                                  </div>
                                </div>
                                <div className="comment-main-area">
                                  <div className="comment-wrapper">
                                    <div className="comments-meta">
                                      <h4>
                                        John Abraham{" "}
                                        <span className="comments-date">
                                          January 12,2022 At 9.00am
                                        </span>
                                      </h4>
                                    </div>
                                    <div className="comment-area">
                                      <p>
                                        I will give you a complete account of
                                        the system, and expound the actual
                                        teachings of the great explorer of the
                                        truth,{" "}
                                      </p>
                                      <div className="comments-reply">
                                        <Link
                                          className="comment-reply-link"
                                          to="/blog-single/Consulting-Success-is-the-most-comprehensive-learning"
                                        >
                                          <span>Reply</span>
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="comment">
                      <div>
                        <div className="comment-theme">
                          <div className="comment-image">
                            <img src={blog3} alt="" />
                          </div>
                        </div>
                        <div className="comment-main-area">
                          <div className="comment-wrapper">
                            <div className="comments-meta">
                              <h4>
                                John Abraham{" "}
                                <span className="comments-date">
                                  January 12,2022 At 9.00am
                                </span>
                              </h4>
                            </div>
                            <div className="comment-area">
                              <p>
                                I will give you a complete account of the
                                system, and expound the actual teachings of the
                                great explorer of the truth,{" "}
                              </p>
                              <div className="comments-reply">
                                <Link
                                  className="comment-reply-link"
                                  to="/blog-single/Consulting-Success-is-the-most-comprehensive-learning"
                                >
                                  <span>Reply</span>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ol>
                </div>
                <div className="comment-respond">
                  <h3 className="comment-reply-title">Post Comments</h3>
                  <form
                    onSubmit={submitHandler}
                    id="commentform"
                    className="comment-form"
                  >
                    <div className="form-textarea">
                      <textarea
                        id="comment"
                        placeholder="Write Your Comments..."
                      ></textarea>
                    </div>
                    <div className="form-inputs">
                      <input placeholder="Website" type="url" />
                      <input placeholder="Name" type="text" />
                      <input placeholder="Email" type="email" />
                    </div>
                    <div className="form-submit">
                      <input id="submit" value="Post Comment" type="submit" />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <BlogSidebar blLeft={props.blLeft} />
        </div>
      </div>
    </section>
  );
};

export default BlogSingle;

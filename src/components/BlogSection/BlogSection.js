import React from "react";
import blogs from '../../api/blogs'
import { Link } from "react-router-dom";


const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const BlogSection = () => {
    return (
        <section className="blog-section section-padding">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col col-xl-6  col-lg-8 col-md-10 col-12">
                        <div className="section-title">
                            <span>Recent News</span>
                            <h2>Our Company News</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col col-xs-12">
                        <div className="blog-grids clearfix">
                            {blogs.map((blog, bl) => (
                                <div className="grid" key={bl}>
                                    <div className="entry-meta">
                                        <div className="author">
                                            <img src={blog.screens} alt="" />
                                        </div>
                                        <h4>Jhone Miche</h4>
                                        <p className="date">{blog.create_at}</p>
                                    </div>
                                    <div className="entry-details">
                                        <h3><Link onClick={ClickHandler} to={`/blog-single/${blog.slug}`}>{blog.title}</Link></h3>
                                        <p>{blog.description}</p>
                                    </div>
                                    <div className="overlay">
                                        <div className="middle">
                                            <Link onClick={ClickHandler} to={`/blog-single/${blog.slug}`} className="theme-btn">Read More</Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BlogSection;
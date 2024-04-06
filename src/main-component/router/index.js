import React from 'react';
import { BrowserRouter, Routes, Route, } from "react-router-dom";

import Homepage from '../HomePage/HomePage'
import HomePage2 from '../HomePage2/HomePage2';
import HomePage3 from '../HomePage3/HomePage3';
import AboutPage from '../AboutPage/AboutPage';
import TestimonialPage from '../TestimonialPage/TestimonialPage';
import TestimonialPage2 from '../TestimonialPage2/TestimonialPage2';
import ServicePage from '../ServicePage/ServicePage';
import ServicePageS2 from '../ServicePageS2/ServicePageS2';
import ServiceSinglePage from '../ServiceSinglePage/ServiceSinglePage';
import ProjectPage from '../ProjectPage/ProjectPage';
import ProjectPageS2 from '../ProjectPageS2/ProjectPageS2';
import ProjectSinglePage from '../ProjectSinglePage/ProjectSinglePage';
import BlogPage from '../BlogPage/BlogPage'
import BlogPageLeft from '../BlogPageLeft/BlogPageLeft'
import BlogPageFullwidth from '../BlogPageFullwidth/BlogPageFullwidth'
import BlogDetails from '../BlogDetails/BlogDetails'
import BlogDetailsLeftSiide from '../BlogDetailsLeftSiide/BlogDetailsLeftSiide'
import BlogDetailsFull from '../BlogDetailsFull/BlogDetailsFull'
import FaqPage from '../FaqPage';
import ContactPage from '../ContactPage/ContactPage';
import ErrorPage from '../ErrorPage/ErrorPage';


const AllRoute = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="home" element={<Homepage />} />
          <Route path="home-2" element={<HomePage2 />} />
          <Route path="home-3" element={<HomePage3 />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="testimonials" element={<TestimonialPage />} />
          <Route path="testimonials-s2" element={<TestimonialPage2 />} />
          <Route path="faq" element={<FaqPage />} />
          <Route path="services" element={<ServicePage />} />
          <Route path="services-s2" element={<ServicePageS2 />} />
          <Route path="service-single/:slug" element={<ServiceSinglePage />} />
          <Route path="projects" element={<ProjectPage />} />
          <Route path="projects-s2" element={<ProjectPageS2 />} />
          <Route path="project-single/:slug" element={<ProjectSinglePage />} />
          <Route path='blog' element={<BlogPage />} />
          <Route path='blog-left-sidebar' element={<BlogPageLeft />} />
          <Route path='blog-fullwidth' element={<BlogPageFullwidth />} />
          <Route path='blog-single/:slug' element={<BlogDetails />} />
          <Route path='blog-single-left-sidebar/:slug' element={<BlogDetailsLeftSiide />} />
          <Route path='blog-single-fullwidth/:slug' element={<BlogDetailsFull />} />
          <Route path='404' element={<ErrorPage />} />
          <Route path='contact' element={<ContactPage />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default AllRoute;

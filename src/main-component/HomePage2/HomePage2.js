import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar'
import Hero2 from '../../components/hero2/Hero2';
import ServiceSectionS2 from '../../components/ServiceSectionS2/ServiceSectionS2';
import About2 from '../../components/about2/about2';
import WhyChoose from '../../components/WhyChoose/WhyChoose';
import WorkProcess from '../../components/WorkProcess/WorkProcess';
import ProjectSection from '../../components/ProjectSection/ProjectSection';
import Testimonial2 from '../../components/Testimonial2/Testimonial2';
import CtaSection from '../../components/CtaSection/CtaSection';
import BlogSection from '../../components/BlogSection/BlogSection';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';

const HomePage2 = () => {
    return (
        <Fragment>
            <Navbar hclass={'header-style-2'} />
            <Hero2 />
            <ServiceSectionS2 />
            <About2 />
            <WhyChoose />
            <WorkProcess />
            <ProjectSection />
            <Testimonial2 />
            <CtaSection />
            <BlogSection />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default HomePage2;
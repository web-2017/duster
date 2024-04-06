import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar'
import Hero3 from '../../components/hero3/Hero3';
import ServiceSection from '../../components/ServiceSection/ServiceSection';
import About3 from '../../components/about3/about3';
import WhyChoose from '../../components/WhyChoose/WhyChoose';
import WorkProcess from '../../components/WorkProcess/WorkProcess';
import ProjectSectionS2 from '../../components/ProjectSectionS2/ProjectSectionS2';
import Testimonial from '../../components/Testimonial/Testimonial';
import Pricing from '../../components/PricingSection/PricingSection';
import CtaSection from '../../components/CtaSection/CtaSection';
import BlogSection from '../../components/BlogSection/BlogSection';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';

const HomePage3 = () => {
    return (
        <Fragment>
            <Navbar hclass={'header-style-2'}/>
            <Hero3 />
            <ServiceSection sClass={'services-section-s3'}/>
            <About3 />
            <WhyChoose />
            <WorkProcess />
            <ProjectSectionS2 />
            <Testimonial />
            <Pricing />
            <CtaSection />
            <BlogSection />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default HomePage3;
import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../components/hero/hero';
import ServiceSection from '../../components/ServiceSection/ServiceSection';
import About from '../../components/about/about';
import WhyChoose from '../../components/WhyChoose/WhyChoose';
import WorkProcess from '../../components/WorkProcess/WorkProcess';
import ProjectSection from '../../components/ProjectSection/ProjectSection';
import Testimonial from '../../components/Testimonial/Testimonial';
import Pricing from '../../components/PricingSection/PricingSection';
import CtaSection from '../../components/CtaSection/CtaSection';
import BlogSection from '../../components/BlogSection/BlogSection';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';

const HomePage = () => {
    return (
        <Fragment>
            <Navbar hclass={'header-style-1'}/>
            <Hero />
            <ServiceSection />
            <About />
            <WhyChoose />
            <WorkProcess />
            <ProjectSection />
            <Testimonial />
            <Pricing />
            <CtaSection />
            <BlogSection />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default HomePage;
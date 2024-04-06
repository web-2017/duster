import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import About from '../../components/about/about';
import WhyChoose from '../../components/WhyChoose/WhyChoose';
import WorkProcess from '../../components/WorkProcess/WorkProcess';
import Testimonial from '../../components/Testimonial/Testimonial';
import TeamSection from '../../components/TeamSection/TeamSection';
import PartnerSection from '../../components/PartnerSection/PartnerSection';
import Pricing from '../../components/PricingSection/PricingSection';
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';


const AboutPage = () => {
    return (
        <Fragment>
            <Navbar hclass={'header-style-1'}/>
            <PageTitle pageTitle={'About Us'}/>
            <About abClass={'about-pg-about-section'}/>
            <WhyChoose />
            <WorkProcess />
            <TeamSection/>
            <PartnerSection/>
            <Testimonial tClass={'about-pg-testimonials-section'} />
            <Pricing />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default AboutPage;

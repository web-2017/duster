import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar'
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import Testimonial2 from '../../components/Testimonial2/Testimonial2';
import Footer from '../../components/footer/Footer';

const TestimonialPage2 = (props) => {

    return (
        <Fragment>
            <Navbar hclass={'header-style-1'}/>
            <PageTitle pageTitle={'Testimonials'} pagesub={'Testimonials'} />
            <Testimonial2 tClass={'testimonials-pg-section-s2'}/>
            <Footer/>
            <Scrollbar />
        </Fragment>
    )
};
export default TestimonialPage2;

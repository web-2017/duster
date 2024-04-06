import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import Contactpage from '../../components/Contactpage/Contactpage'
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';

const ContactPage =() => {
    return(
        <Fragment>
           <Navbar hclass={'header-style-1'}/>
            <PageTitle pageTitle={'Contact Us'}/> 
            <Contactpage/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default ContactPage;


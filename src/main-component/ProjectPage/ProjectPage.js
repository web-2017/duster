import React, {Fragment} from 'react';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import ProjectSection from '../../components/ProjectSection/ProjectSection'
import Footer from '../../components/footer/Footer';

const ProjectPage =() => {
    return(
        <Fragment>
            <Navbar hclass={'header-style-1'} />
            <PageTitle pageTitle={'Projects'} pagesub={'Project'}/> 
            <ProjectSection prClass={'projects-pg-section section-padding'}/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default ProjectPage;

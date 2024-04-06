import React, {Fragment} from 'react';
import { useParams } from 'react-router-dom'
import blogs from '../../api/blogs'
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import BlogSingle from '../../components/BlogDetails/BlogSingle.js'
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';

const BlogDetailsFull =() => {

    const { slug } = useParams()

    const BlogDetails = blogs.find(item => item.slug === slug)

    return(
        <Fragment>
            <Navbar hclass={'header-style-1'}/>
            <PageTitle pageTitle={BlogDetails.title} pagesub={'Blog'} />
            <BlogSingle blLeft={'d-none'} blRight={'col-lg-10 offset-lg-1'}/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default BlogDetailsFull;
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import MobileMenu from '../MobileMenu/MobileMenu'
import HeaderTopbar from '../HeaderTopbar/HeaderTopbar';
import Logo from '../../images/logo.png'

const Header = (props) => {
    const [menuActive, setMenuState] = useState(false);

    const SubmitHandler = (e) => {
        e.preventDefault()
    }

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <header id="header" className={`site-header ${props.hclass}`}>
            <HeaderTopbar/>
            <nav className="navigation navbar navbar-expand-lg navbar-light">
                <div className="container">
                    <div className="navbar-header">
                        <MobileMenu />
                        <Link onClick={ClickHandler} className="navbar-brand" to="/home"><img src={Logo} alt="" /></Link>
                    </div>
                    <div id="navbar" className="collapse navbar-collapse navigation-holder">
                        <ul className="nav navbar-nav">
                            <li className="menu-item-has-children">
                                <Link onClick={ClickHandler} to="/">Home</Link>
                                <ul className="sub-menu">
                                    <li><Link onClick={ClickHandler} to="/home">Home Default</Link></li>
                                    <li><Link onClick={ClickHandler} to="/home-2">Home Style 2</Link></li>
                                    <li><Link onClick={ClickHandler} to="/home-3">Home Style 3</Link></li>
                                </ul>
                            </li>
                            <li className="menu-item-has-children">
                                <Link onClick={ClickHandler} to="/">Pages</Link>
                                <ul className="sub-menu">
                                    <li><Link onClick={ClickHandler} to="/about">About</Link></li>
                                    <li><Link onClick={ClickHandler} to="/contact">Contact</Link></li>
                                    <li><Link onClick={ClickHandler} to="/testimonials">Testimonials</Link></li>
                                    <li><Link onClick={ClickHandler} to="/testimonials-s2">Testimonials Style 2</Link></li>
                                    <li><Link onClick={ClickHandler} to="/404">404</Link></li>
                                    <li><Link onClick={ClickHandler} to="/faq">FAQ</Link></li>
                                </ul>
                            </li>
                            <li className="menu-item-has-children">
                                <Link onClick={ClickHandler} to="/">Services</Link>
                                <ul className="sub-menu">
                                    <li><Link onClick={ClickHandler} to="/services">Services</Link></li>
                                    <li><Link onClick={ClickHandler} to="/services-s2">Services Style 2</Link></li>
                                    <li><Link onClick={ClickHandler} to="/service-single/Home-Cleaning">Home Cleaning</Link></li>
                                    <li><Link onClick={ClickHandler} to="/service-single/Office-Cleaning">Office Cleaning</Link></li>
                                    <li><Link onClick={ClickHandler} to="/service-single/Window-Cleaning">Window Cleaning</Link></li>
                                    <li><Link onClick={ClickHandler} to="/service-single/Carpet-Cleaning">Carpet Cleaning</Link></li>
                                </ul>
                            </li>
                            <li className="menu-item-has-children">
                                <Link onClick={ClickHandler} to="/">Projects</Link>
                                <ul className="sub-menu">
                                    <li><Link onClick={ClickHandler} to="/projects">Projects</Link></li>
                                    <li><Link onClick={ClickHandler} to="/projects-s2">Projects Style 2</Link></li>
                                    <li><Link onClick={ClickHandler} to="/project-single/Express">Project Single</Link></li>
                                </ul>
                            </li>
                            <li className="menu-item-has-children">
                                <Link onClick={ClickHandler} to="/">Blog</Link>
                                <ul className="sub-menu">
                                    <li><Link onClick={ClickHandler} to="/blog">Blog Default</Link></li>
                                    <li><Link onClick={ClickHandler} to="/blog-left-sidebar">Blog left sidebar</Link></li>
                                    <li><Link onClick={ClickHandler} to="/blog-fullwidth">Blog full width</Link></li>
                                    <li className="menu-item-has-children">
                                        <Link onClick={ClickHandler} to="/#Level3">Blog Details</Link>
                                        <ul className="sub-menu">
                                            <li><Link onClick={ClickHandler} to="/blog-single/There-are-tens-of-cleaning-companies-listed">Blog Single Default</Link></li>
                                            <li><Link onClick={ClickHandler} to="/blog-single-left-sidebar/There-are-tens-of-cleaning-companies-listed">Blog single left sidebar</Link></li>
                                            <li><Link onClick={ClickHandler} to="/blog-single-fullwidth/There-are-tens-of-cleaning-companies-listed">Blog single full width</Link></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li><Link onClick={ClickHandler} to="/contact">Contact</Link></li>
                        </ul>
                    </div>

                    <div className="search-contact">
                        <div className="header-search-area">
                            <div className={`header-search-form ${menuActive ? "header-search-content-toggle" : ""}`}>
                                <div className="close-btn" onClick={() => setMenuState(!menuActive)}><i className='ti-close'></i></div>
                                <form onSubmit={SubmitHandler} className="form">
                                    <div>
                                        <input type="text" className="form-control"
                                            placeholder="Search here..." />
                                        <button type="submit" className="btn"><i
                                            className="ti-search"></i></button>
                                    </div>
                                </form>
                            </div>
                            <button onClick={() => setMenuState(!menuActive)} className="btn open-btn"><i
                                className={`fi ti-search ${menuActive ? "ti-close" : "fi "}`}></i></button>
                        </div>
                        <div className="contact">
                            <Link onClick={ClickHandler} to="/contact" className="theme-btn">Contact us</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </header>

    )
}

export default Header;
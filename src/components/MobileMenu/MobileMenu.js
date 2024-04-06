import React, { Fragment, useState } from 'react';
import List from "@mui/material/List";
import ListItem from "@mui/material/List";
import Collapse from "@mui/material/Collapse";
import { Link } from "react-router-dom";
import './style.css';

const menus = [
    {
        id: 1,
        title: 'Home',
        link: '/home',
        submenu: [
            {
                id: 11,
                title: 'Home Default',
                link: '/home'
            },
            {
                id: 12,
                title: 'Home style 2',
                link: '/home-2'
            },
            {
                id: 13,
                title: 'Home style 3',
                link: '/home-3'
            }
        ]
    },

    {
        id: 3,
        title: 'Pages',
        link: '/',
        submenu: [
            {
                id: 31,
                title: 'About',
                link: '/about'
            },
            {
                id: 3222,
                title: 'Contact',
                link: '/contact'
            },
            {
                id: 322,
                title: 'Testimonials',
                link: '/testimonials'
            },
            {
                id: 37,
                title: 'Testimonials S2',
                link: '/testimonials-s2'
            },
            {
                id: 36,
                title: 'FAQ',
                link: '/faq'
            },
            {
                id: 36,
                title: '404',
                link: '/404'
            }
        ]
    },
    {
        id: 6,
        title: 'Services',
        link: '/services',
        submenu: [
            {
                id: 61,
                title: 'Services',
                link: '/services',
            },
            {
                id: 62,
                title: 'Service Style 2',
                link: '/services-s2'
            },
            {
                id: 63,
                title: 'Home Cleaning',
                link: '/service-single/Home-Cleaning'
            },
            {
                id: 64,
                title: 'Office Cleaning',
                link: '/service-single/Office-Cleaning'
            },
            {
                id: 64,
                title: 'Window Cleaning',
                link: '/service-single/Window-Cleaning'
            },
            {
                id: 64,
                title: 'Carpet Cleaning',
                link: '/service-single/Carpet-Cleaning'
            }
        ]
    },
    {
        id: 7,
        title: 'Projects',
        link: '/projects',
        submenu: [
            {
                id: 71,
                title: 'Projects',
                link: '/projects'
            },
            {
                id: 72,
                title: 'Projects style 2',
                link: '/projects-s2'
            },
            {
                id: 74,
                title: 'Project single',
                link: '/project-single/Express'
            },
        ]
    },

    {
        id: 5,
        title: 'Blog',
        link: '/blog',
        submenu: [
            {
                id: 51,
                title: 'Blog',
                link: '/blog'
            },
            {
                id: 52,
                title: 'Blog Left sidebar',
                link: '/blog-left-sidebar'
            },
            {
                id: 53,
                title: 'Blog full width',
                link: '/blog-fullwidth'
            },
            {
                id: 54,
                title: 'Blog single',
                link: '/blog-single/There-are-tens-of-cleaning-companies-listed'
            },
            {
                id: 55,
                title: 'Blog single Left sidebar',
                link: '/blog-single-left-sidebar/There-are-tens-of-cleaning-companies-listed'
            },
            {
                id: 56,
                title: 'Blog single full width',
                link: '/blog-single-fullwidth/There-are-tens-of-cleaning-companies-listed'
            },
        ]
    },
    {
        id: 88,
        title: 'Contact',
        link: '/contact',
    }


]

const MobileMenu = () => {

    const [openId, setOpenId] = useState(0);
    const [menuActive, setMenuState] = useState(false);

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <div>
            <div className={`mobileMenu ${menuActive ? "show" : ""}`}>
                <div className="menu-close">
                    <div className="clox" onClick={() => setMenuState(!menuActive)}><i className="ti-close"></i></div>
                </div>

                <ul className="responsivemenu">
                    {menus.map((item, mn) => {
                        return (
                            <ListItem className={item.id === openId ? 'active' : null} key={mn}>
                                {item.submenu ?
                                    <Fragment>
                                        <p onClick={() => setOpenId(item.id === openId ? 0 : item.id)}>{item.title}
                                            <i className={item.id === openId ? 'ti-angle-up' : 'ti-angle-down'}></i>
                                        </p>
                                        <Collapse in={item.id === openId} timeout="auto" unmountOnExit>
                                            <List className="subMenu">
                                                <Fragment>
                                                    {item.submenu.map((submenu, i) => {
                                                        return (
                                                            <ListItem key={i}>
                                                                <Link onClick={ClickHandler} className="active"
                                                                    to={submenu.link}>{submenu.title}</Link>
                                                            </ListItem>
                                                        )
                                                    })}
                                                </Fragment>
                                            </List>
                                        </Collapse>
                                    </Fragment>
                                    : <Link className="active"
                                        to={item.link}>{item.title}</Link>
                                }
                            </ListItem>
                        )
                    })}
                </ul>

            </div>

            <div className="showmenu" onClick={() => setMenuState(!menuActive)}>
                <button type="button" className="navbar-toggler open-btn">
                    <span className="icon-bar first-angle"></span>
                    <span className="icon-bar middle-angle"></span>
                    <span className="icon-bar last-angle"></span>
                </button>
            </div>
        </div>
    )
}

export default MobileMenu;
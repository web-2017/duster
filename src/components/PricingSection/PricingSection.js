import React from 'react'
import { Link } from 'react-router-dom'

const Pricing = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }


    const pricing = [
        {
            li: [' look out the window', ' whole of her', 'lower arm towards', 'sat upright', 'gilded frame'],
            title: 'Basic Plan',
            link: '/',
            price: '65.00',
        },
        {
            li: [' look out the window', ' whole of her', 'lower arm towards', 'sat upright', 'gilded frame'],
            title: 'Popular Plan',
            link: '/',
            price: '45.00',
        },
        {
            li: [' look out the window', ' whole of her', 'lower arm towards', 'sat upright', 'gilded frame'],
            title: 'Standard Plan',
            link: '/',
            price: '65.00',
        },


    ]


    return (
        <section className="pricing-section section-padding">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col col-xl-6  col-lg-8 col-md-10 col-12">
                        <div className="section-title">
                            <span>Pricing Table</span>
                            <h2>Choose Your Plan</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col col-xs-12">
                        <div className="pricing-grids clearfix">
                            {pricing.map((pricing, ptem) => (
                                <div className="grid" key={ptem}>
                                    <div className="pricing-header">
                                        <h5>{pricing.title}</h5>
                                        <h3>${pricing.price} <span>Mo</span></h3>
                                    </div>
                                    <div className="pricing-body">
                                        <ul>
                                            {pricing.li.map((list, i) => (
                                                <li key={i}><i className="ti-check"></i>{list}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="pricing-footer">
                                        <Link className="theme-btn-s4" onClick={ClickHandler} to={pricing.link}>Choose Plan</Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Pricing;
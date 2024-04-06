import React from 'react'
import { Link } from 'react-router-dom'


const HeaderTopbar = () => {
    return (
        <div className="topbar">
            <div className="container">
                <div className="row">
                    <div className="col col-md-3 col-12">
                        <div className="social">
                            <ul>
                                <li><Link to="/"><i className="ti-facebook"></i></Link></li>
                                <li><Link to="/"><i className="ti-twitter-alt"></i></Link></li>
                                <li><Link to="/"><i className="ti-linkedin"></i></Link></li>
                                <li><Link to="/"><i className="ti-pinterest"></i></Link></li>
                                <li><Link to="/"><i className="ti-vimeo-alt"></i></Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col col-md-9 col-12">
                        <div className="text">
                            <p>Do you want any cleaning service, then call us: <span>+57454741</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderTopbar;